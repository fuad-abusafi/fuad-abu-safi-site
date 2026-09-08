"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { RACES, type Lang } from "@/lib/content";
import type { Dict } from "@/lib/dict";

type F = "all" | "Road" | "Trail" | "pod";

export default function RaceLog({ d, lang }: { d: Dict["log"]; lang: Lang }) {
  const [f, setF] = useState<F>("all");
  const [more, setMore] = useState(false);
  const shell = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const ar = lang === "ar";

  const sync = useCallback(() => {
    const s = scroller.current;
    if (!s) return;
    const overflows = s.scrollWidth - s.clientWidth > 4;
    const atEnd = Math.abs(s.scrollLeft) + s.clientWidth >= s.scrollWidth - 4;
    setMore(overflows && !atEnd);
  }, []);

  useEffect(() => {
    sync();
    const s = scroller.current;
    s?.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    return () => { s?.removeEventListener("scroll", sync); window.removeEventListener("resize", sync); };
  }, [sync, f]);

  const rows = RACES.filter((r) => {
    if (f === "all") return true;
    if (f === "pod") return (r.oa !== null && r.oa <= 3) || (r.ag !== null && r.ag <= 3);
    return r.t === f;
  });

  const rank = (v: number | null) => {
    if (v === null) return <span className="t-dash">—</span>;
    return <span className={`rk ${v === 1 ? "rk-1" : v <= 3 ? "rk-3" : ""}`}>{v}</span>;
  };

  const btns: [F, string][] = [
    ["all", d.filters.all], ["Road", d.filters.road],
    ["Trail", d.filters.trail], ["pod", d.filters.pod],
  ];

  return (
    <>
      <div className="filters" role="group" aria-label={d.tag}>
        {btns.map(([k, label]) => (
          <button key={k} className="fbtn" aria-pressed={f === k} onClick={() => setF(k)}>{label}</button>
        ))}
      </div>

      <div ref={shell} className={`tshell${more ? " more" : ""}`}>
        <div className="swipe"><span>→</span> {d.swipe}</div>
        <div ref={scroller} className="tscroll">
          <table className="log">
            <caption className="sr-only">{d.sub}</caption>
            <thead>
              <tr>{d.th.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.n + r.d}>
                  <td>
                    <span className="t-name">{ar ? r.nA : r.n}</span>
                    <span className="t-org">{ar ? r.oA : r.o}</span>
                  </td>
                  <td className="t-num">{ar ? r.dA : r.d}</td>
                  <td><span className={`pill pill-${r.t.toLowerCase()}`}>{r.t === "Road" ? d.road : d.trail}</span></td>
                  <td className="t-num">{r.k} {d.km}</td>
                  <td className="t-time">{r.g ?? <span className="t-dash">—</span>}</td>
                  <td className="t-num">{r.e !== null ? `${r.e} ${d.m}` : <span className="t-dash">—</span>}</td>
                  <td>{rank(r.oa)}</td>
                  <td>{rank(r.ag)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="log-note">{d.note}</p>
    </>
  );
}
