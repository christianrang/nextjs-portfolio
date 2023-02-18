import { Bar } from "@/components/sorter/sorter";

type ToolbarProps = {
    setBars: React.Dispatch<React.SetStateAction<Bar[]>>;
    generateBars: (count: number) => Bar[];
    barCount: number;
};

const Toolbar = ({ setBars, generateBars, barCount }: ToolbarProps) => {
    return (
        <>
            <button
                onClick={() => {
                    setBars(generateBars(barCount));
                }}
            >
                Generate Bars
            </button>
        </>
    );
};

export default Toolbar;
