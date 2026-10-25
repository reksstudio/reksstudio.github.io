const K = 'bkref';
const home = document.body.hasAttribute('data-home');
const links = () => [...document.querySelectorAll('a[href]')];

// last h2-h4 before the link, plus the page title
function label(a, u) {
  let h;
  for (const x of document.querySelectorAll('h2,h3,h4')) {
    if (x.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING) h = x;
    else break;
  }
  const page = document.title.split(' — ')[0];
  const sec = h ? [...h.childNodes].filter((n) => n.nodeName !== 'A').map((n) => n.textContent).join('').trim() : '';
  return u.pathname === location.pathname ? sec || page : sec ? `${sec} · ${page}` : page;
}

let pill;
function sync(e) {
  if (history.state === null) {
    let r = null;
    // sessionStorage throws when site data is blocked
    try {
      r = JSON.parse(sessionStorage.getItem(K));
      sessionStorage.removeItem(K);
    } catch {}
    if (r && r.to === location.href) history.replaceState({ b: r.b, u: r.u }, '');
  }
  const st = history.state || {};
  pill?.remove();
  pill = null;
  if (st.b && !home) {
    pill = document.createElement('a');
    pill.className = 'bkp';
    pill.href = st.u;
    pill.textContent = `← Back to ${st.b}`;
    pill.onclick = (ev) => {
      ev.preventDefault();
      history.back();
    };
    // after the jump target, so the first Tab reaches it
    const t = location.hash && document.getElementById(location.hash.slice(1));
    (t || document.body.lastElementChild).after(pill);
  }
  const same = e.type === 'popstate';
  if (!(same || e.persisted || performance.getEntriesByType('navigation')[0]?.type === 'back_forward') || st.y == null) return;
  // WebKit with a script on the page restores a fragment URL to the fragment, not to y
  requestAnimationFrame(() => requestAnimationFrame(() => {
    if (!same && Math.abs(scrollY - st.y) > 1) scrollTo({ top: st.y, behavior: 'instant' });
    history.replaceState({ ...history.state, y: null, f: null }, '');
    const a = st.f != null && links()[st.f];
    if (!a) return;
    a.focus({ preventScroll: true });
    a.classList.add('bkf');
    setTimeout(() => a.classList.remove('bkf'), 2000);
  }));
}

// leaving entry: {y: scroll, f: clicked link index}; next entry: {b: origin label, u: origin URL}; none from home
addEventListener('click', (e) => {
  const a = e.target.closest('a[href]');
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.getAttribute('target')) return;
  // SVG links carry href as an attribute only
  const u = new URL(a.getAttribute('href'), location.href);
  if (u.origin !== location.origin) return;
  history.replaceState({ ...history.state, y: scrollY, f: links().indexOf(a) }, '');
  try {
    if (home) sessionStorage.removeItem(K);
    else sessionStorage.setItem(K, JSON.stringify({ to: u.href, b: label(a, u), u: location.href }));
  } catch {}
});
addEventListener('popstate', sync);
addEventListener('pageshow', sync);
