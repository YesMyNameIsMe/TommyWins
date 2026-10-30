'use client'

import { useEffect, useState } from "react";
import { preloadAssets } from "./PreloadAssets";

export function usePreloader(assets, minDuration = 600) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const minWait = new Promise((r) => setTimeout(r, minDuration)); // avoids a jarring flash

    Promise.all([preloadAssets(assets, (p) => !cancelled && setProgress(p)), minWait]).then(
      () => !cancelled && setReady(true)
    );

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { progress, ready };
}