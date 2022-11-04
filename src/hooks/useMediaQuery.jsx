import { useState, useEffect } from "react";

// determines if you match particular breakpoint of media screensize
// Alerts if current screen size is for example higher/lower than what max/min width was set to

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        console.log("activated useEffect")
        const media = window.matchMedia(query);
        if (media.matches !== matches){
            setMatches(media.matches);
        }
        console.log(media)

        const listener = () => setMatches(media.matches);
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;