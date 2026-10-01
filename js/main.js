/* ============ STRAIGHTLINE FURNITURE ============ */
const img = (id, w = 700) => `https://images.unsplash.com/photo-${id}?w=${w}&q=75&auto=format&fit=crop`;
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const inr = n => "₹ " + n.toLocaleString("en-IN");
const isTouch = matchMedia("(hover: none)").matches;

/* ---------- DATA ---------- */
const PRODUCTS = [
  { name: "Nova Moulded Chair", type: "Moulded Chair", room: "Dining", price: 2499, mrp: 3999, rate: 4.8, tag: "Best seller", tc: "y", img: "1551298370-9d3d53740c72", sw: ["#fbba16", "#cfcac0", "#111"] },
  { name: "Eames Style Moulded Chair", type: "Moulded Chair", room: "Office", price: 2999, mrp: 4499, rate: 4.7, tag: "New", img: "1592078615290-033ee584e267", sw: ["#111", "#fff", "#8a9a7b"] },
  { name: "Regal Sheesham Wooden Bed", type: "Wooden Bed", room: "Bedroom", price: 38999, mrp: 52999, rate: 4.9, tag: "Solid wood", tc: "s", img: "1505693416388-ac5ce068fe85", sw: ["#7a5230", "#a9743f"] },
  { name: "Haven Queen Bed", type: "Wooden Bed", room: "Bedroom", price: 29499, mrp: 39999, rate: 4.8, img: "1615874959474-d609969a20ed", sw: ["#d9cbb4", "#7a5230"] },
  { name: "Oslo Dining Chair (Set of 2)", type: "Dining Chairs", room: "Dining", price: 7999, mrp: 10999, rate: 4.7, img: "1598300042247-d088f8ab3a91", sw: ["#9a9a9a", "#d9cbb4"] },
  { name: "Arc Bar Chair", type: "Dining Chairs", room: "Dining", price: 4299, mrp: 5999, rate: 4.6, img: "1581539250439-c96689b516dd", sw: ["#111", "#fff"] },
  { name: "Stack 4 Tier Shoe Rack", type: "Shoe Rack", room: "Storage", price: 5499, mrp: 7999, rate: 4.6, tag: "Space saver", tc: "y", img: "1513694203232-719a280e022f", sw: ["#fff", "#111"] },
  { name: "Linear Wall TV Cabinet", type: "TV Cabinet", room: "Living", price: 16499, mrp: 22999, rate: 4.8, img: "1594026112284-02bb6f3352fe", sw: ["#a9743f", "#fff"] },
  { name: "Orbit Center Table", type: "Center Table", room: "Living", price: 8999, mrp: 12499, rate: 4.7, tag: "Trending", img: "1532372320572-cda25653a26d", sw: ["#a9743f", "#ede4d6"] },
  { name: "Emerald 6 Seater Dining Set", type: "Dining Set", room: "Dining", price: 54999, mrp: 72999, rate: 4.9, tag: "Premium", tc: "s", img: "1617806118233-18e1de247200", sw: ["#2f5d4a", "#fff"] },
  { name: "Workline Computer Table", type: "Computer Table", room: "Office", price: 9999, mrp: 13999, rate: 4.7, img: "1524758631624-e2822e304c36", sw: ["#fff", "#d9cbb4"] },
  { name: "Tall Display Unit", type: "Display Unit", room: "Storage", price: 13999, mrp: 18999, rate: 4.6, img: "1595428774223-ef52624120d2", sw: ["#d9cbb4", "#7a5230"] },
  { name: "Nook Study Table", type: "Study Table", room: "Office", price: 6499, mrp: 8999, rate: 4.8, tag: "Kids fav", tc: "y", img: "1499933374294-4584851497cc", sw: ["#fff", "#fbba16"] },
  { name: "Velvet Emerald Sofa", type: "Sofa", room: "Living", price: 42999, mrp: 59999, rate: 4.9, tag: "Best seller", tc: "y", img: "1555041469-a586c61ea9bc", sw: ["#2f5d4a", "#fbba16", "#7a5230"] },
  { name: "Cognac Leather Sofa", type: "Sofa", room: "Living", price: 64999, mrp: 84999, rate: 4.8, img: "1540574163026-643ea20ade25", sw: ["#a9743f", "#111"] },
  { name: "Classic 2 Door Wardrobe", type: "Wardrobe", room: "Bedroom", price: 24999, mrp: 32999, rate: 4.7, img: "1558997519-83ea9252edf8", sw: ["#7a5230", "#fff"] },
  { name: "Cloud Accent Chair", type: "Accent Chair", room: "Bedroom", price: 11999, mrp: 15999, rate: 4.8, img: "1567538096630-e0c55bd6374c", sw: ["#f7f3ec", "#8a9a7b"] },
  { name: "Pine Bar Stool", type: "Dining Chairs", room: "Dining", price: 2999, mrp: 3999, rate: 4.5, img: "1503602642458-232111445657", sw: ["#ede4d6"] },
];
const TYPES = ["Moulded Chair", "Wooden Bed", "Dining Chairs", "Shoe Rack", "TV Cabinet", "Center Table", "Dining Set", "Computer Table", "Display Unit", "Study Table", "Sofa", "Wardrobe", "Accent Chair"];

const LOOKBOOK = [
  { t: "Modern interior", id: "1600210492486-724fe5c67fb0" },
  { t: "Warm minimal living", id: "1616486338812-3dadae4b4ace" },
  { t: "Boho lounge", id: "1556228453-efd6c1ff04f6" },
  { t: "Calm bedroom", id: "1615874959474-d609969a20ed" },
  { t: "Loft living", id: "1538688525198-9b88f6f53126" },
  { t: "Scandi corner", id: "1631679706909-1844bbd07221" },
  { t: "Urban sectional", id: "1550581190-9c1c48d21d6c" },
  { t: "Earthy retreat", id: "1618221195710-dd6b41faaea6" },
];

const REVIEWS = [
  ["Ananya R.", "Pune", "The sheesham bed is stunning and super sturdy. Installation team was on time and so polite.", "#fbba16"],
  ["Rahul M.", "Mumbai", "Bought 6 moulded chairs for our café. Bright, stackable and customers love them.", "#8a9a7b"],
  ["Sneha K.", "Bengaluru", "Used the AI planner for my living room. It nailed my style better than I could describe it.", "#ede4d6"],
  ["Vikram S.", "Delhi", "TV cabinet finish is flawless. Feels way more premium than the price.", "#fbba16"],
  ["Priya T.", "Hyderabad", "Got a custom size study table for my son's tiny room. Fits perfectly!", "#d9cbb4"],
  ["Arjun P.", "Ahmedabad", "Dining set arrived with zero scratches. The packing was next level.", "#8a9a7b"],
  ["Meera J.", "Jaipur", "Their team helped me pick fabric samples at home. Such a smooth experience.", "#ffd75e"],
  ["Karan D.", "Chennai", "Shoe rack and display unit both look clean and modern. Five stars.", "#ede4d6"],
];

/* ---------- PRELOADER ---------- */
if ("scrollRestoration" in history) history.scrollRestoration = "manual";
scrollTo(0, 0);
document.body.classList.add("loading");
$$(".pre-word span, .hero-word span").forEach(el => el.style.setProperty("--i", [...el.parentNode.children].indexOf(el)));
$$(".hero-chips a").forEach((el, i) => el.style.setProperty("--i", i));
(() => {
  let n = 0;
  const bar = $(".pre-line i"), cnt = $("#preCount");
  const tick = setInterval(() => {
    n = Math.min(100, n + Math.ceil(Math.random() * 9));
    bar.style.width = n + "%"; cnt.textContent = n;
    if (n >= 100) {
      clearInterval(tick);
      setTimeout(() => {
        $("#preloader").classList.add("done");
        document.body.classList.remove("loading");
        document.body.classList.add("loaded");
        fitHeroWord();
      }, 250);
    }
  }, 60);
})();

/* ---------- HERO WORD FIT ---------- */
function fitHeroWord() {
  const h = $("#heroWord");
  h.style.fontSize = "15vw";
  const avail = h.parentElement.clientWidth - 24;
  const kids = h.children;
  const used = kids[kids.length - 1].getBoundingClientRect().right - kids[0].getBoundingClientRect().left;
  const ratio = avail / used;
  if (ratio < 1) h.style.fontSize = (15 * ratio) + "vw";
}
fitHeroWord();
addEventListener("resize", fitHeroWord);

/* ---------- CURSOR ---------- */
if (!isTouch) {
  const dot = $("#cursorDot"), ring = $("#cursorRing");
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px)`; });
  (function loop() {
    rx += (mx - rx) * .16; ry += (my - ry) * .16;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", e => {
    const t = e.target;
    ring.classList.toggle("view", !!t.closest(".cat-card, .cf-item, .p-img"));
    ring.classList.toggle("hover", !!t.closest("a, button, input, select, .chip") && !t.closest(".cat-card, .p-img"));
  });
}

/* ---------- NAV ---------- */
let lastY = 0;
const nav = $("#nav"), progress = $("#scrollProgress");
addEventListener("scroll", () => {
  const y = scrollY;
  nav.classList.toggle("hide", y > lastY && y > 300 && !$("#navLinks").classList.contains("open"));
  lastY = y;
  progress.style.transform = `scaleX(${y / (document.documentElement.scrollHeight - innerHeight)})`;
}, { passive: true });
$("#burger").addEventListener("click", () => { $("#burger").classList.toggle("open"); $("#navLinks").classList.toggle("open"); });
$$("#navLinks a").forEach(a => a.addEventListener("click", () => { $("#burger").classList.remove("open"); $("#navLinks").classList.remove("open"); }));

/* ---------- SPLIT TEXT ---------- */
$$("[data-split]").forEach(el => {
  let wi = 0;
  const walk = node => {
    [...node.childNodes].forEach(ch => {
      if (ch.nodeType === 3) {
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(" ")); return; }
          const w = document.createElement("span"); w.className = "w";
          const inner = document.createElement("span"); inner.textContent = part; inner.style.setProperty("--wi", wi++);
          w.appendChild(inner); frag.appendChild(w);
        });
        ch.replaceWith(frag);
      } else if (ch.nodeType === 1) walk(ch);
    });
  };
  walk(el);
});

/* ---------- REVEAL ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: .15, rootMargin: "0px 0px -40px 0px" });
const observe = () => $$("[data-reveal]:not(.in), [data-split]:not(.in)").forEach(el => io.observe(el));
observe();

/* ---------- MAGNETIC + TILT ---------- */
if (!isTouch) {
  $$(".magnetic").forEach(b => {
    b.addEventListener("mousemove", e => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`;
    });
    b.addEventListener("mouseleave", () => (b.style.transform = ""));
  });
  $$(".tilt").forEach(c => {
    c.addEventListener("mousemove", e => {
      const r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      c.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateY(-6px)`;
    });
    c.addEventListener("mouseleave", () => (c.style.transform = ""));
  });
}

/* ---------- TOAST + COUNTERS ---------- */
let toastT;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2400);
}
const state = { cart: 0, wish: 0 };
function bumpBadge(id, val) { const b = $(id); b.textContent = val; b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }
function addToCart(name) { state.cart++; bumpBadge("#cartCount", state.cart); toast(`${name} added to cart`); }

/* ---------- PRODUCTS ---------- */
const chipsEl = $("#chips"), grid = $("#productGrid");
let activeFilter = "all";
function renderChips() {
  const all = [["all", "All products", PRODUCTS.length], ...TYPES.map(t => [t, t, PRODUCTS.filter(p => p.type === t).length])];
  chipsEl.innerHTML = all.map(([v, l, n]) => `<button class="chip${v === activeFilter ? " active" : ""}" data-f="${v}">${l}<span class="n">${n}</span></button>`).join("");
}
function renderProducts() {
  const list = PRODUCTS.filter(p => activeFilter === "all" || p.type === activeFilter || p.room === activeFilter);
  grid.innerHTML = list.map((p, i) => `
    <article class="p-card" style="--i:${i}">
      <div class="p-img">
        <img src="${img(p.img)}" alt="${p.name}" loading="lazy" />
        ${p.tag ? `<span class="p-tag ${p.tc || ""}">${p.tag}</span>` : ""}
        <button class="p-wish" aria-label="Add to wishlist"><svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button>
        <button class="p-add" data-name="${p.name}">Add to cart +</button>
      </div>
      <div class="p-body">
        <span class="p-cat">${p.type}</span>
        <h4>${p.name}</h4>
        <div class="p-row">
          <span class="p-price">${inr(p.price)}<s>${inr(p.mrp)}</s></span>
          <span class="p-rate"><b>★</b> ${p.rate}</span>
        </div>
        <div class="p-swatches">${p.sw.map(c => `<i style="background:${c}"></i>`).join("")}</div>
      </div>
    </article>`).join("");
}
function setFilter(f) {
  if (f === activeFilter) return;
  activeFilter = f;
  renderChips();
  $$(".p-card", grid).forEach(c => c.classList.add("out"));
  setTimeout(renderProducts, 300);
  const active = $(".chip.active", chipsEl);
  if (active) chipsEl.scrollTo({ left: active.offsetLeft - chipsEl.clientWidth / 2 + active.offsetWidth / 2, behavior: "smooth" });
}
chipsEl.addEventListener("click", e => { const c = e.target.closest(".chip"); if (c) setFilter(c.dataset.f); });
grid.addEventListener("click", e => {
  const add = e.target.closest(".p-add"), wish = e.target.closest(".p-wish");
  if (add) addToCart(add.dataset.name);
  if (wish) {
    wish.classList.toggle("on");
    state.wish += wish.classList.contains("on") ? 1 : -1;
    bumpBadge("#wishCount", state.wish);
    if (wish.classList.contains("on")) toast("Saved to wishlist");
  }
});
$$("[data-cat]").forEach(a => a.addEventListener("click", () => setFilter(a.dataset.cat)));
renderChips(); renderProducts();

/* ---------- AI PLANNER ---------- */
const STYLE_PALETTES = {
  "Minimal": ["#f7f3ec", "#e4ddd1", "#bfb6a8", "#1b1b1b", "#fbba16"],
  "Scandi": ["#ffffff", "#ede4d6", "#c9b79c", "#8a9a7b", "#2b2b2b"],
  "Industrial": ["#2b2b2b", "#555150", "#a9743f", "#c9c3b9", "#fbba16"],
  "Royal Teak": ["#4a2e17", "#7a5230", "#a9743f", "#e8d3a8", "#2f5d4a"],
  "Boho": ["#c96f45", "#e8c39e", "#8a9a7b", "#f3e7d3", "#fbba16"],
};
const ai = { room: "Living", style: "Minimal", budget: 75000 };
$$(".opt-row").forEach(row => row.addEventListener("click", e => {
  const o = e.target.closest(".opt"); if (!o) return;
  $$(".opt", row).forEach(b => b.classList.remove("active")); o.classList.add("active");
  ai[row.dataset.group] = o.dataset.v;
}));
const range = $("#budget");
const updRange = () => {
  ai.budget = +range.value;
  $("#budgetVal").textContent = inr(ai.budget);
  range.style.setProperty("--p", ((range.value - range.min) / (range.max - range.min)) * 100 + "%");
};
range.addEventListener("input", updRange); updRange();

let aiBusy = false;
$("#aiGenerate").addEventListener("click", async () => {
  if (aiBusy) return; aiBusy = true;
  const out = $("#aiOutput"), type = $("#aiType"), bar = $("#aiBar");
  out.classList.remove("has-result"); out.classList.add("is-loading");
  $("#aiResult").innerHTML = "";
  const lines = [`Scanning ${ai.room.toLowerCase()} layouts...`, `Matching ${ai.style} palettes...`, `Fitting a ${inr(ai.budget)} budget...`, "Composing your moodboard..."];
  for (let i = 0; i < lines.length; i++) {
    type.textContent = "";
    for (const ch of lines[i]) { type.textContent += ch; await wait(18); }
    bar.style.width = ((i + 1) / lines.length) * 100 + "%";
    await wait(320);
  }
  showAiResult();
  out.classList.remove("is-loading"); out.classList.add("has-result");
  bar.style.width = "0"; aiBusy = false;
});
const wait = ms => new Promise(r => setTimeout(r, ms));
function showAiResult() {
  let pool = PRODUCTS.filter(p => p.room === ai.room);
  if (ai.room === "Living") pool = pool.concat(PRODUCTS.filter(p => p.type === "Accent Chair" || p.type === "Moulded Chair"));
  if (ai.room === "Bedroom") pool = pool.concat(PRODUCTS.filter(p => p.type === "Shoe Rack" || p.type === "Display Unit"));
  pool = [...new Set(pool)].sort((a, b) => a.price - b.price);
  // greedy pick of 3 that fit the budget, falling back to cheapest
  const picks = [];
  let left = ai.budget;
  for (const p of [...pool].sort(() => Math.random() - .5)) { if (picks.length < 3 && p.price <= left) { picks.push(p); left -= p.price; } }
  for (const p of pool) { if (picks.length >= 3) break; if (!picks.includes(p)) picks.push(p); }
  const total = picks.reduce((s, p) => s + p.price, 0);
  const score = Math.min(99, 86 + Math.floor(Math.random() * 12) + (total <= ai.budget ? 2 : -6));
  const pal = STYLE_PALETTES[ai.style];
  $("#aiResult").innerHTML = `
    <div class="ai-res-head">
      <div><h3>Your <em>${ai.style}</em> ${ai.room.toLowerCase()}</h3><p>Curated by Straightline AI from 1,200+ designs</p></div>
      <div class="match"><svg viewBox="0 0 74 74"><circle class="bg" cx="37" cy="37" r="32"/><circle class="fg" cx="37" cy="37" r="32"/></svg><b>${score}%</b></div>
    </div>
    <div class="palette">${pal.map((c, i) => `<i style="background:${c};--i:${i}" data-hex="${c}"></i>`).join("")}</div>
    <div class="ai-picks">${picks.map((p, i) => `<div class="ai-pick" style="--i:${i}"><img src="${img(p.img, 400)}" alt="${p.name}"/><b>${p.name}</b><span>${inr(p.price)}</span></div>`).join("")}</div>
    <div class="ai-total"><span>Look total<br><b>${inr(total)}</b></span><button id="aiAddAll">Add all to cart</button></div>`;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    $(".match .fg").style.strokeDashoffset = 201 - (201 * score) / 100;
  }));
  $("#aiAddAll").addEventListener("click", () => { state.cart += picks.length; bumpBadge("#cartCount", state.cart); toast(`${picks.length} pieces added to cart`); });
}

/* ---------- COUNTERS ---------- */
const cio = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, to = +el.dataset.to, dec = +(el.dataset.dec || 0), t0 = performance.now(), dur = 1800;
  (function step(now) {
    const p = Math.min(1, (now - t0) / dur), v = to * (1 - Math.pow(1 - p, 4));
    el.textContent = dec ? v.toFixed(dec) : Math.round(v).toLocaleString("en-IN");
    if (p < 1) requestAnimationFrame(step);
  })(t0);
  cio.unobserve(el);
}), { threshold: .6 });
$$(".count").forEach(c => cio.observe(c));

/* ---------- COVERFLOW ---------- */
const cfTrack = $("#cfTrack"), cfDots = $("#cfDots"), cfCap = $("#cfCaption");
cfTrack.innerHTML = LOOKBOOK.map((l, i) => `<div class="cf-item" data-i="${i}" data-title="${l.t}"><img src="${img(l.id, 800)}" alt="${l.t}" draggable="false"/></div>`).join("");
cfDots.innerHTML = LOOKBOOK.map((_, i) => `<button data-i="${i}" aria-label="Slide ${i + 1}"></button>`).join("");
let cfIndex = 0, cfTimer;
function layoutCF() {
  const narrow = innerWidth < 900, gap = narrow ? 120 : 210;
  $$(".cf-item", cfTrack).forEach((el, i) => {
    let d = i - cfIndex;
    const n = LOOKBOOK.length;
    if (d > n / 2) d -= n; if (d < -n / 2) d += n;
    const ad = Math.abs(d);
    const x = d === 0 ? 0 : Math.sign(d) * (gap + (ad - 1) * (narrow ? 50 : 80));
    el.style.transform = `translateX(${x}px) translateZ(${-ad * 140}px) rotateY(${d === 0 ? 0 : -Math.sign(d) * 48}deg) scale(${d === 0 ? 1.05 : 1})`;
    el.style.zIndex = 20 - ad;
    el.style.opacity = ad > 3 ? 0 : 1;
    el.style.filter = d === 0 ? "none" : `brightness(${1 - ad * .12})`;
  });
  $$("button", cfDots).forEach((b, i) => b.classList.toggle("active", i === cfIndex));
  cfCap.style.opacity = 0;
  setTimeout(() => { cfCap.textContent = LOOKBOOK[cfIndex].t; cfCap.style.opacity = 1; }, 250);
}
const cfGo = i => { cfIndex = (i + LOOKBOOK.length) % LOOKBOOK.length; layoutCF(); restartCF(); };
const restartCF = () => { clearInterval(cfTimer); cfTimer = setInterval(() => cfGo(cfIndex + 1), 3800); };
$("#cfPrev").addEventListener("click", () => cfGo(cfIndex - 1));
$("#cfNext").addEventListener("click", () => cfGo(cfIndex + 1));
cfDots.addEventListener("click", e => { const b = e.target.closest("button"); if (b) cfGo(+b.dataset.i); });
cfTrack.addEventListener("click", e => { const it = e.target.closest(".cf-item"); if (it) cfGo(+it.dataset.i); });
let sx = null;
cfTrack.addEventListener("pointerdown", e => (sx = e.clientX));
addEventListener("pointerup", e => { if (sx === null) return; const dx = e.clientX - sx; if (Math.abs(dx) > 50) cfGo(cfIndex + (dx < 0 ? 1 : -1)); sx = null; });
layoutCF(); restartCF();
addEventListener("resize", layoutCF);

/* ---------- REVIEWS ---------- */
const revHTML = list => list.map(([n, c, t, col]) => `
  <div class="rev"><div class="stars">★★★★★</div><p>“${t}”</p>
  <div class="rev-who"><i style="background:${col}">${n[0]}</i><div><b>${n}</b><small>${c}</small></div></div></div>`).join("");
const half1 = REVIEWS.slice(0, 4), half2 = REVIEWS.slice(4);
$("#revRow1").innerHTML = revHTML([...half1, ...half2, ...half1, ...half2]);
$("#revRow2").innerHTML = revHTML([...half2, ...half1, ...half2, ...half1]);

/* ---------- SCROLL DRIVEN: parallax, materials, timeline ---------- */
const matSec = $("#materials"), matTrack = $("#matTrack"), tlPath = $("#tlPath"), timeline = $("#timeline");
const heroImg = $(".hero-img");
let ticking = false;
function onScroll() {
  const vh = innerHeight;
  // hero parallax
  if (scrollY < vh * 1.2) heroImg.style.transform = `translateY(${scrollY * .12}px)`;
  // horizontal materials
  const r = matSec.getBoundingClientRect();
  const total = matSec.offsetHeight - vh;
  const p = Math.min(1, Math.max(0, -r.top / total));
  const maxX = matTrack.scrollWidth - innerWidth;
  matTrack.style.transform = `translateX(${-p * Math.max(0, maxX)}px)`;
  // timeline draw
  const tr = timeline.getBoundingClientRect();
  const tp = Math.min(1, Math.max(0, (vh - tr.top) / (vh * .8)));
  tlPath.style.strokeDashoffset = 1200 * (1 - tp);
  ticking = false;
}
addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
addEventListener("resize", onScroll);
onScroll();

/* ---------- FORM ---------- */
$("#ctaForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = $("#fName").value.trim().split(" ")[0] || "there";
  toast(`Thanks ${name}! We'll call you within 30 minutes.`);
  e.target.reset();
});
