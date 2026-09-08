import Link from "next/link";
import { PROFILE, GALLERY, type Lang } from "@/lib/content";
import { getDict } from "@/lib/dict";
import Pic from "./Pic";
import Ridge from "./Ridge";
import RaceLog from "./RaceLog";

const LINKS: Record<string, string> = {
  podcast: PROFILE.podcast, strava: PROFILE.strava,
  instagram: PROFILE.instagram, utmb: PROFILE.utmb, itra: PROFILE.itra,
};

export default function Site({ lang }: { lang: Lang }) {
  const d = getDict(lang);
  const ar = lang === "ar";

  return (
    <>
      <a className="skip" href="#main">{d.skip}</a>

      <nav className="nav" aria-label={d.nav.profile}>
        <div className="nav-in">
          <span className="nav-mark">{ar ? PROFILE.nameAr : PROFILE.name}</span>
          <span className="nav-coord">{d.coord}</span>
          <div className="nav-links">
            <a href="#about">{d.nav.profile}</a>
            <a href="#results">{d.nav.results}</a>
            <a href="#log">{d.nav.log}</a>
            <a href="#media">{d.nav.media}</a>
            <a href="#partner">{d.nav.partner}</a>
            <Link className="langbtn" href={d.otherHref} hrefLang={ar ? "en" : "ar"}
                  aria-label={d.otherAria} lang={ar ? "en" : "ar"}>{d.otherLabel}</Link>
            <a className="nav-cta" href="#contact">{d.nav.cta}</a>
          </div>
        </div>
      </nav>

      <main id="main">
        {/* ── HERO ── */}
        <header className="hero">
          <div className="shell">
            <div className="hero-grid">
              <div className="hero-col">
                <div className="hero-eyebrow">
                  <span className="dot" /><span className="tag">{d.hero.eyebrow}</span>
                  <span className="tag tag-ink">{d.hero.badge}</span>
                </div>
                <h1 className="hero-name">{d.hero.name1}<br />{d.hero.name2}</h1>
                <p className="hero-role">{d.hero.role}</p>
                <p className="hero-lede">
                  <strong>2:50:57</strong> {d.hero.ledeA} <strong>1:19:15</strong> {d.hero.ledeB}{" "}
                  {d.hero.lede}
                </p>
                <div className="hero-btns">
                  <a className="btn btn-solid" href="#partner">{d.hero.btn1}</a>
                  <a className="btn btn-ghost" href="#results">{d.hero.btn2}</a>
                </div>
              </div>

              <figure className="frame hero-portrait">
                <Pic name="hero" alt={d.hero.alt} priority
                     sizes="(max-width:900px) 100vw, 33vw" />
                <figcaption className="frame-cap">{d.hero.cap}</figcaption>
              </figure>
            </div>

            <section className="ridge" aria-label={d.ridge.aria}>
              <div className="ridge-head">
                <span className="tag">{d.ridge.head}</span>
                <span className="tag tag-ink">{d.ridge.stats}</span>
              </div>
              <Ridge labels={{ petra: d.ridge.petra, sea: d.ridge.sea, aria: d.ridge.aria, unit: d.log.m }} />
              <div className="ridge-foot"><span>{d.ridge.low}</span><span>{d.ridge.high}</span></div>
            </section>
          </div>
        </header>

        {/* ── MARKS ── */}
        <section className="marks" aria-label={d.results.tag}>
          <div className="marks-grid">
            {d.marks.map((m) => (
              <div className="mark" key={m.k}>
                <p className="mark-v">{m.v}</p>
                <p className="mark-k">{m.k}</p>
                <p className="mark-s">{m.s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE BAND ── */}
        <figure className="band">
          <Pic name="feature-rum" alt={d.band.alt} sizes="100vw" />
          <figcaption className="band-cap">
            <span className="band-t">{d.band.t}</span>
            <span className="band-m">{d.band.m}</span>
          </figcaption>
        </figure>

        {/* ── ABOUT ── */}
        <section className="sec" id="about">
          <div className="shell about-grid">
            <div className="about-body">
              <span className="tag">{d.about.tag}</span>
              <h2 className="sec-title">{d.about.title1}<br />{d.about.title2}</h2>
              <p>{d.about.p1}</p>
              <p>{d.about.p2}</p>
              <blockquote className="pull">{d.about.pull}</blockquote>
              <p>{d.about.p3}</p>
              <p>{d.about.p4}</p>
            </div>
            <div>
              <figure className="frame about-frame">
                <Pic name="about" alt={d.about.alt} sizes="(max-width:880px) 100vw, 45vw" />
                <figcaption className="frame-cap">{d.about.cap}</figcaption>
              </figure>
              <dl className="facts">
                {d.about.facts.map(([k, v]) => (
                  <div className="fact" key={k}>
                    <dt className="fact-k">{k}</dt><dd className="fact-v">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ── RESULTS ── */}
        <section className="sec sec-alt" id="results">
          <div className="shell">
            <div className="sec-head">
              <span className="tag">{d.results.tag}</span>
              <h2 className="sec-title">{d.results.title}</h2>
              <p className="sec-sub">{d.results.sub}</p>
            </div>
            <div className="pal">
              {d.results.cards.map((c) => (
                <article className={`pal-c ${c.tone ? `is-${c.tone}` : ""}`} key={c.name + c.time}>
                  <p className="pal-rank">{c.rank}</p>
                  <p className="pal-time">{c.time}</p>
                  <h3 className="pal-name">{c.name}</h3>
                  <p className="pal-meta">{c.meta1}<br />{c.meta2}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── RACE LOG ── */}
        <section className="sec" id="log">
          <div className="shell">
            <div className="sec-head">
              <span className="tag">{d.log.tag}</span>
              <h2 className="sec-title">{d.log.title1}<br />{d.log.title2}</h2>
              <p className="sec-sub">{d.log.sub}</p>
            </div>
            <RaceLog d={d.log} lang={lang} />
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="sec sec-alt" id="gallery">
          <div className="shell">
            <div className="sec-head">
              <span className="tag">{d.gallery.tag}</span>
              <h2 className="sec-title">{d.gallery.title1}<br />{d.gallery.title2}</h2>
              <p className="sec-sub">{d.gallery.sub}</p>
            </div>
            <div className="gal">
              {GALLERY.map((g) => (
                <figure className={`frame ${g.span}`} key={g.src}>
                  <Pic name={g.src} alt={ar ? g.altA : g.alt}
                       sizes="(max-width:620px) 100vw, (max-width:1000px) 50vw, 33vw" />
                  <figcaption className="gcap">
                    <span className="gcap-t">{ar ? g.tA : g.t}</span>
                    <span className={`gcap-m ${g.tone}`}>{ar ? g.mA : g.m}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEDIA ── */}
        <section className="sec" id="media">
          <div className="shell">
            <div className="sec-head">
              <span className="tag">{d.media.tag}</span>
              <h2 className="sec-title">{d.media.title}</h2>
              <p className="sec-sub">{d.media.sub}</p>
            </div>
            <div className="med">
              {d.media.cards.map((c) => (
                <a className="med-c" key={c.t} href={LINKS[c.href]} target="_blank" rel="noopener me">
                  <span className="med-k">{c.k}</span>
                  <h3 className="med-t">{c.t}</h3>
                  <p className="med-d">{c.d}</p>
                  <span className="med-go">{c.go}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTNER ── */}
        <section className="sec sec-alt" id="partner">
          <div className="shell">
            <div className="sec-head">
              <span className="tag">{d.partner.tag}</span>
              <h2 className="sec-title">{d.partner.title1}<br />{d.partner.title2}</h2>
              <p className="sec-sub">{d.partner.sub}</p>
            </div>
            <div className="tiers">
              {d.partner.tiers.map((t) => (
                <div className={`tier ${t.cls}`} key={t.n}>
                  <h3 className="tier-n">{t.n}</h3>
                  <p className="tier-p">{t.p}</p>
                  <p className="tier-u">{t.u}</p>
                  <ul>{t.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
            <p className="tier-note">{d.partner.note}</p>
            <div className="deliv">
              {d.partner.dv.map(([t, x]) => (
                <div className="dv" key={t}>
                  <h3 className="dv-t">{t}</h3><p className="dv-d">{x}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── CONTACT ── */}
      <section className="cta" id="contact">
        <div className="shell">
          <span className="tag tag-light">{d.contact.tag}</span>
          <h2>{d.contact.title1}<br /><em>{d.contact.title2}</em></h2>
          <p>{d.contact.sub}</p>
          <div className="cta-rows">
            {d.contact.rows.map(([k, v], i) => {
              const href = [
                `mailto:${PROFILE.email}`, `tel:${PROFILE.phone}`,
                PROFILE.instagram, PROFILE.strava, PROFILE.utmb, PROFILE.itra,
              ][i];
              const ext = i >= 2;
              return (
                <a className="cta-row" key={k} href={href}
                   {...(ext ? { target: "_blank", rel: "noopener me" } : {})}>
                  <span className="cta-k">{k}</span><span className="cta-v">{v}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="shell foot-in">
          <span>{d.foot}</span><span>{d.footCoord}</span>
        </div>
      </footer>
    </>
  );
}
