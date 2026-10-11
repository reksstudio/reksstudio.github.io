const K = 'bkref';
const navType = () => performance.getEntriesByType('navigation')[0]?.type;
const links = () => [...document.querySelectorAll('a[href]')];
const isRef = (a) => a.hash && (a.matches('.manref') || a.closest('.docsec:not(.contents,.az)'));

// last h2-h4 before the link, plus the page title
function label(a) {
  let h;
  for (const x of document.querySelectorAll('h2,h3,h4')) {
    if (x.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING || x.contains(a)) h = x;
    else break;
  }
  const page = document.title.split(' — ')[0];
  const sec = h ? [...h.childNodes].filter((n) => n.nodeName !== 'A').map((n) => n.textContent).join('').trim() : '';
  return a.pathname === location.pathname ? sec || page : sec ? `${sec} · ${page}` : page;
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
    if (r && r.to === location.href) history.replaceState({ b: r.b, u: r.u, n: r.n }, '');
  }
  const st = history.state || {};
  pill?.remove();
  pill = null;
  if (st.b) {
    pill = document.createElement('a');
    pill.className = 'bkp';
    pill.href = st.u;
    pill.textContent = `← Back to ${st.b}`;
    pill.onclick = (ev) => {
      ev.preventDefault();
      history.go(-st.n);
    };
    // after the jump target, so the first Tab reaches it
    const t = location.hash && document.getElementById(location.hash.slice(1));
    (t || document.body.lastElementChild).after(pill);
  }
  const same = e.type === 'popstate';
  if (!(same || e.persisted || navType() === 'back_forward') || st.y == null) return;
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

// leaving entry: {y: scroll, f: reference index}; next entry: {b: origin label, u: origin URL, n: steps back}
addEventListener('click', (e) => {
  const a = e.target.closest('a[href]');
  if (!a || e.defaultPrevented || e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target || a.origin !== location.origin) return;
  const st = history.state || {};
  const ref = isRef(a);
  history.replaceState({ ...st, y: scrollY, f: ref ? links().indexOf(a) : null }, '');
  const r = ref ? { to: a.href, b: label(a), u: location.href, n: 1 } : st.b ? { to: a.href, b: st.b, u: st.u, n: st.n + 1 } : null;
  try {
    if (r) sessionStorage.setItem(K, JSON.stringify(r));
    else sessionStorage.removeItem(K);
  } catch {}
});
addEventListener('popstate', sync);
addEventListener('pageshow', sync);
