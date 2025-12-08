import { createContext, useState } from "react";

export const ReadingContext = createContext();

export function ReadingProvider({ children }) {
  const [readingMode, setReadingMode] = useState(false);

  return (
    <ReadingContext.Provider value={{ readingMode, setReadingMode }}>
      <div className={readingMode ? "reading-mode" : ""}>
        {children}
      </div>
    </ReadingContext.Provider>
  );
}
