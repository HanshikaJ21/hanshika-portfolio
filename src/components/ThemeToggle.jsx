import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: "18px"
      }}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
