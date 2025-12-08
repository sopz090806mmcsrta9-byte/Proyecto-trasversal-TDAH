import { createContext, useState } from "react";

export const FocusContext = createContext();

export function FocusProvider({ children }) {
  const [focus, setFocus] = useState(false);

  return (
    <FocusContext.Provider value={{ focus, setFocus }}>
      <div className={focus ? "focus-mode" : ""}>
        {children}
      </div>
    </FocusContext.Provider>
  );
}
