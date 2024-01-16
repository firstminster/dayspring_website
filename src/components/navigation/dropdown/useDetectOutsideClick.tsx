import { useState, useEffect } from "react";

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const useDetectOutsideClick = (el: any, initialState: any) => {
    const [isActive, setIsActive] = useState(initialState);

    useEffect(() => {
        const pageClickEvent = (e: { target: any; }) => {
            //   console.log(el.current.contains(e.target));
            // If the active element exists and is clicked outside of
            if (el.current !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };

        // If the item is active (ie open) then listen for clicks outside
        if (isActive) {
            window.addEventListener("click", pageClickEvent);
        }

        return () => {
            window.removeEventListener("click", pageClickEvent);
        };
    }, [isActive, el]);

    return [isActive, setIsActive];
};
