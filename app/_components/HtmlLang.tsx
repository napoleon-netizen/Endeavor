"use client";

import { useEffect } from "react";

export default function HtmlLang({ lang, dir }: { lang: string; dir: "ltr" | "rtl" }) {
  useEffect(() => {
    const el = document.documentElement;
    const prev = { lang: el.lang, dir: el.dir };
    el.lang = lang;
    el.dir = dir;
    return () => {
      el.lang = prev.lang || "en";
      el.dir = prev.dir || "ltr";
    };
  }, [lang, dir]);
  return null;
}
