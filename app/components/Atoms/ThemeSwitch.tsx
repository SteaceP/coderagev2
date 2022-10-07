import { Switch } from "@material-tailwind/react";

import { Theme, useTheme } from "~/theme/theme-provider";

export default function ThemeSwitch() {
  const [, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return <Switch defaultChecked color="blue" onChange={toggleTheme} />;
}

// import { createContext, useContext, useState, useEffect, useRef } from "react";
// import type { Dispatch, ReactNode, SetStateAction } from "react";
// import { useFetcher } from "@remix-run/react";
// import { useTheme } from "./theme-provider";

// export function ThemeToggle() {
//   const [theme, setTheme] = useTheme();

//   const toggleTheme = () => {
//     if (theme === Theme.DARK) {
//       setTheme(Theme.LIGHT);
//     } else {
//       setTheme(Theme.DARK);
//     }
//   };

//   return (
//     <button className={styles.toggle} onClick={toggleTheme}>
//       {theme === Theme.DARK ? "🌞" : "🌙"}
//     </button>
//   );
// }
