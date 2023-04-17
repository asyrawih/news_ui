import { useEffect, useState } from "react";

export enum Query {
  xs = "(max-width: 576px)",
  sm = "(max-width: 768px)",
  md = "(max-width: 992px)",
  lg = "(max-width: 1200px)",
  xl = "(max-width: 1400px)",
}

type MediaQuery = {
  query: string
}

export const useMediaQuery = (config: MediaQuery) => {
  const { query } = config;
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);


    const handleMediaQueryChanges = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Initial Init
    setMatches(mediaQuery.matches)

    mediaQuery.addEventListener("change", handleMediaQueryChanges)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChanges)
    }
  }, [query])

  return matches
}
