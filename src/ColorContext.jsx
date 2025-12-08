import { createContext, useState } from "react";

export const ColorContext = createContext();

export function ColorProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ColorContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ColorContext.Provider>
  );
}
