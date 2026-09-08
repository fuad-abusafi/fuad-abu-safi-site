"use client";
import { useEffect, useRef } from "react";
import { ELEV } from "@/lib/content";

/** Signature elevation ridgeline, drawn from the real race elevation data. */
export default function Ridge({ labels }: { labels: { petra: string; sea: string; aria: string; unit: string } }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const layRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svg = svgRef.current, lay = layRef.current;
    if (!svg || !lay) return;
    svg.innerHTML = ""; lay.innerHTML = "";

    const W = 1200, H = 240, base = H - 34, top = 26, max = 790;
    const pts = ELEV.map((v, i) => [(i / (ELEV.length - 1)) * W, base - (v / max) * (base - top)]);

    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[i + 1], mx = (x1 + x2) / 2;
      d += ` C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
    }
    const NS = "http://www.w3.org/2000/svg";
    const mk = (t: string, a: Record<string, string | number>) => {
      const el = document.createElementNS(NS, t);
      for (const k in a) el.setAttribute(k, String(a[k]));
      return el;
    };

    svg.appendChild(mk("path", { class: "ridge-fill", d: `${d} L${W},${base} L0,${base} Z` }));
    svg.appendChild(mk("line", { class: "ridge-base", x1: 0, y1: base, x2: W, y2: base }));
    const p = mk("path", { class: "ridge-path", d }) as SVGPathElement;
    svg.appendChild(p);

    const put = (px: number, py: number, txt: string, cls: string) => {
      const s = document.createElement("span");
      s.className = `rl ${cls}`;
      s.style.left = `${(px / W) * 100}%`;
      s.style.top = `${(py / H) * 100}%`;
      s.textContent = txt;
      lay.appendChild(s);
    };
    const dot = (px: number, py: number, r: number) =>
      svg.appendChild(mk("circle", { class: "ridge-pk", cx: px, cy: py, r }));

    const i790 = ELEV.indexOf(790), i722 = ELEV.indexOf(722), i553 = ELEV.indexOf(553);
    dot(pts[i790][0], pts[i790][1], 4); put(pts[i790][0], pts[i790][1] - 10, labels.petra, "rl-b");
    dot(pts[i722][0], pts[i722][1], 3); put(pts[i722][0], pts[i722][1] - 10, `722 ${labels.unit}`, "rl-sm");
    dot(pts[i553][0], pts[i553][1], 3); put(pts[i553][0], pts[i553][1] - 10, `553 ${labels.unit}`, "rl-sm");

    const sl = document.createElement("span");
    sl.className = "rl rl-base"; sl.textContent = labels.sea;
    sl.style.left = "0"; sl.style.top = `${(base / H) * 100}%`;
    lay.appendChild(sl);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const len = p.getTotalLength();
      p.style.strokeDasharray = String(len);
      p.style.strokeDashoffset = String(len);
      p.animate([{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
        { duration: 2200, easing: "cubic-bezier(.4,0,.2,1)", fill: "forwards" });
    }
  }, [labels]);

  return (
    <div className="ridge-plot">
      <svg ref={svgRef} className="ridge-svg" viewBox="0 0 1200 240"
           preserveAspectRatio="none" role="img" aria-label={labels.aria} />
      <div ref={layRef} className="ridge-labels" aria-hidden="true" />
    </div>
  );
}
