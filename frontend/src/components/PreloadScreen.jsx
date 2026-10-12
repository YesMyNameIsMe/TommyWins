'use client'
import { useTheme } from "@/context/themeContext";

export default function PreloadScreen({ progress, hidden }) {
  const {theme} = useTheme()

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        background: "#001D4A",
        color: "#fff",
        transition: "opacity 0.4s ease",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
        zIndex: 9999,
      }}
    >
      <img className="flex w-[clamp(100px,15%,400px)]" src={"/assets/general/walk_anim_dark.gif"}/>
      <div className="bg-[#00122c]" style={{ width: 200, height: 4, borderRadius: 2 }}>
        <div
          style={{
            width: `${Math.round(progress * 100)}%`,
            height: "100%",
            background: "#fff",
            borderRadius: 2,
            transition: "width 0.2s ease",
          }}
        />
      </div>
      <span>{Math.round(progress * 100)}%</span>
    </div>
  );
}