/* ===== PMW Design Ops shared harness scripts (extracted) ===== */
/* --- comment core --- */
const ICONS = {"crown-filled":"<path d=\"M19 19h-14c-.5 0 -.9 -.3 -1 -.8l-2 -10c0 -.4 .1 -.8 .5 -1.1c.4 -.2 .8 -.2 1.1 0l4.1 3.3l3.4 -5.1c.4 -.6 1.3 -.6 1.7 0l3.4 5.1l4.1 -3.3c.3 -.3 .8 -.3 1.1 0c.4 .2 .5 .6 .5 1.1l-2 10c0 .5 -.5 .8 -1 .8z\" />","message":"<path d=\"M8 9h8\" /><path d=\"M8 13h6\" /><path d=\"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12\" />","home":"<path d=\"M5 12l-2 0l9 -9l9 9l-2 0\" /><path d=\"M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7\" /><path d=\"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6\" />","clock":"<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M12 7v5l3 3\" />","bell":"<path d=\"M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6\" /><path d=\"M9 17v1a3 3 0 0 0 6 0v-1\" />","search":"<path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" />","plus":"<path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" />","user":"<path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" />","chevron-right":"<path d=\"M9 6l6 6l-6 6\" />","layout-grid":"<path d=\"M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M14 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" /><path d=\"M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4\" />","calendar-event":"<path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -12\" /><path d=\"M16 3l0 4\" /><path d=\"M8 3l0 4\" /><path d=\"M4 11l16 0\" /><path d=\"M8 15h2v2h-2l0 -2\" />","share":"<path d=\"M3 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M15 6a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M8.7 10.7l6.6 -3.4\" /><path d=\"M8.7 13.3l6.6 3.4\" />","mail":"<path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10\" /><path d=\"M3 7l9 6l9 -6\" />","sparkles":"<path d=\"M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6\" />","calendar":"<path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /><path d=\"M11 15h1\" /><path d=\"M12 15v3\" />","building":"<path d=\"M3 21l18 0\" /><path d=\"M9 8l1 0\" /><path d=\"M9 12l1 0\" /><path d=\"M9 16l1 0\" /><path d=\"M14 8l1 0\" /><path d=\"M14 12l1 0\" /><path d=\"M14 16l1 0\" /><path d=\"M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16\" />","users":"<path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" />","palette":"<path d=\"M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25\" /><path d=\"M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" />","user-circle":"<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /><path d=\"M9 10a3 3 0 1 0 6 0a3 3 0 1 0 -6 0\" /><path d=\"M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855\" />","trash":"<path d=\"M4 7l16 0\" /><path d=\"M10 11l0 6\" /><path d=\"M14 11l0 6\" /><path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\" /><path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\" />","dots":"<path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" />","wallet":"<path d=\"M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M20 12v4h-4a2 2 0 0 1 0 -4h4\" />","microphone":"<path d=\"M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5\" /><path d=\"M5 10a7 7 0 0 0 14 0\" /><path d=\"M8 21l8 0\" /><path d=\"M12 17l0 4\" />","arrow-right":"<path d=\"M5 12l14 0\" /><path d=\"M13 18l6 -6\" /><path d=\"M13 6l6 6\" />","heart":"<path d=\"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572\" />","folder-plus":"<path d=\"M12 19h-7a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5\" /><path d=\"M16 19h6\" /><path d=\"M19 16v6\" />","player-play":"<path d=\"M7 4v16l13 -8l-13 -8\" />","photo":"<path d=\"M15 8h.01\" /><path d=\"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12\" /><path d=\"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5\" /><path d=\"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3\" />","folder":"<path d=\"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2\" />","chevron-down":"<path d=\"M6 9l6 6l6 -6\" />","pencil":"<path d=\"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5z\" /><path d=\"M13.5 6.5l4 4\" />","copy":"<path d=\"M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z\" /><path d=\"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1\" />","download":"<path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\" /><path d=\"M7 11l5 5l5 -5\" /><path d=\"M12 4v12\" />","info-circle":"<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M12 8h.01\" /><path d=\"M11 12h1v4h1\" />","eye":"<path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\" />","filter":"<path d=\"M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345z\" />","check":"<path d=\"M5 12l5 5l10 -10\" />","x":"<path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" />","folder-share":"<path d=\"M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v4\" /><path d=\"M16 22l5 -5\" /><path d=\"M21 21.5v-4.5h-4.5\" />","code":"<path d=\"M7 8l-4 4l4 4\" /><path d=\"M17 8l4 4l-4 4\" /><path d=\"M14 4l-4 16\" />","device-desktop":"<path d=\"M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z\" /><path d=\"M7 20h10\" /><path d=\"M9 16v4\" /><path d=\"M15 16v4\" />","device-tablet":"<path d=\"M5 4a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z\" /><path d=\"M11 17h2\" />","device-mobile":"<path d=\"M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z\" /><path d=\"M11 4h2\" /><path d=\"M12 17v.01\" />","maximize":"<path d=\"M4 8v-2a2 2 0 0 1 2 -2h2\" /><path d=\"M4 16v2a2 2 0 0 0 2 2h2\" /><path d=\"M16 4h2a2 2 0 0 1 2 2v2\" /><path d=\"M16 20h2a2 2 0 0 0 2 -2v-2\" />","menu":"<path d=\"M4 7l16 0\" /><path d=\"M4 12l16 0\" /><path d=\"M4 17l16 0\" />","file":"<path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z\" />","crown":"<path d=\"M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z\" />","crown-plus":"<path d=\"M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z\" /><path d=\"M20 2v4\" /><path d=\"M18 4h4\" />","logout":"<path d=\"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2\" /><path d=\"M9 12h12l-3 -3\" /><path d=\"M18 15l3 -3\" />","click":"<path d=\"M3 12l3 0\" /><path d=\"M12 3l0 3\" /><path d=\"M7.8 7.8l-2.2 -2.2\" /><path d=\"M16.2 7.8l2.2 -2.2\" /><path d=\"M7.8 16.2l-2.2 2.2\" /><path d=\"M12 12l9 3l-4 2l-2 4l-3 -9\" />","globe":"<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M3.6 9h16.8\" /><path d=\"M3.6 15h16.8\" /><path d=\"M11.5 3a17 17 0 0 0 0 18\" /><path d=\"M12.5 3a17 17 0 0 1 0 18\" />","help-circle":"<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M12 16v.01\" /><path d=\"M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483\" />","settings":"<path d=\"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z\" /><path d=\"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0\" />"};

function replaceIcons() {
  const FILLED = new Set(['crown-filled']);
  document.querySelectorAll('i[class*="ti ti-"]').forEach(el => {
    const match = el.className.match(/ti ti-([\w-]+)/);
    if (!match) return;
    const name = match[1];
    const svgData = ICONS[name];
    if (!svgData) return;
    const span = document.createElement('span');
    span.className = 'icon' + (FILLED.has(name) ? ' filled' : '');
    const style = el.getAttribute('style');
    if (style) span.setAttribute('style', style);
    el.classList.forEach(c => { if (c !== 'ti' && !c.startsWith('ti-')) span.classList.add(c); });
    span.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' + svgData + '</svg>';
    el.replaceWith(span);
  });
}
replaceIcons();

const hero = document.getElementById('hero');
function switchView(id) {
  document.querySelectorAll('.content').forEach(v => v.style.display = 'none');
  const t = document.getElementById('view-' + id);
  if (t) t.style.display = 'block';
  // Hero only shows on the designs view
  hero.style.display = (id === 'designs') ? 'block' : 'none';
}

switchView('designs');

document.querySelectorAll('.nav-item[data-view]').forEach(n => {
  n.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(x => x.classList.remove('active'));
    n.classList.add('active');
    switchView(n.dataset.view);
  });
});

document.querySelectorAll('.tab-group').forEach(group => {
  group.querySelectorAll('.tab-item').forEach(t => {
    t.addEventListener('click', () => {
      group.querySelectorAll('.tab-item').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    });
  });
});

// ── Header mega-menu behavior (hover + click toggle), matching the live site ──
const navZone = document.querySelector('.nav-zone');

function closeMega() {
  document.querySelectorAll('.mega').forEach(p => p.classList.remove('open'));
  document.querySelectorAll('.top-nav-item').forEach(x => x.classList.remove('active'));
}

function openMega(key, trigger) {
  closeMega();
  const panel = document.getElementById('mega-' + key);
  if (!panel) return;
  panel.classList.add('open');
  trigger.classList.add('active');
  // Anchor panel under its trigger, clamped to the viewport
  const r = trigger.getBoundingClientRect();
  const pw = panel.offsetWidth;
  let left = r.left;
  const max = window.innerWidth - pw - 16;
  if (left > max) left = Math.max(16, max);
  if (left < 16) left = 16;
  panel.style.left = left + 'px';
}

document.querySelectorAll('.top-nav-item[data-mega]').forEach(item => {
  const key = item.dataset.mega;
  item.addEventListener('mouseenter', () => openMega(key, item));
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const panel = document.getElementById('mega-' + key);
    if (panel && panel.classList.contains('open')) closeMega();
    else openMega(key, item);
  });
});

// Close when leaving the whole nav zone (topbar + open panel)
navZone.addEventListener('mouseleave', closeMega);
// Close on Escape
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMega(); });

// ===================== My Stuff wiring =====================
const msPanels = { my:'mstab-my', shared:'mstab-shared', recommended:'mstab-recommended', favorites:'mstab-favorites' };
const actsMy = document.getElementById('acts-my');
const actsShared = document.getElementById('acts-shared');
const gridView = document.getElementById('ms-grid-view');
const folderView = document.getElementById('ms-folder-view');

function showMsTab(key){
  Object.values(msPanels).forEach(id => { const e = document.getElementById(id); if (e) e.hidden = true; });
  const p = document.getElementById(msPanels[key]); if (p) p.hidden = false;
  actsMy.hidden = (key !== 'my');
  actsShared.hidden = (key !== 'shared');
  if (key === 'my'){ gridView.hidden = false; folderView.hidden = true; }
}
document.querySelectorAll('#ms-tabs .tab-item').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('#ms-tabs .tab-item').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    showMsTab(t.dataset.mstab);
  });
});

// Folder open / back (within My designs)
function openFolder(name){
  document.getElementById('crumb-name').textContent = name;
  gridView.hidden = true; folderView.hidden = false;
}
function wireFolder(el){ el.addEventListener('click', () => openFolder(el.getAttribute('data-folder'))); }
document.querySelectorAll('#ms-grid-view [data-folder]').forEach(wireFolder);
document.getElementById('crumb-back').addEventListener('click', () => { folderView.hidden = true; gridView.hidden = false; });

// New folder (inline editable card)
const folderGrid = document.getElementById('folder-grid');
function startNewFolder(){
  if (folderGrid.querySelector('.folder.editing')) return;
  const card = document.createElement('div');
  card.className = 'folder editing';
  card.innerHTML = '<input type="text" value="Untitled folder"><button class="fld-check"><i class="ti ti-check"></i></button>';
  folderGrid.insertBefore(card, folderGrid.children[1] || null);
  replaceIcons();
  const inp = card.querySelector('input'); inp.focus(); inp.select();
  function commit(){
    const name = inp.value.trim() || 'Untitled folder';
    const f = document.createElement('div');
    f.className = 'folder'; f.setAttribute('data-folder', name);
    f.innerHTML = '<i class="ti ti-folder"></i><span>' + name + '</span>';
    folderGrid.replaceChild(f, card); replaceIcons(); wireFolder(f);
  }
  card.querySelector('.fld-check').addEventListener('click', commit);
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') commit(); if (e.key === 'Escape') card.remove(); });
}
document.getElementById('btn-new-folder').addEventListener('click', startNewFolder);
document.getElementById('folder-add').addEventListener('click', startNewFolder);

// Card kebab context menu
const ctx = document.getElementById('ctx-menu');
function closeCtx(){ ctx.classList.remove('open'); }
document.querySelectorAll('[data-kebab]').forEach(k => {
  k.addEventListener('click', e => {
    e.stopPropagation();
    const open = ctx.classList.contains('open');
    closeCtx();
    if (open) return;
    ctx.classList.add('open');
    const r = k.getBoundingClientRect();
    const mw = ctx.offsetWidth, mh = ctx.offsetHeight;
    let left = r.right - mw; if (left < 8) left = 8;
    let top = r.bottom + 6; if (top + mh > window.innerHeight - 8) top = r.top - mh - 6;
    ctx.style.left = left + 'px'; ctx.style.top = top + 'px';
  });
});
document.addEventListener('click', e => { if (!ctx.contains(e.target)) closeCtx(); });
ctx.querySelectorAll('.ctx-item').forEach(i => i.addEventListener('click', closeCtx));

// New design modal
const modal = document.getElementById('create-modal');
function openModal(){ modal.classList.add('open'); }
function closeModal(){ modal.classList.remove('open'); }
document.getElementById('btn-new-design').addEventListener('click', openModal);
document.getElementById('design-add').addEventListener('click', openModal);
document.getElementById('create-close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
modal.querySelectorAll('.ms-item').forEach(it => it.addEventListener('click', () => {
  modal.querySelectorAll('.ms-item').forEach(x => x.classList.remove('active'));
  it.classList.add('active');
}));
document.addEventListener('keydown', e => { if (e.key === 'Escape'){ closeModal(); closeCtx(); } });

// ===================== Device preview toggle =====================
const vframe = document.getElementById('vframe');
document.querySelectorAll('#device-toggle button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#device-toggle button').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    vframe.style.width = ''; vframe.style.height = '';   // reset any manual drag-resize
    vframe.setAttribute('data-device', b.dataset.device);
    closeMega(); closeCtx(); closeModal();
  });
});

// Drag-resize the frame via the edge handles
const stageEl = document.querySelector('.stage');
const DEV_W = { mobile: [360, 600], tablet: [700, 1000], desktop: [1100, Infinity] };
function clampW(w){
  const dev = vframe.getAttribute('data-device');
  const [mn, mx] = DEV_W[dev] || [280, Infinity];
  const ceil = Math.min(mx, stageEl.clientWidth - 24);
  const floor = Math.min(mn, ceil);
  return Math.max(floor, Math.min(w, ceil));
}
const clampH = h => Math.max(320, Math.min(h, 4000));
vframe.querySelectorAll('.rz').forEach(handle => {
  handle.addEventListener('mousedown', e => {
    e.preventDefault();
    const axis = handle.dataset.rz, dir = parseInt(handle.dataset.dir, 10);
    const r = vframe.getBoundingClientRect(), sw = r.width, sh = r.height, sx = e.clientX, sy = e.clientY;
    document.body.style.userSelect = 'none';
    document.body.style.cursor = axis === 'x' ? 'ew-resize' : 'ns-resize';
    vframe.style.transition = 'none';
    function move(ev){
      if (axis === 'x') vframe.style.width = clampW(sw + (ev.clientX - sx) * 2 * dir) + 'px';
      else vframe.style.height = clampH(sh + (ev.clientY - sy) * 2 * dir) + 'px';
    }
    function up(){
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
      document.body.style.userSelect = ''; document.body.style.cursor = '';
      vframe.style.transition = '';
    }
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  });
});

// Auto-fit: zoom the preview down so it stays fully visible when space shrinks
// (drawers open, comments panel open, small screens). Never zooms past 1x.
function fitFrame(){
  if(!vframe||!stageEl) return;
  var dev = vframe.getAttribute('data-device');
  if(dev === 'full'){ vframe.style.zoom=''; return; }
  vframe.style.zoom = '';                 // reset to measure natural size
  var fw = vframe.offsetWidth;
  if(!fw) return;
  var avail = stageEl.clientWidth - 48;   // breathing room
  var s = avail / fw;
  vframe.style.zoom = (s < 1) ? Math.max(0.25, s) : '';
}
// Collapse toolbar buttons to icon-only when the bar would overflow (small screens / drawers open)
function updateNavDensity(){
  var bar = document.querySelector('.preview-bar');
  if(!bar) return;
  document.body.classList.remove('nav-iconly');          // measure with full labels
  var groups = bar.children, need = 0;
  for(var i=0;i<groups.length;i++){
    var g = groups[i], n = 0;
    for(var j=0;j<g.children.length;j++){ var ch=g.children[j]; if(getComputedStyle(ch).display==='none') continue; need += ch.getBoundingClientRect().width; n++; }
    need += 8*Math.max(0,n-1);
  }
  need += 2*12 + 16;                                      // gaps between groups + bar padding
  var avail = window.innerWidth
            - (document.body.classList.contains('diff-open') ? 400 : 0)
            - (document.body.classList.contains('anno-open') ? 340 : 0)
            - 16;
  if(need > avail){ document.body.classList.add('nav-iconly'); }
}
function relayout(){ fitFrame(); updateNavDensity(); }
window.addEventListener('resize', relayout);
if(window.ResizeObserver){ new ResizeObserver(function(){ relayout(); }).observe(stageEl); }
document.querySelectorAll('#device-toggle button').forEach(function(b){ b.addEventListener('click', function(){ setTimeout(relayout, 280); }); });
setTimeout(relayout, 80); setTimeout(updateNavDensity, 600); setTimeout(updateNavDensity, 1500);

// ===================== User-type dropdown =====================
const shellEl = document.querySelector('.shell');
const userDD = document.getElementById('user-dd');
const userBtn = document.getElementById('user-dd-btn');
const userLabel = document.getElementById('user-dd-label');
const userTrigIcon = userBtn.querySelector('.icon:not(.chev)');
userBtn.addEventListener('click', e => { e.stopPropagation(); userDD.classList.toggle('open'); });
document.addEventListener('click', e => { if (!userDD.contains(e.target)) userDD.classList.remove('open'); });
userDD.querySelectorAll('.pv-dd-item').forEach(item => {
  item.addEventListener('click', () => {
    userDD.querySelectorAll('.pv-dd-item').forEach(x => x.classList.remove('active'));
    item.classList.add('active');
    userLabel.textContent = item.dataset.label;
    const ic = item.dataset.icon;
    if (ic && ICONS[ic] && userTrigIcon) userTrigIcon.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' + ICONS[ic] + '</svg>';
    shellEl.setAttribute('data-user', item.dataset.user);
    userDD.classList.remove('open');
  });
});

// Screen selector dropdown (top-left)
const screenDD = document.getElementById('screen-dd');
const screenBtn = document.getElementById('screen-dd-btn');
const screenLabel = document.getElementById('screen-dd-label');
screenBtn.addEventListener('click', e => { e.stopPropagation(); screenDD.classList.toggle('open'); });
document.addEventListener('click', e => { if (!screenDD.contains(e.target)) screenDD.classList.remove('open'); });
screenDD.querySelectorAll('.pv-dd-item').forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('disabled')) return;
    screenDD.querySelectorAll('.pv-dd-item').forEach(x => x.classList.remove('active'));
    item.classList.add('active');
    screenLabel.textContent = item.querySelector('.pv-dd-name').textContent;
    screenDD.classList.remove('open');
  });
});

// Lo-Fi / Hi-Fi toggle
document.querySelectorAll('#fidelity-toggle button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#fidelity-toggle button').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  });
});

// ===================== New Task dialog =====================
const taskModal = document.getElementById('task-modal');
function openTask(){ taskModal.classList.add('open'); }
function closeTask(){ taskModal.classList.remove('open'); }
var _nt = document.querySelector('.pv-newtask'); if (_nt) _nt.addEventListener('click', openTask);
document.getElementById('task-close').addEventListener('click', closeTask);
document.getElementById('task-cancel').addEventListener('click', closeTask);
taskModal.addEventListener('click', e => { if (e.target === taskModal) closeTask(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeTask(); });

const taskVert = document.getElementById('task-vertical');
const taskVertLabel = document.getElementById('task-vertical-label');
taskVert.querySelector('.dlg-select-btn').addEventListener('click', e => { e.stopPropagation(); taskVert.classList.toggle('open'); });
document.addEventListener('click', e => { if (!taskVert.contains(e.target)) taskVert.classList.remove('open'); });
taskVert.querySelectorAll('.dlg-opt').forEach(o => o.addEventListener('click', () => {
  taskVert.querySelectorAll('.dlg-opt').forEach(x => x.classList.remove('active'));
  o.classList.add('active');
  taskVertLabel.textContent = o.dataset.label;
  taskVert.classList.remove('open');
}));

document.querySelectorAll('#task-fid button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('#task-fid button').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
}));

// ===================== Topbar-right popovers =====================
function closeAllPops(){ document.querySelectorAll('.tb-pop').forEach(p => p.classList.remove('open')); }
[['tb-bell','pop-bell'], ['tb-create','pop-create'], ['tb-avatar','pop-account']].forEach(([btnId, popId]) => {
  const btn = document.getElementById(btnId), pop = document.getElementById(popId);
  if (!btn || !pop) return;
  btn.addEventListener('click', e => {
    e.stopPropagation();
    const wasOpen = pop.classList.contains('open');
    closeAllPops();
    if (!wasOpen) pop.classList.add('open');
  });
});
const tbSearchInput = document.querySelector('.search-wrap input');
const popSearch = document.getElementById('pop-search');
if (tbSearchInput && popSearch) {
  tbSearchInput.addEventListener('focus', () => { closeAllPops(); popSearch.classList.add('open'); });
}
document.querySelectorAll('.tb-search-pill').forEach(p => p.addEventListener('click', () => {
  document.querySelectorAll('.tb-search-pill').forEach(x => x.classList.remove('active'));
  p.classList.add('active');
}));
document.addEventListener('click', e => {
  if (!e.target.closest('.tb-ctrl') && !e.target.closest('.search-wrap')) closeAllPops();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllPops(); });
/* --- comment UI (annotations) --- */
(function(){
  var SB_URL="https://oglajrkysripzcyahlux.supabase.co";
  var SB_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nbGFqcmt5c3JpcHpjeWFobHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3NjUyMDUsImV4cCI6MjA5NzM0MTIwNX0.2Fjx1ugopkUP_QaHGFVIH49vQi5ck0k93oUsSPOMWoo";
  var MOCKUP=(window.PMW_MOCKUP)||((location.pathname.split('/').pop()||'').replace('.html','')||'postermywall-lofi');
  var H={apikey:SB_KEY,Authorization:"Bearer "+SB_KEY};
  var JH=Object.assign({'Content-Type':'application/json'},H);
  var MINE="#2F6DF6",OTHER="#E5484D",GREY="#9AA0AB";
  function tint(h,a){var n=parseInt(h.slice(1),16);return 'rgba('+((n>>16)&255)+','+((n>>8)&255)+','+(n&255)+','+a+')';}

  function start(){
    var vframe=document.getElementById('vframe');
    if(!vframe) return;
    var SCROLLER_SEL={desktop:'.main',tablet:'.t-main',mobile:'.m-body'};
    function devKey(){var d=vframe.getAttribute('data-device');return d==='tablet'?'tablet':(d==='mobile'?'mobile':'desktop');}
    function getScroller(){return vframe.querySelector(SCROLLER_SEL[devKey()])||vframe;}
    var layer=document.createElement('div');layer.id='anno-layer';
    var scroller=null;
    function sizeLayer(){if(!scroller)return;layer.style.height=((scroller===vframe?vframe.clientHeight:scroller.scrollHeight)||0)+'px';}
    function mountLayer(){var sc=getScroller();if(sc!==scroller){if(sc!==vframe){sc.style.position='relative';}sc.appendChild(layer);scroller=sc;}sizeLayer();}
    mountLayer();
    window.addEventListener('resize',sizeLayer);
    window.addEventListener('load',function(){setTimeout(mountLayer,50);});
    setTimeout(mountLayer,400);
    var _devTog=document.getElementById('device-toggle');if(_devTog)_devTog.addEventListener('click',function(){removePending();closePop();setTimeout(function(){mountLayer();render();},300);});
    var annos=[],replies={},mode=false,draft=null,curPop=null,pendingEl=null,curThreadId=null,numById={},editState=null;
    var AV_COLORS=['#E5484D','#2F6DF6','#E5731E','#12A150','#8B5CF6','#EC4899','#0EA5E9','#D97706','#0F766E','#7C3AED'];
    function avatarColor(name){var s=(''+(name||'?'));var h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))>>>0;return AV_COLORS[h%AV_COLORS.length];}
    function avatarLetter(name){var s=(''+(name||'?')).trim();return (s.charAt(0)||'?').toUpperCase();}
    var SVG_CHECK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2l4 -4"/></svg>';
    var SVG_X='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>';
    var SVG_DOTS='<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>';
    var SVG_SEND='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7 -7l7 7"/></svg>';
    var RKEY='pmw_read_'+MOCKUP, readMap={};
    try{readMap=JSON.parse(localStorage.getItem(RKEY)||'{}');}catch(e){readMap={};}
    function saveRead(){try{localStorage.setItem(RKEY,JSON.stringify(readMap));}catch(e){}}

    var commentsBtn=document.getElementById('anno-comments-btn');
    var shareBtn=document.getElementById('anno-share-btn');
    var countEl=document.getElementById('anno-count');

    var panel=document.createElement('div');panel.className='anno-panel';
    panel.innerHTML='<div class="anno-panel-head"><span id="anno-panel-title">All Comments (0)</span><div class="anno-head-actions"><button class="anno-x" id="anno-panel-close">&times;</button></div></div><div class="anno-panel-body" id="anno-panel-body"></div>';
    document.body.appendChild(panel);
    var panelBody=panel.querySelector('#anno-panel-body');
    panel.querySelector('#anno-panel-close').onclick=function(){setPanel(false);};

    var toast=document.createElement('div');toast.className='anno-toast';document.body.appendChild(toast);
    function showToast(m){toast.textContent=m;toast.classList.add('show');setTimeout(function(){toast.classList.remove('show');},1800);}

    function esc(s){return (s||'').replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
    function fmtTime(t){try{var d=new Date(t),s=Math.max(0,(Date.now()-d.getTime())/1000);if(s<45)return 'now';var m=Math.floor(s/60);if(m<60)return m+'m';var h=Math.floor(m/60);if(h<24)return h+'h';var dd=Math.floor(h/24);if(dd<7)return dd+'d';var w=Math.floor(dd/7);if(w<5)return w+'w';return d.toLocaleDateString([],{month:'short',day:'numeric'});}catch(e){return '';}}
    function getName(){var p=(window.PMWAuth&&PMWAuth.profile&&PMWAuth.profile());return (p&&(p.name||p.email))||'';}
    function ensureName(){var n=getName();if(n)return Promise.resolve(n);if(window.PMWAuth&&PMWAuth.openAuth)PMWAuth.openAuth();return Promise.reject(new Error('login-required'));}

    function latestActivity(a){var t=a.created_at;var rs=replies[a.id]||[];rs.forEach(function(r){if(r.created_at>t)t=r.created_at;});return t;}
    function isRead(a){var s=readMap[a.id];return !!(s&&s>=latestActivity(a));}
    function markRead(a){readMap[a.id]=latestActivity(a);saveRead();render();}
    function markReadById(id){var a=null;annos.forEach(function(x){if(x.id===id)a=x;});if(a)markRead(a);}
    function flashById(id){var el=layer.querySelector('[data-id="'+id+'"]');if(!el)return;if(el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});el.classList.remove('anno-flash');void el.offsetWidth;el.classList.add('anno-flash');setTimeout(function(){el.classList.remove('anno-flash');},1000);}
    function focusComment(id){
      var a=null;annos.forEach(function(x){if(x.id===id)a=x;});if(!a)return;
      var el=layer.querySelector('[data-id="'+id+'"]');
      if(!el){openThreadPopup(a,{clientX:Math.round(window.innerWidth/2),clientY:140});return;}
      if(el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
      setTimeout(function(){
        var cur=layer.querySelector('[data-id="'+id+'"]')||el;
        var r=cur.getBoundingClientRect();
        openThreadPopup(a,{clientX:r.left+r.width/2,clientY:r.top});   // markRead->render rebuilds pins
        var el2=layer.querySelector('[data-id="'+id+'"]')||cur;       // flash the fresh pin
        el2.classList.remove('anno-flash');void el2.offsetWidth;el2.classList.add('anno-flash');
        setTimeout(function(){el2.classList.remove('anno-flash');},1000);
      },300);
    }

    function load(){
      return fetch(SB_URL+"/rest/v1/annotations?mockup=eq."+MOCKUP+"&order=created_at.asc&select=*",{headers:H})
        .then(function(r){return r.json();})
        .then(function(a){
          if(!Array.isArray(a)){return;}
          annos=a;
          var ids=annos.map(function(x){return '"'+x.id+'"';});
          if(!ids.length){replies={};render();return;}
          return fetch(SB_URL+"/rest/v1/replies?select=*&order=created_at.asc&annotation_id=in.("+ids.join(",")+")",{headers:H})
            .then(function(r){return r.json();})
            .then(function(rs){replies={};if(Array.isArray(rs))rs.forEach(function(r){(replies[r.annotation_id]=replies[r.annotation_id]||[]).push(r);});render();});
        }).catch(function(e){console.error('anno load',e);});
    }

    function closePop(){if(curPop){curPop.remove();curPop=null;}curThreadId=null;editState=null;}
    function removePending(){if(pendingEl){pendingEl.remove();pendingEl=null;}}
    function positionPop(pop,ev){
      pop.style.position='fixed';document.body.appendChild(pop);
      var pw=pop.offsetWidth||260,ph=pop.offsetHeight||150;
      var x=ev.clientX+8,y=ev.clientY+8;
      if(x+pw>window.innerWidth-8)x=ev.clientX-pw-8;
      if(y+ph>window.innerHeight-8)y=ev.clientY-ph-8;
      if(x<8)x=8;if(y<8)y=8;
      pop.style.left=x+'px';pop.style.top=y+'px';curPop=pop;
    }
    function showPending(payload){
      removePending();
      var el=document.createElement('div');
      if(payload.type==='area'){el.className='anno-area anno-pending';el.style.left=(payload.x*100)+'%';el.style.top=(payload.y*100)+'%';el.style.width=(payload.w*100)+'%';el.style.height=(payload.h*100)+'%';el.style.borderColor=MINE;el.style.background=tint(MINE,0.12);}
      else{el.className='anno-pin anno-pending';el.style.left=(payload.x*100)+'%';el.style.top=(payload.y*100)+'%';el.style.background=MINE;el.textContent='+';}
      layer.appendChild(el);pendingEl=el;
    }
    function openCompose(payload,ev){
      closePop();showPending(payload);
      var pop=document.createElement('div');pop.className='anno-pop';
      pop.innerHTML='<textarea placeholder="Add your feedback…"></textarea><div class="anno-pop-actions"><button class="anno-btn anno-btn-ghost" data-x>Cancel</button><button class="anno-btn anno-btn-primary" data-ok>Post</button></div>';
      positionPop(pop,ev);
      var ta=pop.querySelector('textarea');ta.focus();
      pop.querySelector('[data-x]').onclick=function(){removePending();closePop();};
      pop.querySelector('[data-ok]').onclick=function(){
        var text=ta.value.trim();if(!text){ta.focus();return;}
        ensureName().then(function(name){
          var body=Object.assign({mockup:MOCKUP,comment:text,author:name,device:devKey()},payload);
          return fetch(SB_URL+"/rest/v1/annotations",{method:'POST',headers:Object.assign({Prefer:'return=representation'},JH),body:JSON.stringify(body)});
        }).then(function(r){return r.json();}).then(function(rows){
          removePending();closePop();
          if(rows&&rows[0]){readMap[rows[0].id]=rows[0].created_at;saveRead();}
          return load();
        }).then(function(){showToast('Comment added');})
        .catch(function(err){if(err&&err.message==='login-required')return;console.error(err);showToast('Could not save');});
      };
    }

    function setResolved(id,val){
      return fetch(SB_URL+"/rest/v1/annotations?id=eq."+id,{method:'PATCH',headers:Object.assign({Prefer:'return=minimal'},JH),body:JSON.stringify({resolved:val})})
        .then(function(){return load();}).then(function(){showToast(val?'Marked resolved':'Reopened');})
        .catch(function(err){console.error(err);showToast('Could not update');});
    }
    function moveAnno(id,nx,ny){
      return fetch(SB_URL+"/rest/v1/annotations?id=eq."+id,{method:'PATCH',headers:Object.assign({Prefer:'return=minimal'},JH),body:JSON.stringify({x:nx,y:ny})})
        .then(function(){return load();}).then(function(){showToast('Comment moved');})
        .catch(function(err){console.error(err);showToast('Could not move');});
    }

    function msgHTML(m,myName){
      var mine=(!!myName&&m.author===myName);
      var editing=(editState&&editState.kind===m.kind&&editState.id===m.id);
      var menu=mine?'<div class="tp-menu-wrap"><button class="tp-menu-btn" data-act="msgmenu">'+SVG_DOTS+'</button><div class="tp-menu"><button data-act="editmsg" data-kind="'+m.kind+'" data-id="'+m.id+'">Edit comment</button><button class="danger" data-act="delmsg" data-kind="'+m.kind+'" data-id="'+m.id+'">Delete comment</button></div></div>':'';
      var textPart=editing
        ?'<div class="tp-edit"><textarea data-edit-input data-kind="'+m.kind+'" data-id="'+m.id+'">'+esc(m.text)+'</textarea><div class="tp-edit-actions"><button class="anno-link" data-act="canceledit">Cancel</button><button class="anno-link" data-act="saveedit" data-kind="'+m.kind+'" data-id="'+m.id+'">Save</button></div></div>'
        :'<div class="tp-text">'+esc(m.text)+'</div>';
      return '<div class="tp-msg"><div class="tp-avatar" style="background:'+avatarColor(m.author)+'">'+avatarLetter(m.author)+'</div><div class="tp-msg-main"><div class="tp-msg-head"><span class="tp-author">'+esc(m.author||'Anonymous')+(mine?' (you)':'')+'</span><span class="tp-time">'+fmtTime(m.t)+'</span>'+menu+'</div>'+textPart+'</div></div>';
    }
    function openThreadPopup(a,ev){
      closePop();
      var pop=document.createElement('div');pop.className='anno-pop anno-thread';
      pop.innerHTML='<div class="tp-head"><span class="tp-title">Comment</span><div class="tp-head-actions"><button class="tp-icon" data-act="toggleresolve" data-id="'+a.id+'">'+SVG_CHECK+'</button><button class="tp-icon" data-act="closepop">'+SVG_X+'</button></div></div><div class="tp-body"></div><div class="tp-foot"></div>';
      pop.addEventListener('click',actHandler);pop.addEventListener('keydown',replyKey);
      curPop=pop;curThreadId=a.id;fillPopup();positionPop(pop,ev);markRead(a);
    }
    function fillPopup(){
      if(!curPop||curThreadId==null)return;
      var a=null;annos.forEach(function(x){if(x.id===curThreadId)a=x;});if(!a){closePop();return;}
      var myName=getName();
      var rb=curPop.querySelector('[data-act="toggleresolve"]');if(rb){rb.classList.toggle('active',!!a.resolved);rb.setAttribute('data-id',a.id);}
      var msgs=[{kind:'anno',id:a.id,author:a.author,t:a.created_at,text:a.comment}];
      (replies[a.id]||[]).forEach(function(r){msgs.push({kind:'reply',id:r.id,author:r.author,t:r.created_at,text:r.comment});});
      curPop.querySelector('.tp-body').innerHTML=msgs.map(function(m){return msgHTML(m,myName);}).join('');
      curPop.querySelector('.tp-foot').innerHTML='<div class="tp-avatar" style="background:'+avatarColor(myName)+'">'+avatarLetter(myName)+'</div><div class="tp-reply"><input type="text" placeholder="Reply" data-reply-input data-id="'+a.id+'"><button class="tp-send" data-act="sendpop" data-id="'+a.id+'">'+SVG_SEND+'</button></div>';
    }
    function patchComment(kind,id,text){
      text=(''+(text||'')).trim();if(!text)return Promise.reject(new Error('empty'));
      var url=kind==='reply'?(SB_URL+"/rest/v1/replies?id=eq."+id):(SB_URL+"/rest/v1/annotations?id=eq."+id);
      return fetch(url,{method:'PATCH',headers:Object.assign({Prefer:'return=representation'},JH),body:JSON.stringify({comment:text})})
        .then(function(r){if(!r.ok)throw new Error('patch');return r.json();})
        .then(function(rows){if(!Array.isArray(rows)||!rows.length)throw new Error('denied');});
    }
    function deleteComment(kind,id){
      var HR=Object.assign({Prefer:'return=representation'},JH);
      if(kind==='reply')return fetch(SB_URL+"/rest/v1/replies?id=eq."+id,{method:'DELETE',headers:HR}).then(function(r){return r.json();}).then(function(rows){if(!Array.isArray(rows)||!rows.length)throw new Error('denied');});
      return fetch(SB_URL+"/rest/v1/replies?annotation_id=eq."+id,{method:'DELETE',headers:JH})
        .then(function(){return fetch(SB_URL+"/rest/v1/annotations?id=eq."+id,{method:'DELETE',headers:HR});})
        .then(function(r){return r.json();}).then(function(rows){if(!Array.isArray(rows)||!rows.length)throw new Error('denied');});
    }
    function confirmModal(msg,okLabel,onok){
      var bg=document.createElement('div');bg.className='anno-modal-bg';
      bg.innerHTML='<div class="anno-modal"><h3>'+esc(msg)+'</h3><div class="anno-modal-actions"><button class="anno-btn anno-btn-ghost" data-x>Cancel</button><button class="anno-btn anno-btn-primary" data-ok>'+esc(okLabel)+'</button></div></div>';
      document.body.appendChild(bg);
      bg.querySelector('[data-x]').onclick=function(){bg.remove();};
      bg.querySelector('[data-ok]').onclick=function(){bg.remove();onok();};
    }
    function focusThread(id){
      panel.classList.add('open');
      var el=panelBody.querySelector('.anno-item[data-id="'+id+'"]');
      if(el){el.scrollIntoView({block:'center',behavior:'smooth'});el.classList.add('flash');setTimeout(function(){el.classList.remove('flash');},900);}
    }

    function attachAnno(el,a,mine){
      if(mine){
        el.style.cursor='grab';
        el.addEventListener('pointerdown',function(e){
          if(e.target.classList.contains('anno-link'))return;
          e.stopPropagation();
          var lr=layer.getBoundingClientRect(),sx=e.clientX,sy=e.clientY,ox=a.x,oy=a.y,moved=false;
          try{el.setPointerCapture(e.pointerId);}catch(err){}
          el.style.cursor='grabbing';
          function mv(ev){
            if(Math.abs(ev.clientX-sx)>3||Math.abs(ev.clientY-sy)>3)moved=true;
            var nx=Math.min(1,Math.max(0,ox+(ev.clientX-sx)/lr.width)),ny=Math.min(1,Math.max(0,oy+(ev.clientY-sy)/lr.height));
            el.style.left=(nx*100)+'%';el.style.top=(ny*100)+'%';el._nx=nx;el._ny=ny;
          }
          function up(ev){
            el.removeEventListener('pointermove',mv);el.removeEventListener('pointerup',up);el.style.cursor='grab';
            if(moved){moveAnno(a.id,el._nx,el._ny);}else{openThreadPopup(a,ev);}
          }
          el.addEventListener('pointermove',mv);el.addEventListener('pointerup',up);
        });
      }else{el.style.cursor='pointer';el.onclick=function(ev){ev.stopPropagation();openThreadPopup(a,ev);};}
    }

    function sendReply(id,inp){
      var text=(inp.value||'').trim();if(!text){inp.focus();return;}
      inp.disabled=true;
      ensureName().then(function(name){
        return fetch(SB_URL+"/rest/v1/replies",{method:'POST',headers:Object.assign({Prefer:'return=minimal'},JH),body:JSON.stringify({annotation_id:id,comment:text,author:name})});
      }).then(function(){return load();}).then(function(){markReadById(id);showToast('Reply added');})
      .catch(function(err){if(err&&err.message==='login-required'){inp.disabled=false;return;}console.error(err);showToast('Could not save');inp.disabled=false;});
    }
    function replyKey(e){
      if(e.key!=='Enter'||e.shiftKey)return;
      var inp=e.target.closest&&e.target.closest('[data-reply-input]');
      if(inp){e.preventDefault();sendReply(inp.getAttribute('data-id'),inp);return;}
      var ei=e.target.closest&&e.target.closest('[data-edit-input]');
      if(ei){e.preventDefault();patchComment(ei.getAttribute('data-kind'),ei.getAttribute('data-id'),ei.value).then(function(){editState=null;return load();}).then(function(){showToast('Comment updated');}).catch(function(err){if(err&&err.message==='empty')return;showToast('Could not update');});}
    }
    function summaryHTML(a,num,resolved,mine,read){
      var reps=replies[a.id]||[];
      var col=resolved?GREY:(read?GREY:(mine?MINE:OTHER));
      var badge=resolved?'<span class="ai-num done">&#10003;</span>':'<span class="ai-num" style="background:'+col+'">'+num+'</span>';
      var dot=(!resolved&&!read)?'<span class="ai-dot" style="background:'+(mine?MINE:OTHER)+'"></span>':'';
      var rc=reps.length?('<div class="ai-replycount">'+reps.length+(reps.length===1?' reply':' replies')+'</div>'):'';
      return '<div class="anno-item'+(resolved?' resolved':'')+(read&&!resolved?' read':'')+'" data-id="'+a.id+'">'
        +'<div class="ai-top">'+badge+'<span class="ai-author">'+esc(a.author||'Anonymous')+(mine?' (you)':'')+'</span>'+dot+'<span class="ai-time">'+fmtTime(a.created_at)+'</span></div>'
        +'<div class="ai-text ai-clamp">'+esc(a.comment)+'</div>'
        +rc+'</div>';
    }

    function render(){
      mountLayer();
      var myName=getName();
      var dk=devKey();
      var scoped=annos.filter(function(a){return (a.device||'desktop')===dk;});
      var open=scoped.filter(function(a){return !a.resolved;});
      var done=scoped.filter(function(a){return a.resolved;});
      countEl.textContent=open.length;numById={};
      var titleEl=document.getElementById('anno-panel-title');if(titleEl)titleEl.textContent='All Comments ('+(open.length+done.length)+')';
      var old=layer.querySelectorAll('.anno-pin:not(.anno-pending),.anno-area:not(.anno-pending)');for(var k=0;k<old.length;k++)old[k].remove();
      open.forEach(function(a,i){
        var num=i+1,mine=(!!myName&&a.author===myName),read=isRead(a);numById[a.id]=num;
        var col=read?GREY:(mine?MINE:OTHER);
        if(a.type==='area'){
          var el=document.createElement('div');el.className='anno-area';el.setAttribute('data-id',a.id);
          el.style.left=(a.x*100)+'%';el.style.top=(a.y*100)+'%';el.style.width=((a.w||0)*100)+'%';el.style.height=((a.h||0)*100)+'%';
          el.style.borderColor=col;el.style.background=tint(col,0.12);
          el.innerHTML='<div class="anno-pin anno-area-num" style="background:'+col+'">'+num+'</div>';
          attachAnno(el,a,mine);layer.appendChild(el);
        }else{
          var pin=document.createElement('div');pin.className='anno-pin';pin.setAttribute('data-id',a.id);
          pin.style.left=(a.x*100)+'%';pin.style.top=(a.y*100)+'%';pin.style.background=col;pin.textContent=num;
          attachAnno(pin,a,mine);layer.appendChild(pin);
        }
      });
      if(!open.length&&!done.length){panelBody.innerHTML='<div class="anno-empty"><img class="anno-empty-img" src="commenting.png" alt=""><p class="anno-empty-cap">No comments yet. Click or drag on the mockup to leave your feedback.</p></div>';return;}
      var html='';
      open.forEach(function(a,i){var mine=(!!myName&&a.author===myName);html+=summaryHTML(a,i+1,false,mine,isRead(a));});
      if(done.length){html+='<div class="anno-sec">Resolved ('+done.length+')</div>';done.forEach(function(a){var mine=(!!myName&&a.author===myName);html+=summaryHTML(a,null,true,mine,true);});}
      panelBody.innerHTML=html;
      fillPopup();
    }

    function closeMenus(){var om=document.querySelectorAll('.tp-menu.open');for(var i=0;i<om.length;i++)om[i].classList.remove('open');}
    function actHandler(e){
      var btn=e.target.closest('[data-act]');
      if(!e.target.closest('.tp-menu')&&(!btn||btn.getAttribute('data-act')!=='msgmenu'))closeMenus();
      if(btn){
        var act=btn.getAttribute('data-act'),id=btn.getAttribute('data-id');
        if(act==='resolve'){setResolved(id,true);}
        else if(act==='reopen'){setResolved(id,false);}
        else if(act==='toggleresolve'){var an=null;annos.forEach(function(x){if(x.id===id)an=x;});setResolved(id,!(an&&an.resolved));}
        else if(act==='closepop'){closePop();}
        else if(act==='msgmenu'){e.stopPropagation();var mn=btn.parentNode.querySelector('.tp-menu');var wasOpen=mn.classList.contains('open');closeMenus();if(!wasOpen){var br=btn.getBoundingClientRect();mn.style.top=(br.bottom+4)+'px';mn.style.left=Math.max(8,Math.min(br.right-150,window.innerWidth-158))+'px';mn.classList.add('open');}}
        else if(act==='editmsg'){closeMenus();editState={kind:btn.getAttribute('data-kind'),id:id};fillPopup();var ti=curPop&&curPop.querySelector('[data-edit-input]');if(ti){ti.focus();ti.setSelectionRange(ti.value.length,ti.value.length);}}
        else if(act==='canceledit'){editState=null;fillPopup();}
        else if(act==='saveedit'){var kk=btn.getAttribute('data-kind');var ta=curPop&&curPop.querySelector('[data-edit-input]');var tx=ta?ta.value:'';patchComment(kk,id,tx).then(function(){editState=null;return load();}).then(function(){showToast('Comment updated');}).catch(function(err){if(err&&err.message==='empty')return;showToast('Could not update');});}
        else if(act==='delmsg'){var kd=btn.getAttribute('data-kind');closeMenus();confirmModal('Delete this comment?','Delete',function(){deleteComment(kd,id).then(function(){if(kd!=='reply')closePop();editState=null;return load();}).then(function(){showToast('Deleted');}).catch(function(){showToast('Could not delete');});});}
        else if(act==='sendpop'){var inp=curPop&&curPop.querySelector('[data-reply-input]');if(inp)sendReply(id,inp);}
        return;
      }
      if(e.target.closest('.anno-panel')){
        var item=e.target.closest('.anno-item');
        if(item){var iid=item.getAttribute('data-id');if(iid){markReadById(iid);focusComment(iid);}return;}
      }
      var foc=e.target.closest('[data-focus]');
      if(foc){var fid=foc.getAttribute('data-focus');markReadById(fid);flashById(fid);}
    }
    panelBody.addEventListener('click',actHandler);
    panelBody.addEventListener('keydown',replyKey);

    function setMode(on){mode=on;layer.classList.toggle('adding',on);if(on){closePop();removePending();}}

    layer.addEventListener('pointerdown',function(e){
      if(!mode)return;if(e.target!==layer)return;closePop();removePending();
      var lr=layer.getBoundingClientRect();
      var sx=(e.clientX-lr.left)/lr.width,sy=(e.clientY-lr.top)/lr.height;
      var temp=document.createElement('div');temp.className='anno-temp';temp.style.left=(sx*100)+'%';temp.style.top=(sy*100)+'%';temp.style.width='0';temp.style.height='0';layer.appendChild(temp);
      draft={sx:sx,sy:sy,moved:false,temp:temp,cur:null};
      try{layer.setPointerCapture(e.pointerId);}catch(err){}
    });
    layer.addEventListener('pointermove',function(e){
      if(!draft)return;var lr=layer.getBoundingClientRect();
      var cx=(e.clientX-lr.left)/lr.width,cy=(e.clientY-lr.top)/lr.height;
      var x=Math.min(draft.sx,cx),y=Math.min(draft.sy,cy),w=Math.abs(cx-draft.sx),h=Math.abs(cy-draft.sy);
      if(w>0.008||h>0.008)draft.moved=true;
      draft.temp.style.left=(x*100)+'%';draft.temp.style.top=(y*100)+'%';draft.temp.style.width=(w*100)+'%';draft.temp.style.height=(h*100)+'%';
      draft.cur={x:x,y:y,w:w,h:h};
    });
    layer.addEventListener('pointerup',function(e){
      if(!draft)return;var d=draft;draft=null;if(d.temp)d.temp.remove();
      var payload;
      if(d.moved&&d.cur&&(d.cur.w>0.008||d.cur.h>0.008)){payload={type:'area',x:d.cur.x,y:d.cur.y,w:d.cur.w,h:d.cur.h};}
      else{payload={type:'pin',x:d.sx,y:d.sy};}
      openCompose(payload,e);
    });

    function setPanel(o){panel.classList.toggle('open',o);document.body.classList.toggle('anno-open',o);commentsBtn.classList.toggle('diff-on',o);setMode(o);}
    commentsBtn.onclick=function(){if(window.PMWAuth&&PMWAuth.isAuthed&&!PMWAuth.isAuthed()){PMWAuth.openAuth();return;}setPanel(!panel.classList.contains('open'));};
    shareBtn.onclick=function(){
      var link=location.origin+location.pathname;
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(link).then(function(){showToast('Review link copied');},function(){showToast(link);});}
      else{showToast(link);}
    };
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){removePending();closePop();setMode(false);}});
    document.addEventListener('pointerdown',function(e){
      if(curPop&&!curPop.contains(e.target)&&!e.target.classList.contains('anno-pin')&&!e.target.classList.contains('anno-area')&&!mode){removePending();closePop();}
    },true);

    load();
    setInterval(function(){if(curPop||pendingEl||draft)return;load();},7000);
  }

  function boot(){
    var cur=(location.pathname.split('/').pop())||'';
    fetch('iterations.json?b='+Date.now()).then(function(r){return r.json();}).then(function(list){
      var main=Array.isArray(list)?(list.filter(function(it){return it.main;})[0]||list[0]):null;
      if(main&&main.file===cur)return;
      start();
    }).catch(function(){start();});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
})();
/* --- iteration dropdown --- */
(function(){
  function init(){
    var pvLeft=document.querySelector('.preview-bar .pv-left');
    if(!pvLeft||document.getElementById('iter-dd'))return;
    var SCREEN='My Stuff New Home';
    var PAGE='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/></svg>';
    var CHEV='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6l6 -6"/></svg>';
    var CHECK='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5l10 -10"/></svg>';
    var PLUS='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5l0 14"/><path d="M5 12l14 0"/></svg>';
    var DUP='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"/><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"/></svg>';
    var TRASH='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/></svg>';
    var PENCIL='<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5z"/><path d="M13.5 6.5l4 4"/></svg>';
    var SBU="https://oglajrkysripzcyahlux.supabase.co",SBK="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nbGFqcmt5c3JpcHpjeWFobHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3NjUyMDUsImV4cCI6MjA5NzM0MTIwNX0.2Fjx1ugopkUP_QaHGFVIH49vQi5ck0k93oUsSPOMWoo",SBH={apikey:SBK,Authorization:"Bearer "+SBK};
    var namesMap={};
    function mid(f){return f.replace('.html','');}
    function nameFor(it){return namesMap[mid(it.file)]||('Iteration '+it.n);}
    function branchName(it){return namesMap[mid(it.file)]||it.name||'New Lofi';}
    function renameModal(it){
      var curN=nameFor(it);
      var bg=document.createElement('div');bg.className='anno-modal-bg';
      bg.innerHTML='<div class="anno-modal"><h3>Rename iteration</h3><p>Give this iteration a clear name.</p><input id="iter-ren-input" maxlength="40" value="'+curN.split('"').join('&quot;')+'"><div class="anno-modal-actions"><button class="anno-btn anno-btn-ghost" data-x>Cancel</button><button class="anno-btn anno-btn-primary" data-ok>Save</button></div></div>';
      document.body.appendChild(bg);
      var inp=bg.querySelector('#iter-ren-input');inp.focus();inp.select();
      function close(){bg.remove();}
      function save(){var v=inp.value.trim();if(!v){inp.focus();return;}
        fetch(SBU+'/rest/v1/iteration_names',{method:'POST',headers:Object.assign({'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=minimal'},SBH),body:JSON.stringify({mockup:mid(it.file),name:v})})
        .then(function(){namesMap[mid(it.file)]=v;close();var el=menu.querySelector('.pv-dd-item[data-file="'+it.file+'"] .pv-dd-name');if(el)el.textContent=v;nbToast('Renamed to “'+v+'”.');})
        .catch(function(){nbToast('Could not rename.');});
      }
      bg.querySelector('[data-x]').onclick=close;
      bg.querySelector('[data-ok]').onclick=save;
      inp.onkeydown=function(e){if(e.key==='Enter')save();else if(e.key==='Escape')close();};
    }
    var dd=document.createElement('div');dd.className='pv-dd pv-dd-left';dd.id='iter-dd';
    dd.innerHTML='<button class="pv-dd-btn" id="iter-dd-btn"><span class="icon">'+PAGE+'</span><span id="iter-dd-label"><span class="skel" style="width:180px;height:14px;"></span></span><span class="chev">'+CHEV+'</span></button><div class="pv-dd-menu" id="iter-dd-menu"></div>';
    pvLeft.insertBefore(dd,pvLeft.firstChild);
    var back=document.createElement('a');back.className='iter-back';back.href='index.html';back.innerHTML='&#8592;';
    pvLeft.insertBefore(back,pvLeft.firstChild);
    var btn=dd.querySelector('#iter-dd-btn'),menu=dd.querySelector('#iter-dd-menu'),label=dd.querySelector('#iter-dd-label');
    var isMain=false;
    var GLOBE='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><circle cx="12" cy="12" r="9"/><path d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 0 0 0 18M12.5 3a17 17 0 0 1 0 18"/></svg>';
    function nbToast(m){var t=document.createElement("div");t.className="merge-toast";t.textContent=m;document.body.appendChild(t);setTimeout(function(){if(t.parentNode)t.remove();},3600);}
    function copyPrompt(p){if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(p).then(function(){nbToast("Prompt copied — paste it into Cowork to run it.");},function(){nbToast(p);});}else{nbToast(p);}}
    function namePrompt(onok){
      var bg=document.createElement('div');bg.className='anno-modal-bg';
      bg.innerHTML='<div class="anno-modal"><h3>Create new lo-fi</h3><p>Give your new lo-fi (branch) a name.</p><input id="np-in" type="text" placeholder="e.g. Checkout redesign" maxlength="60"><div class="anno-modal-actions"><button class="anno-btn anno-btn-ghost" data-x>Cancel</button><button class="anno-btn anno-btn-primary" data-ok>Create</button></div></div>';
      document.body.appendChild(bg);
      var inp=bg.querySelector('#np-in');setTimeout(function(){inp.focus();},50);
      function close(){bg.remove();}
      function submit(){var v=inp.value.trim();if(!v){inp.focus();return;}close();onok(v);}
      bg.querySelector('[data-x]').onclick=close;
      bg.querySelector('[data-ok]').onclick=submit;
      inp.onkeydown=function(e){if(e.key==='Enter')submit();else if(e.key==='Escape')close();};
      bg.addEventListener('mousedown',function(e){if(e.target===bg)close();});
    }
    btn.addEventListener('click',function(e){e.stopPropagation();dd.classList.toggle('open');});
    document.addEventListener('click',function(e){if(!dd.contains(e.target))dd.classList.remove('open');});
    function fmt(iso){try{var d=new Date(iso),s=Math.max(0,(Date.now()-d.getTime())/1000);if(s<10)return 'now';if(s<60)return Math.floor(s)+'s';var m=Math.floor(s/60);if(m<60)return m+'m';var h=Math.floor(m/60);if(h<24)return h+'h';var dd=Math.floor(h/24);if(dd<7)return dd+'d';var w=Math.floor(dd/7);if(w<5)return w+'w';return d.toLocaleDateString([],{month:'short',day:'numeric'});}catch(e){return '';}}
    var cur=(location.pathname.split('/').pop())||'postermywall-lofi.html';
    Promise.all([fetch('iterations.json?b='+Date.now()).then(function(r){return r.json();}),fetch(SBU+'/rest/v1/iteration_names?select=mockup,name',{headers:SBH}).then(function(r){return r.json();}).catch(function(){return [];})]).then(function(_res){
      var list=_res[0],_names=_res[1];namesMap={};if(Array.isArray(_names))_names.forEach(function(x){namesMap[x.mockup]=x.name;});
      if(!Array.isArray(list)||!list.length){return;}
      var mainEntry=list.filter(function(it){return it.main;})[0]||list[0];
      var current=list.filter(function(it){return it.file===cur;})[0]||mainEntry;
      function bKeys(){var seen={},out=[];list.forEach(function(it){if(it.branch&&!seen[it.branch]){seen[it.branch]=1;out.push(it.branch);}});return out;}
      function bEntries(k){return list.filter(function(it){return it.branch===k;}).sort(function(a,b){return (a.n||0)-(b.n||0);});}
      function bName(k){var e=bEntries(k);return namesMap[mid(e[0].file)]||(e[0]&&e[0].name)||k;}
      function esc2(s){return (''+s).split('<').join('&lt;');}
      if(current.main){
        isMain=true;
        btn.innerHTML='<span class="icon">'+GLOBE+'</span><span>PosterMyWall Lofi</span><span class="chev">'+CHEV+'</span>';
        var cb=document.getElementById('anno-comments-btn');if(cb)cb.style.display='none';
        var sb=document.getElementById('anno-share-btn');if(sb)sb.style.display='none';
        var right=document.querySelector('.preview-bar .pv-right');
        if(right&&!document.getElementById('new-branch-btn')){
          var nb=document.createElement('button');nb.id='new-branch-btn';nb.className='merge-btn';nb.innerHTML='<span class="icon" style="display:inline-flex;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M12 5l0 14"/><path d="M5 12l14 0"/></svg></span><span>New Lofi</span>';
          right.appendChild(nb);
          nb.addEventListener('click',function(){namePrompt(function(name){copyPrompt('Create a new lo-fi (branch) named "'+name+'" off Main (postermywall-lofi.html) — duplicate the Main mockup as a new branch called "'+name+'", register it in iterations.json, and open it.');});});
        }
        var _h='<div class="pv-dd-item active" data-file="'+mainEntry.file+'"><span class="icon">'+GLOBE+'</span><span class="pv-dd-name">PosterMyWall Lofi</span><span class="pv-dd-check">'+CHECK+'</span></div>';
        var bks=bKeys();
        if(bks.length){_h+='<div class="iter-menu-div"></div>'+bks.map(function(k){var e=bEntries(k);var L=e[e.length-1];return '<div class="pv-dd-item" data-file="'+L.file+'"><span class="icon">'+PAGE+'</span><span class="pv-dd-name">'+esc2(bName(k))+'</span><span class="iter-sub">'+fmt(L.created)+'</span></div>';}).join('');}
        menu.innerHTML=_h;
        menu.querySelectorAll('.pv-dd-item').forEach(function(item){item.addEventListener('click',function(){var ff=item.getAttribute('data-file');dd.classList.remove('open');if(ff&&ff!==cur)window.location.href=ff;});});
        return;
      }
      var key=current.branch;
      var bes=bEntries(key);
      var idx=0;for(var _i=0;_i<bes.length;_i++){if(bes[_i].file===cur){idx=_i;break;}}
      var _name=bName(key);
      var _shown=_name.length>28?_name.slice(0,28).trim()+'…':_name;
      label.innerHTML='<span class="iter-name">'+esc2(_shown)+'</span> · Iterations <span class="iter-chip">'+(idx+1)+' / '+bes.length+'</span>';
      var mainItem='<div class="pv-dd-item" data-file="'+mainEntry.file+'"><span class="icon">'+GLOBE+'</span><span class="pv-dd-name">PosterMyWall Lofi</span><span class="pv-dd-check">'+CHECK+'</span></div>';
      var merged=bes.some(function(it){return it.status==='merged';});
      var iters=bes.map(function(it,i){var multi=bes.length>1;var acts=merged?'':'<span class="iter-actions">'+(multi?'<span class="iter-act del" data-file="'+it.file+'">'+TRASH+'</span>':'')+'<span class="iter-act ren" data-file="'+it.file+'">'+PENCIL+'</span><span class="iter-act dup" data-file="'+it.file+'">'+DUP+'</span></span>';return '<div class="pv-dd-item'+(it.file===cur?' active':'')+'" data-file="'+it.file+'"><span class="icon">'+PAGE+'</span><span class="pv-dd-name">Iteration '+(i+1)+'</span><span class="iter-sub">'+fmt(it.created)+'</span><span class="pv-dd-check">'+CHECK+'</span>'+acts+'</div>';}).join('');
      var _isView=(document.body.getAttribute('data-role')==='view');
      var addBtnHTML=(_isView||merged)?'':'<div class="iter-menu-div"></div><button class="iter-add"><span class="icon">'+PLUS+'</span><span>Add iteration</span></button>';
      menu.innerHTML=mainItem+'<div class="iter-menu-div"></div>'+iters+addBtnHTML;
      menu.querySelectorAll('.pv-dd-item').forEach(function(item){item.addEventListener('click',function(){var f=item.getAttribute('data-file');dd.classList.remove('open');if(f&&f!==cur)window.location.href=f;});});
      var addB=menu.querySelector('.iter-add');if(addB){addB.addEventListener('click',function(e){e.stopPropagation();dd.classList.remove('open');copyPrompt('Add a new iteration to the "'+_name+'" branch — duplicate the latest iteration of this branch as a new iteration, register it in iterations.json, and open it.');});}
      menu.querySelectorAll('.iter-act.dup').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();var ff=b.getAttribute('data-file');dd.classList.remove('open');copyPrompt('Duplicate iteration ('+ff+') in the "'+_name+'" branch — create a new iteration that is a copy of it and register it in iterations.json.');});});
      menu.querySelectorAll('.iter-act.del').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();var ff=b.getAttribute('data-file');dd.classList.remove('open');copyPrompt('Delete iteration ('+ff+') from the "'+_name+'" branch — remove it from iterations.json and delete the file.');});});
      menu.querySelectorAll('.iter-act.ren').forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();var ff=b.getAttribute('data-file');var it=list.filter(function(x){return x.file===ff;})[0];dd.classList.remove('open');if(it)renameModal(it);});});

    }).catch(function(){});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
/* --- diff drawer --- */
(function(){
  function init(){
    var vframe=document.getElementById('vframe');if(!vframe)return;
    var cur=(location.pathname.split('/').pop())||'';
    fetch('iterations.json?b='+Date.now()).then(function(r){return r.json();}).then(function(list){
      if(!Array.isArray(list)||!list.length)return;
      var main=list.filter(function(it){return it.main;})[0]||list[0];
      if(!main||main.file===cur)return;            // on main itself: no diff button
      addUI(main.file);
    }).catch(function(){});
  }
  function addUI(mainFile){
    var center=document.querySelector('.preview-bar .pv-center');var dev=document.getElementById('device-toggle');if(!center||!dev)return;
    var btn=document.createElement('button');btn.className='anno-cbtn';btn.id='diff-btn';btn.setAttribute('data-tip','What changed?');
    btn.innerHTML='<span class="icon" style="display:inline-flex;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M6 12v-2a6 6 0 1 1 12 0v2"/><path d="M15 9l3 3l3 -3"/></svg></span><span class="btn-label">What changed?</span>';
    center.insertBefore(btn,dev);
    var drawer=buildDrawer(mainFile);
    var on=false;
    btn.addEventListener('click',function(){
      on=!on;btn.classList.toggle('diff-on',on);
      if(on){runDiff(mainFile);openDrawer(drawer);}else{clearDiff();closeDrawer(drawer);}
    });
    var stage=document.querySelector(".stage");
    if(stage){stage.addEventListener("click",function(e){if(e.target!==stage||on)return;pulse(mainFile);});}
  }
  // ===== Overview: Cowork-authored markdown per branch/file (ask Cowork to update OVERVIEW_MD) =====
  var OVERVIEW_MD=(typeof window.PMW_OVERVIEW_MD==='string')?window.PMW_OVERVIEW_MD:[
    '**Summary of updates**',
    '',
    'No summary yet for this lo-fi. Ask Cowork to write one, or click **Edit** to add it.'
  ].join('\n');
  function mdToHtml(md){
    if(!md)return '';
    var lines=md.replace(/\r/g,'').split('\n'),html='',inList=false;
    function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;');}
    function inline(s){return esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/_(.+?)_/g,'<em>$1</em>').replace(/`(.+?)`/g,'<code>$1</code>').replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');}
    lines.forEach(function(ln){
      if(/^\s*[-*]\s+/.test(ln)){if(!inList){html+='<ul>';inList=true;}html+='<li>'+inline(ln.replace(/^\s*[-*]\s+/,''))+'</li>';return;}
      if(inList){html+='</ul>';inList=false;}
      if(/^###\s+/.test(ln)){html+='<h4>'+inline(ln.replace(/^###\s+/,''))+'</h4>';return;}
      if(/^##\s+/.test(ln)){html+='<h4>'+inline(ln.replace(/^##\s+/,''))+'</h4>';return;}
      if(/^#\s+/.test(ln)){html+='<h4>'+inline(ln.replace(/^#\s+/,''))+'</h4>';return;}
      if(ln.trim()==='')return;
      html+='<p>'+inline(ln)+'</p>';
    });
    if(inList)html+='</ul>';
    return html;
  }
  // ===== Details: auto-generated brief pointers + a thumbnail of each changed area =====
  function describe(el){
    // Plain-English labels. CSS / scripts / off-canvas pages don't map to a visible shell element.
    if(el.tagName==='STYLE')return 'Styling updated';
    if(el.tagName==='SCRIPT')return 'Behavior updated';
    var _id=el.id||'';
    var OVL={'editor-overlay':'Added the Design editor page','gallery-overlay':'Added the Templates gallery page','pricing-overlay':'Added the Pricing page','ai-overlay':'Added the Create with AI page','help-overlay':'Added the Help center page','upsell-modal':'Added the Premium upgrade popup'};
    if(OVL[_id])return OVL[_id];
    if((''+(el.className||'')).indexOf('overlay')>-1)return 'Added a new page';
    if(el.tagName==='IMG')return 'Updated an image';
    var txt=(el.textContent||'').replace(/\s+/g,' ').trim(),kind='section';
    if(el.matches&&el.matches('h1,h2,h3,h4,h5'))kind='heading';
    else if(el.matches&&el.matches('button,[class*=btn],[class*=cbtn]'))kind='button';
    else if(el.tagName==='A')kind='link';
    else if((''+(el.className||'')).indexOf('card')>-1)kind='card';
    var short=txt.length>40?txt.slice(0,40).trim()+'…':txt;
    if(short)return 'Updated the '+kind+' “'+short+'”';
    return 'Updated a '+kind;
  }
  // Bring a changed element into view even if it lives in a hidden view or a closed overlay/page.
  function revealElement(el){
    if(!el||!el.closest)return;
    var frame=document.querySelector('#vframe .frame-clip')||document;
    var ov=el.closest('[class*="overlay"]');
    // Close any other open page/overlay first so they don't stack on top of each other.
    Array.prototype.forEach.call(frame.querySelectorAll('[class*="overlay"].open'),function(o){if(o!==ov)o.classList.remove('open');});
    if(ov){if(!ov.classList.contains('open'))ov.classList.add('open');return;}
    // Target lives in the main shell: if it's in a hidden view, switch to that view.
    var view=el.closest('.content[id^="view-"]');
    if(view&&getComputedStyle(view).display==='none'){
      var name=view.id.replace('view-','');
      document.querySelectorAll('.nav-item').forEach(function(x){x.classList.toggle('active',x.getAttribute('data-view')===name);});
      if(typeof switchView==='function')switchView(name);
    }
  }
  // Friendly name of the page/area a changed element lives in (shown as secondary text).
  function locate(el){
    if(!el||!el.closest)return '';
    var ov=el.closest('[class*="overlay"]');
    if(ov){var M={'editor-overlay':'Design editor','gallery-overlay':'Templates gallery','pricing-overlay':'Pricing page','ai-overlay':'Create with AI','help-overlay':'Help center','upsell-modal':'Premium popup'};return M[ov.id]||'Page';}
    if(el.tagName==='STYLE'||el.tagName==='SCRIPT')return 'Whole prototype';
    if(el.closest('.mega'))return 'Header menu';
    if(el.closest('.topbar')||el.closest('.nav-zone'))return 'Main header';
    if(el.closest('.sidebar'))return 'Sidebar';
    if(el.closest('.shell-mobile'))return 'Mobile view';
    if(el.closest('.shell-tablet'))return 'Tablet view';
    var view=el.closest('.content[id^="view-"]');
    if(view){var N={designs:'Designs',ai:'Create with AI',events:'Events',social:'Social Media Posts',emails:'Emails',planner:'Content Planner',business:'My Business',audience:'Audience',brand:'Brand Kits',team:'Pricing',orders:'Order history',trash:'Trash'};return N[view.id.replace('view-','')]||'Designs';}
    if(el.closest('.hero'))return 'Designs';
    if(el.closest('.main'))return 'Designs';
    return 'Main';
  }
  function flashOrange(el){
    if(!el)return;
    if(el.closest&&el.closest('[class*="overlay"]'))return; // don't tint full-page overlays
    el.classList.remove('diff-flash-orange');void el.offsetWidth;el.classList.add('diff-flash-orange');
    setTimeout(function(){el.classList.remove('diff-flash-orange');},1500);
  }
  function revertToast(){var t=document.createElement('div');t.className='merge-toast';t.textContent='Revert prompt copied — paste it into Cowork.';document.body.appendChild(t);setTimeout(function(){if(t.parentNode)t.remove();},2800);}
  function escTxt(s){return (''+(s==null?'':s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function renderDetails(container,mainFile){
    // Frozen (read-only) list: once a branch is merged, its recorded changes are
    // snapshotted into window.PMW_FROZEN_CHANGES so they stay visible instead of
    // recomputing to "No changes" (branch shell == Main after merge).
    var frozen=window.PMW_FROZEN_CHANGES;
    if(Array.isArray(frozen)&&frozen.length){
      var ltf=document.getElementById('diff-list-title');if(ltf)ltf.textContent='List of all changes ('+frozen.length+')';
      container.innerHTML='<div class="diff-frozen-note">Merged — this list is frozen (read-only).</div>';
      var frame=document.querySelector('#vframe .frame-clip');
      frozen.forEach(function(item,i){
        // Each item is either a plain string, or { t:desc, loc:area, sel:CSS selector }.
        var desc=(typeof item==='string')?item:(item&&item.t)||'';
        var loc=(typeof item==='object'&&item)?(item.loc||''):'';
        var sel=(typeof item==='object'&&item)?(item.sel||''):'';
        var card=document.createElement('div');card.className='diff-detail diff-detail-frozen';
        card.innerHTML='<div class="diff-d-text"><span class="diff-d-num">'+(i+1)+'</span><span>'+escTxt(desc)+(loc?'<span class="diff-d-loc">'+escTxt(loc)+'</span>':'')+'</span></div>';
        if(sel){
          card.style.cursor='pointer';
          var resolve=function(){var el=null;try{el=(frame&&frame.querySelector(sel))||document.querySelector(sel);}catch(e){}return el;};
          card.addEventListener('mouseenter',function(){var el=resolve();if(el&&!(el.closest&&el.closest('[class*="overlay"]')))el.classList.add('diff-hover-orange');});
          card.addEventListener('mouseleave',function(){var el=resolve();if(el)el.classList.remove('diff-hover-orange');});
          card.addEventListener('click',function(){
            var el=resolve();
            if(!el)return;
            revealElement(el);
            setTimeout(function(){if(el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'center'});flashOrange(el);},120);
          });
        }
        container.appendChild(card);
      });
      return;
    }
    container.innerHTML='<div class="diff-d-loading">Analyzing changes…</div>';
    var cur=(location.pathname.split('/').pop())||'';
    computeChanged(mainFile,function(){
      var els=_changed||[];
      var lt=document.getElementById('diff-list-title');if(lt)lt.textContent='List of all changes ('+els.length+')';
      if(!els.length){container.innerHTML='<div class="diff-empty-state">No changes from Main yet.</div>';return;}
      container.innerHTML='';
      els.forEach(function(el,i){
        var card=document.createElement('div');card.className='diff-detail';
        var desc=describe(el);
        var loc=locate(el);
        var t=document.createElement('div');t.className='diff-d-text';t.innerHTML='<span class="diff-d-num">'+(i+1)+'</span><span>'+desc+(loc?'<span class="diff-d-loc">'+escTxt(loc)+'</span>':'')+'</span>';
        card.appendChild(t);
        var rb=document.createElement('button');rb.className='diff-revert';rb.textContent='Revert';
        card.appendChild(rb);
        var isOverlay=!!(el.closest&&el.closest('[class*="overlay"]'));
        card.addEventListener('mouseenter',function(){if(!isOverlay)el.classList.add('diff-hover-orange');});
        card.addEventListener('mouseleave',function(){el.classList.remove('diff-hover-orange');});
        card.addEventListener('click',function(e){if(e.target.closest('.diff-revert'))return;revealElement(el);setTimeout(function(){if(el.scrollIntoView)el.scrollIntoView({behavior:'smooth',block:'center'});flashOrange(el);},120);});
        rb.addEventListener('click',function(e){
          e.stopPropagation();
          var p='In the branch "'+cur+'", revert this change back to Main ("'+mainFile+'"): '+desc+'. Restore that exact element to its Main version (leave all other branch changes intact), then refresh the branch Summary.';
          if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(p).catch(function(){});
          revertToast();
        });
        container.appendChild(card);
      });
    });
  }
  var SUM_URL="https://oglajrkysripzcyahlux.supabase.co",SUM_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nbGFqcmt5c3JpcHpjeWFobHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3NjUyMDUsImV4cCI6MjA5NzM0MTIwNX0.2Fjx1ugopkUP_QaHGFVIH49vQi5ck0k93oUsSPOMWoo";
  var SUM_H={apikey:SUM_KEY,Authorization:"Bearer "+SUM_KEY};
  function summaryKey(){return (location.pathname.split('/').pop()||'').replace('.html','');}
  function buildDrawer(mainFile){
    if(document.getElementById('diff-drawer'))return document.getElementById('diff-drawer');
    var d=document.createElement('aside');d.className='diff-drawer';d.id='diff-drawer';
    d.innerHTML='<div class="diff-drawer-head"><h2 class="diff-title">Changes in this Lofi</h2><button class="diff-drawer-x" id="diff-drawer-x" data-tip="Close">&times;</button></div>'
      +'<div class="diff-drawer-body"><img class="diff-hint-img" src="click-hint.png" alt=""><p class="diff-hint-blue">Click on grey areas to highlight updates even when this drawer is closed</p>'
      +'<div class="diff-sec-row"><div class="diff-sec-title">Summary</div></div>'
      +'<div class="diff-sum-rtf" id="diff-sum-rtf">'
        +'<div class="diff-sum-ed" id="diff-sum-ed" contenteditable="true" data-ph="Add summary pointers"></div>'
        +'<div class="diff-sum-toolbar">'
          +'<button type="button" data-cmd="bold" data-tip="Bold" style="font-weight:700;">B</button>'
          +'<button type="button" data-cmd="italic" data-tip="Italic" style="font-style:italic;font-family:Georgia,serif;">I</button>'
          +'<button type="button" data-cmd="underline" data-tip="Underline" style="text-decoration:underline;">U</button>'
          +'<button type="button" data-cmd="strikeThrough" data-tip="Strikethrough" style="text-decoration:line-through;">S</button>'
          +'<span class="sep"></span>'
          +'<button type="button" data-cmd="insertUnorderedList" data-tip="Bulleted list"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11"/><path d="M9 12h11"/><path d="M9 18h11"/><path d="M5 6v.01"/><path d="M5 12v.01"/><path d="M5 18v.01"/></svg></button>'
          +'<button type="button" data-cmd="insertOrderedList" data-tip="Numbered list"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 6h9"/><path d="M11 12h9"/><path d="M11 18h9"/><path d="M4 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3h4"/><path d="M6 10V4L4 6"/></svg></button>'
          +'<span class="sep"></span>'
          +'<button type="button" data-cmd="createLink" data-tip="Add link"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15l6 -6"/><path d="M11 6l.5 -.5a4.95 4.95 0 0 1 7 7l-.5 .5"/><path d="M13 18l-.5 .5a4.95 4.95 0 0 1 -7 -7l.5 -.5"/></svg></button>'
        +'</div>'
      +'</div>'
      +'<div class="diff-sec-title" id="diff-list-title" style="margin-top:36px;">List of all changes</div><div class="diff-details" id="diff-details"></div></div>';
    document.body.appendChild(d);
    d.querySelector('#diff-drawer-x').addEventListener('click',function(){var b=document.getElementById('diff-btn');if(b)b.click();});
    // One-time styles for the rich-text Summary editor.
    if(!document.getElementById('diff-sum-style')){
      var st=document.createElement('style');st.id='diff-sum-style';
      st.textContent='.diff-sum-rtf{border:1px solid var(--br-neutral-primary);border-radius:12px;overflow:hidden;transition:border-color .12s,box-shadow .12s;}'
        +'.diff-sum-rtf:focus-within{border-color:var(--ct-neutral-primary);}'
        +'.diff-sum-ed{min-height:120px;max-height:300px;overflow-y:auto;padding:12px 14px;font-size:14px;line-height:20px;color:var(--ct-neutral-primary);outline:none;}'
        +'.diff-sum-ed:empty:before{content:attr(data-ph);color:var(--ct-neutral-tertiary);pointer-events:none;}'
        +'.diff-sum-ed ul,.diff-sum-ed ol{padding-left:22px;margin:4px 0;}.diff-sum-ed a{color:#2d6cdf;text-decoration:underline;}'
        +'.diff-sum-toolbar{display:flex;align-items:center;gap:2px;padding:6px 8px;border-top:1px solid var(--br-neutral-primary);}'
        +'.diff-sum-toolbar button{min-width:30px;height:30px;display:inline-flex;align-items:center;justify-content:center;border:none;background:none;border-radius:8px;color:var(--ct-neutral-secondary);font-size:15px;line-height:1;cursor:pointer;padding:0 6px;}'
        +'.diff-sum-toolbar button:hover{background:var(--bg-neutral-secondary-default);color:var(--ct-neutral-primary);}'
        +'.diff-sum-toolbar .sep{width:1px;height:18px;background:var(--br-neutral-primary);margin:0 4px;}'
        +'.diff-sum-rtf.ro .diff-sum-toolbar{display:none;}.diff-sum-rtf.ro .diff-sum-ed{color:var(--ct-neutral-secondary);}'
        +'.diff-d-loc{display:block;margin-top:3px;font-size:12px;font-weight:400;color:var(--ct-neutral-tertiary);}'
        +'.diff-detail{position:relative;}.diff-detail .diff-d-text{padding-right:76px;}.diff-detail .diff-revert{position:absolute;top:10px;right:10px;margin:0;}';
      document.head.appendChild(st);
    }
    var FROZEN=Array.isArray(window.PMW_FROZEN_CHANGES)&&window.PMW_FROZEN_CHANGES.length;
    var ed=d.querySelector('#diff-sum-ed'),rtf=d.querySelector('#diff-sum-rtf');
    // Editable for admin/edit seats; read-only for view/guest (and on frozen branches).
    function setSumMode(){
      var r=(window.PMWAuth&&PMWAuth.role)?PMWAuth.role():'view';
      var ok=(r==='admin'||r==='edit')&&!FROZEN;
      ed.setAttribute('contenteditable',ok?'true':'false');
      rtf.classList.toggle('ro',!ok);
    }
    setSumMode();
    if(window.PMWAuth&&PMWAuth.require)PMWAuth.require(function(){setSumMode();});
    function saveSummary(){
      if(rtf.classList.contains('ro'))return;
      fetch(SUM_URL+"/rest/v1/summaries",{method:'POST',headers:Object.assign({'Content-Type':'application/json',Prefer:'resolution=merge-duplicates,return=minimal'},SUM_H),body:JSON.stringify({mockup:summaryKey(),md:ed.innerHTML,updated_at:new Date().toISOString()})}).catch(function(){});
    }
    d.querySelectorAll('.diff-sum-toolbar button').forEach(function(b){
      b.addEventListener('mousedown',function(e){e.preventDefault();});
      b.addEventListener('click',function(e){
        e.preventDefault();if(rtf.classList.contains('ro'))return;ed.focus();
        var cmd=b.getAttribute('data-cmd');
        if(cmd==='createLink'){var u=prompt('Link URL');if(u)document.execCommand('createLink',false,u);}
        else{document.execCommand(cmd,false,null);}
        saveSummary();
      });
    });
    ed.addEventListener('blur',saveSummary);
    fetch(SUM_URL+"/rest/v1/summaries?select=md&mockup=eq."+encodeURIComponent(summaryKey()),{headers:SUM_H})
      .then(function(r){return r.json();}).then(function(rows){ed.innerHTML=(rows&&rows[0]&&rows[0].md)?rows[0].md:'';})
      .catch(function(){});
    renderDetails(d.querySelector('#diff-details'),mainFile);
    return d;
  }
  function openDrawer(d){if(d){d.classList.add('open');document.body.classList.add('diff-open');}}
  function closeDrawer(d){if(d){d.classList.remove('open');document.body.classList.remove('diff-open');}}
  function clearDiff(){var e=document.querySelectorAll('.diff-changed');for(var i=0;i<e.length;i++)e[i].classList.remove('diff-changed');var t=document.getElementById('diff-empty');if(t)t.remove();}
  function kids(el){return Array.prototype.filter.call(el.children,function(c){return c.id!=='anno-layer';});}
  function ownText(el){var t='';for(var i=0;i<el.childNodes.length;i++){var n=el.childNodes[i];if(n.nodeType===3)t+=n.nodeValue;}return t.replace(/\s+/g,' ').trim();}
  function sig(el){return el.tagName+'|'+(el.getAttribute('class')||'')+'|'+(el.getAttribute('style')||'')+'|'+(el.getAttribute('aria-label')||'');}
  // Identity key for aligning siblings: prefers an explicit key, else structural (tag+class).
  function matchSig(el){
    var k=el.getAttribute('data-diff-id')||el.getAttribute('data-id')||el.getAttribute('id');
    if(k)return 'K:'+el.tagName+'|'+k;
    return el.tagName+'|'+(el.getAttribute('class')||'')+'|'+(el.getAttribute('data-mstab')||el.getAttribute('data-user')||el.getAttribute('data-file')||'');
  }
  // Longest-common-subsequence alignment of two child lists by matchSig (handles inserts/deletes/reorders).
  function lcsPairs(a,b){
    var n=a.length,m=b.length,i,j,dp=[];
    for(i=0;i<=n;i++){dp[i]=[];for(j=0;j<=m;j++)dp[i][j]=0;}
    for(i=n-1;i>=0;i--)for(j=m-1;j>=0;j--){dp[i][j]=(matchSig(a[i])===matchSig(b[j]))?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);}
    var pairs=[];i=0;j=0;
    while(i<n&&j<m){
      if(matchSig(a[i])===matchSig(b[j])){pairs.push([i,j]);i++;j++;}
      else if(dp[i+1][j]>=dp[i][j+1])i++;else j++;
    }
    return pairs;
  }
  function diffPaths(b,m){
    var out=[];
    (function walk(bb,mm,path){
      var bk=kids(bb),mk=kids(mm);
      var map={};lcsPairs(bk,mk).forEach(function(p){map[p[0]]=p[1];});
      for(var i=0;i<bk.length;i++){
        var pp=path.concat(i),cb=bk[i];
        if(!(i in map)){out.push(pp);continue;}   // no counterpart in main → added/changed node
        var cm=mk[map[i]];
        if(sig(cb)!==sig(cm)||ownText(cb)!==ownText(cm)){out.push(pp);}  // same identity, content/attrs changed
        walk(cb,cm,pp);
      }
    })(b,m,[]);
    return out;
  }
  function resolvePath(root,path){var n=root;for(var i=0;i<path.length;i++){var k=kids(n);if(!k[path[i]])return null;n=k[path[i]];}return n;}
  function runDiff(mainFile){
    // Merged/frozen branches: the live diff vs Main is empty, so drive the blue highlights
    // off the frozen change list's selectors instead — same "What changed?" experience, read-only.
    var FZ=window.PMW_FROZEN_CHANGES;
    if(Array.isArray(FZ)&&FZ.length){
      clearDiff();
      var ff=document.querySelector('#vframe .frame-clip')||document;
      FZ.forEach(function(item){
        var sel=(item&&typeof item==='object')?item.sel:'';
        if(!sel)return;
        var el=null;try{el=ff.querySelector(sel)||document.querySelector(sel);}catch(e){}
        if(el&&el.tagName!=='STYLE'&&el.tagName!=='SCRIPT'&&!(el.closest&&el.closest('[class*="overlay"]')))el.classList.add('diff-changed');
      });
      return;
    }
    var cur=(location.pathname.split('/').pop())||'';
    Promise.all([fetch(mainFile+'?b='+Date.now()).then(function(r){return r.text();}),fetch(cur+'?b='+Date.now()).then(function(r){return r.text();})]).then(function(t){
      var md=new DOMParser().parseFromString(t[0],'text/html');
      var bd=new DOMParser().parseFromString(t[1],'text/html');
      var mShell=md.querySelector('.frame-clip'),bShell=bd.querySelector('.frame-clip');
      var liveShell=document.querySelector('#vframe .frame-clip');
      if(!mShell||!bShell||!liveShell)return;
      clearDiff();
      var paths=diffPaths(bShell,mShell),c=0;
      paths.forEach(function(pth){var el=resolvePath(liveShell,pth);if(el&&el.tagName!=='STYLE'&&el.tagName!=='SCRIPT'&&!(el.closest&&el.closest('[class*="overlay"]'))){el.classList.add('diff-changed');c++;}});
      if(c===0){var t2=document.createElement('div');t2.id='diff-empty';t2.textContent='No changes from main yet';document.body.appendChild(t2);setTimeout(function(){if(t2.parentNode)t2.remove();},2200);}
    }).catch(function(){});
  }
  var _changed=null;
  function computeChanged(mainFile,cb){
    var cur=(location.pathname.split('/').pop())||'';
    Promise.all([fetch(mainFile+'?b='+Date.now()).then(function(r){return r.text();}),fetch(cur+'?b='+Date.now()).then(function(r){return r.text();})]).then(function(t){
      var md=new DOMParser().parseFromString(t[0],'text/html'),bd=new DOMParser().parseFromString(t[1],'text/html');
      // Compare the whole frame (.frame-clip) not just .shell, so out-of-shell pages/overlays AND inline <style> (CSS) changes are detected too.
      var mShell=md.querySelector('.frame-clip'),bShell=bd.querySelector('.frame-clip'),liveShell=document.querySelector('#vframe .frame-clip');
      if(!mShell||!bShell||!liveShell){_changed=[];cb();return;}
      var paths=diffPaths(bShell,mShell),els=[];
      paths.forEach(function(p){var el=resolvePath(liveShell,p);if(el)els.push(el);});
      _changed=els;cb();
    }).catch(function(){_changed=[];cb();});
  }
  function pulse(mainFile){
    function go(){(_changed||[]).forEach(function(el){if(el.closest&&el.closest('[class*="overlay"]'))return;el.classList.remove('diff-pulse');void el.offsetWidth;el.classList.add('diff-pulse');el.addEventListener('animationend',function h(){el.classList.remove('diff-pulse');el.removeEventListener('animationend',h);});});}
    if(_changed)go();else computeChanged(mainFile,go);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
/* --- merge --- */
(function(){
  var SB_URL="https://oglajrkysripzcyahlux.supabase.co";
  var SB_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nbGFqcmt5c3JpcHpjeWFobHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3NjUyMDUsImV4cCI6MjA5NzM0MTIwNX0.2Fjx1ugopkUP_QaHGFVIH49vQi5ck0k93oUsSPOMWoo";
  var H={apikey:SB_KEY,Authorization:"Bearer "+SB_KEY};
  function mid(){return ((location.pathname.split('/').pop()||'').replace('.html',''))||'postermywall-lofi';}
  function toast(m){var t=document.createElement('div');t.className='merge-toast';t.textContent=m;document.body.appendChild(t);setTimeout(function(){if(t.parentNode)t.remove();},3600);}
  function init(){
    var vframe=document.getElementById('vframe');if(!vframe)return;
    var cur=(location.pathname.split('/').pop())||'';
    fetch('iterations.json?b='+Date.now()).then(function(r){return r.json();}).then(function(list){
      if(!Array.isArray(list)||!list.length)return;
      var main=list.filter(function(it){return it.main;})[0]||list[0];
      if(!main||main.file===cur)return;
      var me=list.filter(function(it){return it.file===cur;})[0]||{file:cur};
      if(me.status==='merged')return; // merged branch is closed — no Merge CTA
      add(me,main.file);
    }).catch(function(){});
  }
  function add(me,mainFile){
    var right=document.querySelector('.preview-bar .pv-right');if(!right)return;
    var btn=document.createElement('button');btn.id='merge-btn';btn.className='merge-btn';
    btn.innerHTML='<span class="icon" style="display:inline-flex;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><path d="M8 7l4 -4l4 4"/><path d="M12 3v5.394a6.737 6.737 0 0 1 -3 5.606a6.737 6.737 0 0 0 -3 5.606v1.394"/><path d="M12 3v5.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v1.394"/></svg></span><span class="merge-label">Merge</span>';
    right.insertBefore(btn,right.firstChild);
    var openN=-1;
    function refresh(){
      fetch(SB_URL+"/rest/v1/annotations?select=id&mockup=eq."+mid()+"&resolved=eq.false",{headers:H})
        .then(function(r){return r.json();}).then(function(rows){
          openN=Array.isArray(rows)?rows.length:0;
          btn.classList.toggle('disabled',openN>0);
          btn.querySelector('.merge-label').textContent=openN>0?('Merge ('+openN+' open)'):'Merge';
        }).catch(function(){});
    }
    refresh();setInterval(refresh,5000);
    btn.addEventListener('click',function(){
      if(openN>0){toast('Resolve all '+openN+' open comment(s) before merging.');return;}
      confirmMerge(me,mainFile);
    });
  }
  function confirmMerge(me,mainFile){
    var bname=me.name||me.file;
    var bg=document.createElement('div');bg.className='anno-modal-bg';
    bg.innerHTML='<div class="anno-modal"><h3>Merge “'+bname+'” into Main?</h3><p>This replaces Main with this branch’s design and closes the branch. All feedback must be resolved.</p><div class="anno-modal-actions"><button class="anno-btn anno-btn-ghost" data-x>Cancel</button><button class="anno-btn anno-btn-primary" data-ok>Merge</button></div></div>';
    document.body.appendChild(bg);
    bg.querySelector('[data-x]').onclick=function(){bg.remove();};
    bg.querySelector('[data-ok]').onclick=function(){bg.remove();
      // NOTE: do NOT log a changelog row here. Copying the prompt is not a merge — the
      // merge is only real once Cowork executes it. Cowork logs the merges row at that point
      // (see prompt below), so just copying the command no longer creates phantom entries.
      var p='Merge the branch "'+bname+'" ('+me.file+') into Main ('+mainFile+') — apply this branch\'s design changes to Main, then mark the branch as merged in iterations.json (set its "status" to "merged" and add "merged_at"). KEEP the branch file and its entry — never delete a branch; we keep full history. FREEZE this branch as a self-contained time-capsule of how it looked and worked at merge: (1) write its change record into the branch file as inline window.PMW_FROZEN_CHANGES = [ { t:"short description", loc:"area name", sel:"CSS selector of the changed element" }, ... ] so the merged branch still lists its changes, highlights them on hover, and shows the blue "What changed?" outlines (read-only, no Revert); (2) inline a snapshot of the shared assets into the branch file — replace the app.css <link>, app.js <script src>, and auth.js <script src> with the current file contents inside inline <style>/<script> tags (escape any </script> as <\\/script>) so future changes to the shared files never alter this archived branch. Finally, record the merge in the Change log: insert one row into the Supabase "merges" table with { branch, file, merged_by } (only after the merge is actually applied).';
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(p).then(function(){toast('Merge prompt copied — paste it into Cowork to run it.');},function(){toast(p);});}else{toast(p);}};
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
