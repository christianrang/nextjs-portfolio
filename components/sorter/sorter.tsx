import React, { useState, useEffect } from "react";

type Bar = {
    color: string;
    size: number;
};

const barStyle = {
    margin: "2px",
};

const divStyle = {
    display: "flex",
    width: "600px",
};

const generateBars = (count: number) => {
    const max = 100;

    const bars = [];

    for (let i = 0; i < count; i++) {
        const size = Math.floor(Math.random() * max);
        bars.push({
            size: size,
            color: "white",
        });
    }

    return bars;
};

const sortBars = (
    bars: Bar[],
    setBars: React.Dispatch<
        React.SetStateAction<
            {
                size: number;
                color: string;
            }[]
        >
    >
) => {
    const newBars = bars.map((bar: Bar) => {
        return bar;
    });

    if (newBars[0].color === "white") {
        newBars[0].color = "green";
    } else {
        newBars[0].color = "white";
    }
};

export default function Sorter() {
    const [bars, setBars] = useState(generateBars(20));
    const [sort, setSort] = useState(false);

    sortBars(bars, setBars);

    return (
        <>
            <div style={divStyle}>
                {bars.map(({ size, color }, index) => (
                    <hr
                        key={index}
                        style={barStyle}
                        color={color}
                        width="10"
                        size={String(size)}
                    />
                ))}
                <button
                    onClick={() => {
                        setBars(generateBars(20));
                    }}
                >
                    Generate Bars
                </button>
            </div>
        </>
    );
}
