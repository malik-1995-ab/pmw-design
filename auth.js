/* PMW Design Ops — shared auth gate (email + password, work-domain restricted) */
(function(){
  var SB_URL="https://oglajrkysripzcyahlux.supabase.co";
  var SB_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nbGFqcmt5c3JpcHpjeWFobHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3NjUyMDUsImV4cCI6MjA5NzM0MTIwNX0.2Fjx1ugopkUP_QaHGFVIH49vQi5ck0k93oUsSPOMWoo";
  var ALLOWED=["@250mils.com","@postermywall.com"];
  var client=null, profile=null, role="guest", cbs=[], booted=false, resolved=false, forceGate=false;

  function allowed(e){e=(e||"").toLowerCase();return ALLOWED.some(function(d){return e.endsWith(d);});}
  function lib(cb){
    if(window.supabase&&window.supabase.createClient){cb();return;}
    var s=document.createElement("script");
    s.src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    s.onload=cb; s.onerror=function(){console.error("auth: supabase-js failed to load");};
    document.head.appendChild(s);
  }
  function css(){
    if(document.getElementById("pmw-auth-css"))return;
    var st=document.createElement("style");st.id="pmw-auth-css";
    st.textContent=[
      "#pmw-auth-gate{position:fixed;inset:0;z-index:100000;background:rgba(20,19,37,.45);display:flex;align-items:center;justify-content:center;font-family:Figtree,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;}",
      ".pmw-auth-card{position:relative;width:380px;max-width:92vw;background:#fff;border:1px solid #e5e7eb;border-radius:20px;box-shadow:0 20px 60px rgba(20,19,37,.10);padding:32px;}",
      ".pmw-auth-x{position:absolute;top:16px;right:16px;width:30px;height:30px;border:none;background:transparent;font-size:22px;line-height:1;color:#9ca3af;cursor:pointer;border-radius:8px;}",
      ".pmw-auth-x:hover{background:#f0f1f4;color:#1a1d21;}",
      ".pmw-auth-logo{font-size:13px;font-weight:600;color:#6b7280;letter-spacing:.02em;margin-bottom:18px;}",
      ".pmw-auth-card h2{margin:0 0 4px;font-size:22px;font-weight:700;color:#1a1d21;}",
      ".pmw-auth-sub{margin:0 0 20px;font-size:14px;line-height:20px;color:#6b7280;}",
      ".pmw-auth-card input{width:100%;height:44px;border:1px solid #e5e7eb;border-radius:12px;padding:0 14px;font-size:14px;font-family:inherit;color:#1a1d21;outline:none;margin-bottom:10px;}",
      ".pmw-auth-card input:focus{border-color:#2f6df6;}",
      ".pmw-auth-err{min-height:18px;font-size:13px;color:#E5484D;margin:2px 0 10px;}",
      ".pmw-auth-btn{width:100%;height:44px;border:none;border-radius:12px;background:#141325;color:#fff;font-size:14px;font-weight:600;font-family:inherit;cursor:pointer;transition:opacity .12s;}",
      ".pmw-auth-btn:hover{opacity:.92;}",
      ".pmw-auth-btn:disabled{opacity:.6;cursor:default;}",
      ".pmw-auth-link{display:block;width:100%;margin-top:12px;background:none;border:none;font-size:13px;font-weight:600;color:#2f6df6;cursor:pointer;font-family:inherit;}"
    ].join("\n");
    document.head.appendChild(st);
  }
  function gate(dismissible){
    css();
    if(document.getElementById("pmw-auth-gate"))return;
    var g=document.createElement("div");g.id="pmw-auth-gate";
    g.innerHTML='<div class="pmw-auth-card">'+(dismissible?'<button class="pmw-auth-x" id="pmw-auth-x">&times;</button>':'')+'<div class="pmw-auth-logo">PMW DESIGN OPS</div><h2 id="pmw-h"></h2><p class="pmw-auth-sub">Use your <b>@250mils.com</b> or <b>@postermywall.com</b> work email to review and comment.</p><div id="pmw-fields"></div><div class="pmw-auth-err" id="pmw-err"></div><button class="pmw-auth-btn" id="pmw-primary"></button><button class="pmw-auth-link" id="pmw-toggle"></button></div>';
    document.body.appendChild(g);
    if(dismissible){
      var xb=g.querySelector("#pmw-auth-x");if(xb)xb.onclick=removeGate;
      g.addEventListener("mousedown",function(e){if(e.target===g)removeGate();});
    }
    var mode="signup";
    var h=g.querySelector("#pmw-h"),fields=g.querySelector("#pmw-fields"),err=g.querySelector("#pmw-err"),primary=g.querySelector("#pmw-primary"),toggle=g.querySelector("#pmw-toggle");
    function bad(m){err.textContent=m||"";}
    function submit(){
      var emailEl=fields.querySelector("#pmw-email"),passEl=fields.querySelector("#pmw-pass");
      var e=(emailEl.value||"").trim().toLowerCase(),p=passEl.value||"";
      if(!allowed(e)){bad("Please use your @250mils.com or @postermywall.com work email.");return;}
      if(!p){bad("Enter a password.");return;}
      var nm="";
      if(mode==="signup"){var nEl=fields.querySelector("#pmw-name");nm=(nEl.value||"").trim();if(!nm){bad("Please enter your name.");return;}}
      if(!client){bad("Still loading — try again in a moment.");return;}
      bad("");primary.disabled=true;
      var op=mode==="signup"?client.auth.signUp({email:e,password:p,options:{data:{name:nm}}}):client.auth.signInWithPassword({email:e,password:p});
      op.then(function(r){
        primary.disabled=false;
        if(r.error){bad(r.error.message);return;}
        if(r.data&&r.data.session){return;}
        if(mode==="signup"){bad("Account created — check your inbox to confirm, then log in.");}
      }).catch(function(){primary.disabled=false;bad("Something went wrong. Try again.");});
    }
    function render(){
      bad("");
      h.textContent=mode==="signup"?"Create your account":"Log in from your work email";
      fields.innerHTML=(mode==="signup"?'<input id="pmw-name" type="text" placeholder="Full name" autocomplete="name">':'')+'<input id="pmw-email" type="email" placeholder="you@250mils.com" autocomplete="email"><input id="pmw-pass" type="password" placeholder="Password" autocomplete="'+(mode==="signup"?"new-password":"current-password")+'">';
      primary.textContent=mode==="signup"?"Create account":"Log in";
      toggle.textContent=mode==="signup"?"Already have an account? Log in":"First time? Create your account";
      var passEl=fields.querySelector("#pmw-pass");if(passEl)passEl.onkeydown=function(ev){if(ev.key==="Enter")submit();};
      var first=fields.querySelector(mode==="signup"?"#pmw-name":"#pmw-email");if(first)first.focus();
    }
    primary.onclick=submit;
    toggle.onclick=function(){mode=(mode==="signup"?"login":"signup");render();};
    render();
  }
  function removeGate(){var g=document.getElementById("pmw-auth-gate");if(g)g.remove();}

  function guest(){
    profile=null; role="guest"; resolved=true;
    document.body.setAttribute("data-role","view");   // anonymous viewers see the read-only (view) UI
    var done=cbs.slice();cbs=[];done.forEach(function(cb){try{cb(null,role);}catch(x){}});
    if(forceGate)gate(false);
  }
  function onAuthed(user){
    var e=(user.email||"").toLowerCase();
    if(!allowed(e)){client.auth.signOut();gate(true);var er=document.getElementById("pmw-err");if(er)er.textContent="That email isn't on an allowed work domain.";return;}
    var hadGate=!!document.getElementById("pmw-auth-gate");
    removeGate();
    var name=(user.user_metadata&&(user.user_metadata.name||user.user_metadata.full_name))||e.split("@")[0];
    // Check if profile already exists. New users get role:'view'; existing users keep their current role.
    client.from("profiles").select("role").eq("id",user.id).maybeSingle().then(function(exist){
      var upsertObj={id:user.id,email:e,name:name};
      if(!exist.data) upsertObj.role="view";   // new user → default to view
      return client.from("profiles").upsert(upsertObj,{onConflict:"id"});
    }).then(function(){
      client.from("profiles").select("role,name,email").eq("id",user.id).single().then(function(r){
        profile=(r&&r.data)||{role:"view",name:name,email:e};
        role=(profile&&profile.role)||"view"; resolved=true;
        document.body.setAttribute("data-role",role);
        if(hadGate){ location.reload(); return; }   // logged in via modal → reload to apply full role state
        var done=cbs.slice();cbs=[];done.forEach(function(cb){try{cb(profile,role);}catch(x){}});
      });
    });
  }
  function boot(){
    if(booted)return;booted=true;
    lib(function(){
      client=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true}});
      client.auth.getSession().then(function(r){
        var s=r.data&&r.data.session;
        if(s&&s.user)onAuthed(s.user);else guest();
      });
      client.auth.onAuthStateChange(function(ev,s){
        if(s&&s.user)onAuthed(s.user);
      });
    });
  }

  /* ===== Role capability model =====
     admin — can change Main directly; full control (edit/rename/delete Main, merge, branch, manage members)
     edit  — CANNOT change Main directly; must create a branch ("New Lofi") and Merge to main; can comment
     view  — comment only
     guest — anonymous viewer (treated as view for UI); must log in to comment
  */
  function can(action){
    switch(action){
      case 'editMainDirect': return role==='admin';                 // rename/delete/edit the Main iteration
      case 'branch':         return role==='admin'||role==='edit';  // create a branch (New Lofi)
      case 'merge':          return role==='admin'||role==='edit';  // merge a branch into main
      case 'comment':        return !!profile;                      // any logged-in user
      case 'manageMembers':  return role==='admin';
      default:               return role==='admin';
    }
  }
  window.PMWAuth={
    require:function(cb){ if(profile){if(cb)cb(profile,role);} else if(resolved){ if(cb)cb(null,role); } else { if(cb)cbs.push(cb); boot(); } },
    isAuthed:function(){return !!profile;},
    can:can,
    openAuth:function(){ boot(); gate(true); },        // dismissible login modal, on demand
    requireLogin:function(){ forceGate=true; if(resolved){ if(!profile)gate(false); } else boot(); },
    profile:function(){return profile;},
    role:function(){return role;},
    client:function(){return client;},
    signOut:function(){ if(client)client.auth.signOut().then(function(){location.reload();}); }
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})();
