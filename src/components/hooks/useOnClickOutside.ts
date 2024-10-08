import React from "react";

// Information https://usehooks.com/useOnClickOutside/
function useOnClickOutside(ref, handler) {
    React.useEffect(
        () => {
            const listener = (event) => {
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler],
    );
}

export default useOnClickOutside;
