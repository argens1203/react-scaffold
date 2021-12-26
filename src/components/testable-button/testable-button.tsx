import React, { useState } from "react";

export function TestableButton() {
    const [hovered, setHovered] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0);

    const onClick = () => {
        setCounter((prev) => prev + 1);
    };
    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {hovered ? "Hovering" : `Click me! Clicked ${counter} time(s)!`}
        </button>
    );
}
