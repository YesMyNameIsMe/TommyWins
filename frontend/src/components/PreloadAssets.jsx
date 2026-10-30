'use client'

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    const finish = () => {
      img.onload = null;
      img.onerror = null;
      resolve();
    };

    img.onload = finish;
    img.onerror = finish;
    img.src = src;

    if (img.complete) finish();
  });

  const loadVideo = (src, timeout = 10000) =>
  new Promise((resolve) => {
    const video = document.createElement("video");

    const finish = () => {
      clearTimeout(timer);
      resolve();
    };

    // Safety net: some browsers never fire canplaythrough (e.g. iOS ignores
    // preload), and large files can be slow. Don't hold the loader hostage.
    const timer = setTimeout(finish, timeout);

    video.preload = "auto";
    video.muted = true;
    video.addEventListener("canplaythrough", finish, { once: true });
    video.addEventListener("error", finish, { once: true }); // unsupported format or 404
    video.src = src;
    video.load();
  });

export function preloadAssets({ images = [], videos = []}, onProgress) {
  const tasks = [
    ...images.map(loadImage),
    ...videos.map((src) => loadVideo(src)),
    document.fonts.ready, // from the next/font setup
  ];
  let done = 0;

  if (tasks.length === 0) {
    onProgress?.(1);
    return Promise.resolve();
  }

  return Promise.all(
    tasks.map((task) =>
      task.then(() => {
        done += 1;
        onProgress?.(done / tasks.length);
      })
    )
  );
}