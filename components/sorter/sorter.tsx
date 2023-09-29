import React, { useState, useEffect } from "react";
import Toolbar from "@/components/sorter/toolbar";

type Bar = {
    color: string;
    size: number;
};

const divStyle = {
    display: "inline-flex",
    width: "600px",
};

const generateBars = (count: number): Bar[] => {
    const max = 1000;

    const bars: Bar[] = [];

    for (let i = 0; i < count; i++) {
        const size = Math.floor(Math.random() * max);
        bars.push({
            size: size,
            color: "white",
        });
    }

    return bars;
};

type DispatchItem = (
    bars: Bar[],
    setBars: React.Dispatch<
        React.SetStateAction<
            {
                size: number;
                color: string;
            }[]
        >
    >
) => void;

const toggleColor = (
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

    switch (newBars[0].color) {
        case "white":
            newBars[0].color = "green";
            break;
        case "green":
            newBars[0].color = "white";
            break;
    }

    setBars(newBars);
};

const switchFirstAndLast = (
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

    const lastIndex = newBars.length - 1

    let prev = newBars[0]
    newBars[0] = newBars[lastIndex]
    newBars[lastIndex] = prev

    setBars(newBars);
};

var queue: DispatchItem[] = [
    switchFirstAndLast,
    switchFirstAndLast,
    switchFirstAndLast,
    switchFirstAndLast,
    switchFirstAndLast,
    switchFirstAndLast,
    toggleColor,
];

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
    let func = queue.pop();
    if (func !== undefined) {
        func(bars, setBars);
    }
};

export default function Sorter() {
    const [barCount, setBarCount] = useState<number>(10);
    const [bars, setBars] = useState<Bar[]>(generateBars(barCount));
    const [sort, setSort] = useState<boolean>(false);

    const [currentWidth, setCurrentWidth] = useState<number>(0);

    const squareRef = React.useRef<HTMLDivElement>(null);


    const delayInMs = 1000 * 2;

    useEffect(() => {
        if (squareRef.current) {
            setCurrentWidth(squareRef.current.getBoundingClientRect().width)
        }
        const interval = setInterval(() => {
            sortBars(bars, setBars);
        }, delayInMs);
        return () => {
            clearInterval(interval);
        };
    });

    return (
        <>
            <h1>Sorting Algorithm Visualizer</h1>
            <Toolbar
                setBars={setBars}
                generateBars={generateBars}
                barCount={barCount}
            />
            <div style={divStyle} ref={squareRef}>
                {bars.map(({ size, color }, index) => (
                    <hr
                        key={index}
                        style={{
                            height: size,
                            width: currentWidth / barCount,
                            margin: '2px',
                        }}
                        color={color}
                    />
                ))}
                <button onClick={() => sortBars(bars, setBars)}>Sort</button>
            </div>
        </>
    );
}

export type { Bar };
