import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

const   useColorMode = (): [string, (value: string) => void] => {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensure hydration safety
    const className = "dark";
    const htmlClass = document.documentElement.classList;

    if (colorMode === "dark") {
      htmlClass.add(className);
    } else {
      htmlClass.remove(className);
    }
  }, [colorMode]);

  return [mounted ? colorMode : "light", setColorMode]; // Prevent SSR mismatch
};

export default useColorMode;
