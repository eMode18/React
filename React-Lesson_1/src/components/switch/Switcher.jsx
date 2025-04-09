import { useState } from "react";

const Switcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div>
      {isDarkMode ? <span>Dark</span> : <span>Light</span>}
      <br />

      <input type="text" key={isDarkMode ? "dark" : "light"} />
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle</button>
    </div>
  );
};

export default Switcher;
