import { Fragment, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ShiuliMark from '../components/ShiuliMark';
import SEO from '../components/SEO';
import './Home.css';


const CONTACT_EMAIL = 'shiulitech@gmail.com'; // placeholder, apna real email daalo

const STORY =
  'The shiuli opens after dark. By morning it has covered the ground in white, and the whole garden smells of it. We build software the same way: quietly, through the night, so that what you wake up to is finished and worth walking out to.';
const WORDS = STORY.split(' ');
const TITLE = 'Shiuli'.split('');

const SERVICES = [
  ['Web applications', 'MERN-stack products, dashboards and portals that stay fast as they grow.'],
  ['Backend and APIs', 'Node.js services, databases and integrations that are secure and easy to maintain.'],
  ['Mobile apps', 'One codebase that feels at home on every phone, from first launch to the tenth update.'],
  ['Design and brand', 'Interfaces and identities with the same calm clarity as this page.'],
];

const PILLARS = [
  ['Calm by design', 'Interfaces that stay out of the way and let the work speak.'],
  ['Built to last', 'Clean code, tested releases and documentation the next team can use.'],
  ['Ready by morning', 'Delivery in clear milestones, so you always know what comes next.'],
];

const STEPS = [
  ['01', 'Listen', 'We start with your users, your goals and your limits.'],
  ['02', 'Design', 'Flows and visuals you can react to early, not at the end.'],
  ['03', 'Build', 'Regular builds on a stack chosen to scale with you.'],
  ['04', 'Launch', 'Deployment, monitoring and support long after go-live.'],
];

/* ---------- helpers (pure, no DOM until called) ---------- */
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const rand = (a, b) => a + Math.random() * (b - a);
const smooth = t => t * t * (3 - 2 * t);
const mix = (a, b, t) => a.map((v, i) => Math.round(lerp(v, b[i], t)));

const SKY = [
  { top: [4, 10, 16], mid: [7, 22, 26], hor: [10, 36, 32] },
  { top: [6, 26, 30], mid: [13, 47, 46], hor: [27, 74, 63] },
  { top: [11, 36, 40], mid: [32, 65, 58], hor: [120, 86, 70] },
];

/* shiuli flower drawn procedurally; variant 1 shows the orange tube */
function makeSprite(variant, soft) {
  const S = 160;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  g.translate(S / 2, S / 2);
  const L = S * 0.46;
  if (soft && 'filter' in g) g.filter = 'blur(4px)';
  for (let i = 0; i < 5; i++) {
    g.save();
    g.rotate((i * Math.PI * 2) / 5);
    g.beginPath();
    g.moveTo(0, 0);
    g.bezierCurveTo(L * 0.34, -L * 0.1, L * 0.52, -L * 0.62, L * 0.14, -L);
    g.bezierCurveTo(-L * 0.12, -L * 0.94, -L * 0.3, -L * 0.52, 0, 0);
    const grd = g.createRadialGradient(0, 0, 0, 0, 0, L);
    grd.addColorStop(0, '#ff8a2a');
    grd.addColorStop(0.07, '#ffb35e');
    grd.addColorStop(0.17, '#fff0da');
    grd.addColorStop(0.4, '#ffffff');
    grd.addColorStop(1, '#eef2ec');
    g.fillStyle = grd;
    g.fill();
    g.strokeStyle = 'rgba(30,50,40,.14)';
    g.lineWidth = 1;
    g.stroke();
    g.restore();
  }
  if (variant === 1) {
    g.save();
    g.rotate(-0.85);
    g.lineCap = 'round';
    const t = g.createLinearGradient(0, 0, 0, -L * 0.8);
    t.addColorStop(0, '#ff8a1f');
    t.addColorStop(1, '#ff5a00');
    g.strokeStyle = t;
    g.lineWidth = L * 0.13;
    g.beginPath();
    g.moveTo(0, 0);
    g.lineTo(0, -L * 0.8);
    g.stroke();
    g.restore();
  }
  g.fillStyle = '#ff7a1f';
  g.beginPath();
  g.arc(0, 0, L * 0.065, 0, 7);
  g.fill();
  return c;
}

function makeBlob() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, 'rgba(255,238,205,1)');
  r.addColorStop(0.45, 'rgba(255,232,190,.35)');
  r.addColorStop(1, 'rgba(255,230,185,0)');
  g.fillStyle = r;
  g.fillRect(0, 0, 64, 64);
  return c;
}

export default function Home() {
  const skyRef = useRef(null);
  const moonRef = useRef(null);
  const canvasRef = useRef(null);
  const railFillRef = useRef(null);
  const railIconRef = useRef(null);
  const heroInnerRef = useRef(null);
  const storyRef = useRef(null);
  const scentRef = useRef(null);
  const stepsRef = useRef(null);
  const stepsFillRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const skyEl = skyRef.current;
    const moonEl = moonRef.current;
    const heroEl = heroInnerRef.current;
    const storyEl = storyRef.current;
    const scentEl = scentRef.current;
    const stepsEl = stepsRef.current;
    const stepsFill = stepsFillRef.current;
    const railFill = railFillRef.current;
    const railIcon = railIconRef.current;
    const wordEls = [...storyEl.querySelectorAll('.sh-w')];
    const stepEls = [...stepsEl.querySelectorAll('.sh-step')];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let W = 0;
    let H = 0;
    let mobile = false;
    let raf = 0;

    const sp = {
      sharp: [makeSprite(0, false), makeSprite(1, false)],
      soft: [makeSprite(0, true), makeSprite(1, true)],
    };
    const blob = makeBlob();

    const fall = [];
    const ground = [];
    const wisps = [];
    const stars = [];
    const st = { p: 0, sp: 0, wind: 0, speed: 1, scent: 0 };
    let lastY = window.scrollY;
    let spawnAcc = 0;
    let wispAcc = 0;
    let pruneT = 0;

    const pageMax = () => document.documentElement.scrollHeight - window.innerHeight;
    st.p = st.sp = pageMax() > 0 ? clamp(window.scrollY / pageMax()) : 0;

    function resize() {
      const DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      mobile = W < 700;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      stars.length = 0;
      const n = mobile ? 60 : 110;
      for (let i = 0; i < n; i++) {
        stars.push({ x: Math.random(), y: Math.random() * 0.7, r: rand(0.4, 1.3), ph: rand(0, 6.28), s: rand(0.6, 1.8) });
      }
    }
    window.addEventListener('resize', resize);
    resize();

    const maxGround = () => (mobile ? 150 : 320);
    const targetGround = () => Math.round(10 + (maxGround() - 10) * smooth(clamp((st.sp - 0.04) / 0.88)));
    const activeGround = () => {
      let n = 0;
      for (const g of ground) if (!g.fade) n++;
      return n;
    };

    /* ---------- flowers ---------- */
    function spawnFlower(y0) {
      const cap = mobile ? 60 : 130;
      if (fall.length > cap) return;
      const k = mobile ? 0.7 : 1;
      const r = Math.random();
      let size;
      let vy;
      let alpha;
      let depth;
      let soft = false;
      if (r < 0.15) { soft = true; size = rand(70, 120) * k; vy = rand(90, 150); alpha = 0.72; depth = 1.6; }
      else if (r < 0.68) { size = rand(34, 56) * k; vy = rand(55, 90); alpha = 1; depth = 1; }
      else { size = rand(20, 32) * k; vy = rand(34, 52); alpha = 0.62; depth = 0.6; }
      fall.push({
        x: rand(-0.05, 1.05) * W,
        y: y0 == null ? -size : y0,
        vy, size, alpha, soft, depth,
        v: Math.random() < 0.4 ? 1 : 0,
        rot: rand(0, 6.28), rs: rand(-0.9, 0.9),
        flip: rand(0, 6.28), fs: rand(1, 2.4),
        t: y0 == null ? 0 : 1, ph: rand(0, 6.28), fr: rand(0.5, 1.2), amp: rand(14, 42) * depth,
        lf: 0.905 + Math.pow(Math.random(), 0.8) * 0.08,
      });
    }

    function spawnWisp(x, y) {
      const cap = mobile ? 40 : 85;
      if (wisps.length > cap) return;
      if (x == null) {
        if (!ground.length) return;
        const g = ground[(Math.random() * ground.length) | 0];
        x = g.gx * W + rand(-10, 10);
        y = g.lf * H - 4;
      }
      wisps.push({ x, y, vy: rand(14, 34), t: 0, life: rand(6, 11), s0: rand(8, 16), s1: rand(50, 110), ph: rand(0, 6.28), amp: rand(12, 40), fr: rand(0.4, 0.9) });
    }

    function land(f) {
      const full = activeGround() >= targetGround() + 6;
      const depthScale = 0.75 + 0.55 * ((f.lf - 0.905) / 0.08);
      ground.push({ gx: f.x / W, lf: f.lf, rot: f.rot, size: clamp(f.size, 20, 40) * depthScale, v: f.v, a: 0, fade: full });
      ground.sort((a, b) => a.lf - b.lf);
      if (!reduce && Math.random() < 0.6) spawnWisp(f.x, f.lf * H);
    }

    /* ---------- sky ---------- */
    function paintSky(p) {
      let a = SKY[0];
      let b = SKY[1];
      let t = p / 0.5;
      if (p > 0.5) { a = SKY[1]; b = SKY[2]; t = (p - 0.5) / 0.5; }
      t = smooth(clamp(t));
      const top = mix(a.top, b.top, t);
      const mid = mix(a.mid, b.mid, t);
      const hor = mix(a.hor, b.hor, t);
      skyEl.style.background = `linear-gradient(180deg, rgb(${top}) 0%, rgb(${mid}) 55%, rgb(${hor}) 100%)`;
      skyEl.style.setProperty('--dawn', (0.5 * smooth(clamp((p - 0.45) / 0.55))).toFixed(3));
      moonEl.style.opacity = (1 - 0.8 * p).toFixed(3);
      moonEl.style.transform = `translateY(${(-p * 70).toFixed(1)}px)`;
    }

    /* ---------- render ---------- */
    function render(t) {
      ctx.clearRect(0, 0, W, H);

      const starFade = 1 - smooth(clamp((st.sp - 0.1) / 0.6));
      if (starFade > 0.01) {
        ctx.fillStyle = '#fff';
        for (const s of stars) {
          ctx.globalAlpha = starFade * (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.s + s.ph))) * 0.9;
          ctx.beginPath();
          ctx.arc(s.x * W, s.y * H, s.r, 0, 7);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;
      const gr = ctx.createLinearGradient(0, H * 0.86, 0, H);
      gr.addColorStop(0, 'rgba(3,12,9,0)');
      gr.addColorStop(0.45, 'rgba(3,12,9,.82)');
      gr.addColorStop(1, 'rgba(2,8,6,1)');
      ctx.fillStyle = gr;
      ctx.fillRect(0, H * 0.86, W, H * 0.14);

      ctx.globalCompositeOperation = 'lighter';
      const mistA = 0.035 + 0.05 * clamp(st.scent, 0, 1);
      for (let i = 0; i < 5; i++) {
        const x = ((((i / 5) * W + t * (i % 2 ? 9 : -7) + W) % (W * 1.2)) - W * 0.1);
        ctx.globalAlpha = mistA;
        ctx.drawImage(blob, x - W * 0.25, H * 0.9, W * 0.5, H * 0.1);
      }

      ctx.globalCompositeOperation = 'source-over';
      for (const g of ground) {
        const s = (g.size * 160) / 147;
        ctx.globalAlpha = clamp(g.a) * 0.96;
        ctx.save();
        ctx.translate(g.gx * W, g.lf * H);
        ctx.scale(1, 0.42);
        ctx.rotate(g.rot);
        ctx.drawImage(sp.sharp[g.v], -s / 2, -s / 2, s, s);
        ctx.restore();
      }

      ctx.globalCompositeOperation = 'lighter';
      for (const w of wisps) {
        for (let j = 0; j < 3; j++) {
          const tt = w.t - j * 0.35;
          if (tt <= 0) continue;
          const k = tt / w.life;
          const x = w.x + Math.sin(w.ph + tt * w.fr) * w.amp * k * 2;
          const y = w.y - w.vy * tt;
          const s = lerp(w.s0, w.s1, k);
          ctx.globalAlpha = Math.sin(Math.PI * k) * 0.11 * (1 - j * 0.28);
          ctx.drawImage(blob, x - s, y - s, s * 2, s * 2);
        }
      }
      ctx.globalCompositeOperation = 'source-over';

      /* sharp flowers first, soft (near, out of focus) on top */
      for (let pass = 0; pass < 2; pass++) {
        for (const f of fall) {
          if ((pass === 1) !== f.soft) continue;
          const s = (f.size * 160) / 147;
          ctx.globalAlpha = f.alpha * Math.min(1, f.t * 2);
          ctx.save();
          ctx.translate(f.x, f.y);
          ctx.rotate(f.rot);
          ctx.scale(1, 0.28 + 0.72 * Math.abs(Math.cos(f.flip)));
          ctx.drawImage((f.soft ? sp.soft : sp.sharp)[f.v], -s / 2, -s / 2, s, s);
          ctx.restore();
        }
      }
      ctx.globalAlpha = 1;
    }

    /* ---------- frame loop ---------- */
    let last = performance.now();
    function frame(now) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = now / 1000;
      const scrollY = window.scrollY;

      const max = pageMax();
      st.p = max > 0 ? clamp(scrollY / max) : 0;
      st.sp += (st.p - st.sp) * Math.min(1, dt * 5);
      const vel = dt > 0 ? (scrollY - lastY) / dt : 0;
      lastY = scrollY;
      st.wind += (clamp(vel * 0.06, -220, 220) - st.wind) * Math.min(1, dt * 3);
      st.speed += (1 + clamp(Math.abs(vel) / 1400, 0, 1.2) - st.speed) * Math.min(1, dt * 3);

      const sr = scentEl.getBoundingClientRect();
      const boost = 1 - clamp(Math.abs(sr.top + sr.height / 2 - H / 2) / (H * 0.9));
      st.scent = clamp(smooth(clamp((st.sp - 0.15) / 0.55)) * 0.8 + boost * 0.6, 0, 1.4);

      paintSky(st.sp);

      if (!reduce) {
        const rate = lerp(1.1, 15, Math.pow(st.sp, 0.85));
        spawnAcc += rate * dt;
        while (spawnAcc >= 1) { spawnAcc--; spawnFlower(); }
        wispAcc += st.scent * 16 * (0.3 + 0.7 * Math.min(1, ground.length / 60)) * dt;
        while (wispAcc >= 1) { wispAcc--; spawnWisp(); }
      } else {
        const target = targetGround();
        while (activeGround() < target) {
          ground.push({ gx: Math.random(), lf: 0.905 + Math.pow(Math.random(), 0.8) * 0.08, rot: rand(0, 6.28), size: rand(22, 40), v: Math.random() < 0.4 ? 1 : 0, a: 1, fade: false });
        }
        ground.sort((a, b) => a.lf - b.lf);
      }

      for (let i = fall.length - 1; i >= 0; i--) {
        const f = fall[i];
        f.t += dt;
        f.y += f.vy * st.speed * dt;
        f.x += (Math.sin(f.t * f.fr + f.ph) * f.amp + st.wind * f.depth) * dt;
        f.rot += f.rs * dt;
        f.flip += f.fs * dt;
        if (f.soft) { if (f.y > H + f.size) fall.splice(i, 1); continue; }
        if (f.y >= f.lf * H) { land(f); fall.splice(i, 1); }
      }

      for (let i = ground.length - 1; i >= 0; i--) {
        const g = ground[i];
        g.a = g.fade ? g.a - dt * 1.2 : Math.min(1, g.a + dt * 4);
        if (g.fade && g.a <= 0) ground.splice(i, 1);
      }
      pruneT += dt;
      if (pruneT > 0.6) {
        pruneT = 0;
        let extra = activeGround() - (targetGround() + 8);
        for (let i = ground.length - 1; i >= 0 && extra > 0; i--) {
          const j = (Math.random() * ground.length) | 0;
          if (!ground[j].fade) { ground[j].fade = true; extra--; }
        }
      }

      for (let i = wisps.length - 1; i >= 0; i--) {
        wisps[i].t += dt;
        if (wisps[i].t > wisps[i].life) wisps.splice(i, 1);
      }

      /* DOM scrubs */
      const hr = clamp(scrollY / (H * 0.7));
      heroEl.style.opacity = (1 - hr).toFixed(3);
      heroEl.style.transform = `translateY(${(hr * -40).toFixed(1)}px) scale(${(1 + hr * 0.04).toFixed(3)})`;

      const sb = storyEl.getBoundingClientRect();
      const q = clamp(-sb.top / (sb.height - H));
      const n = q * (wordEls.length + 2);
      for (let i = 0; i < wordEls.length; i++) wordEls[i].style.opacity = (0.14 + 0.86 * clamp(n - i)).toFixed(2);

      const pr = stepsEl.getBoundingClientRect();
      const fill = clamp((H * 0.85 - pr.top) / (H * 0.5));
      stepsFill.style.transform = `scaleX(${fill.toFixed(3)})`;
      stepEls.forEach((el, i) => el.classList.toggle('on', fill > 0 && fill > i / 3 - 0.02));

      railFill.style.transform = `scaleY(${st.sp.toFixed(3)})`;
      railIcon.style.top = (st.sp * 100).toFixed(2) + '%';
      railIcon.style.transform = `rotate(${(st.sp * 720).toFixed(0)}deg)`;

      render(t);
      raf = requestAnimationFrame(frame);
    }

    /* seed the opening so the first frame is already alive */
    if (!reduce) for (let i = 0; i < 14; i++) spawnFlower(rand(0, H * 0.75));
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="shiuli-home">

      <SEO
        title="Shiuli Technology | Web & App Development Company"
        description="Shiuli Technology builds web applications, mobile apps, backend APIs, and custom software solutions for businesses."
        path="/"
      />

      <div className="sh-sky" ref={skyRef} />
      <div className="sh-moon" ref={moonRef} />
      <canvas className="sh-scene" ref={canvasRef} aria-hidden="true" />

      <div className="sh-rail" aria-hidden="true">
        <i className="sh-rail-fill" ref={railFillRef} />
        <span className="sh-rail-icon" ref={railIconRef}>
          <ShiuliMark />
        </span>
      </div>

      <main className="sh-main">
        <section className="sh-hero">
          <div className="sh-hero-inner" ref={heroInnerRef}>
            <h1 className="sh-title" aria-label="Shiuli Technology">
              <span className="sh-word" aria-hidden="true">
                {TITLE.map((ch, i) => (
                  <span key={i} style={{ '--i': i }}>{ch}</span>
                ))}
              </span>
              <span className="sh-sub" aria-hidden="true">Technology</span>
            </h1>
            <p className="sh-tag">Software that blooms after dark.</p>
            <p className="sh-deva" lang="hi">शिउली टेक्नोलॉजी</p>
          </div>
          <div className="sh-cue" aria-hidden="true">
            <span>Scroll</span>
            <b />
          </div>
        </section>

        <section className="sh-story" ref={storyRef} aria-label="Our story">
          <div className="sh-story-inner">
            <div className="sh-wrap">
              <p className="sh-story-text">
                {WORDS.map((w, i) => (
                  <Fragment key={i}>
                    <span className="sh-w">{w}</span>{' '}
                  </Fragment>
                ))}
              </p>
            </div>
          </div>
        </section>

        <section className="sh-work">
          <div className="sh-wrap">
            <h2>What we make</h2>
            <ul className="sh-rows">
              {SERVICES.map(([title, text]) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sh-scent" ref={scentRef}>
          <div className="sh-wrap">
            <h2>The scent travels further than the flower.</h2>
            <div className="sh-three">
              {PILLARS.map(([title, text]) => (
                <div key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sh-process">
          <div className="sh-wrap">
            <h2>From first idea to full bloom</h2>
            <div className="sh-steps" ref={stepsRef}>
              <div className="sh-fill" ref={stepsFillRef} />
              {STEPS.map(([num, title, text]) => (
                <div className="sh-step" key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sh-contact">
          <div className="sh-wrap">
            <h2>Let&apos;s grow something that lasts.</h2>
            <p className="sh-lead">Tell us what you are building. We reply within one working day.</p>
            <Link className="sh-btn" to="/contact">Start a project</Link>
            <a className="sh-mail" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </section>
      </main>
    </div>
  );
}
