'use client'
import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";

// Define a type for individual word data
interface Word {
    text: string;
    value: number;
}

// Define props for the WordCloud component
interface WordCloudProps {
    data: Word[];
    width?: number;
    height?: number;
}

const WordCloud: React.FC<WordCloudProps> = ({ data, width = 800, height = 600 }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [words, setWords] = useState<any[]>([]);

    useEffect(() => {
        if (data.length > 0) {
            const layout = cloud()
                .size([width, height])
                .words(data.map((d) => ({ ...d, size: d.value })))
                .padding(5)
                .rotate(() => (Math.random() > 0.5 ? 90 : 0))
                .fontSize((d: any) => d.size)
                .on("end", (generatedWords) => setWords(generatedWords));

            layout.start();
        }
    }, [data, width, height]);

    useEffect(() => {
        if (words.length > 0) {
            const svg = d3.select(svgRef.current);

            svg.selectAll("*").remove();

            svg
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", `translate(${width / 2},${height / 2})`)
                .selectAll("text")
                .data(words)
                .enter()
                .append("text")
                .style("font-size", (d) => `${d.size}px`)
                .style("font-family", "Arial")
                .style("fill", (_, i) => d3.schemeCategory10[i % 10])
                .attr("text-anchor", "middle")
                .attr("transform", (d) => `translate(${d.x}, ${d.y}) rotate(${d.rotate})`)
                .text((d) => d.text);
        }
    }, [words, width, height]);

    return <svg ref={svgRef}></svg>;
};

// export default WordCloud;
// import WordCloud from '../components/WordCloud';

const HomePage = () => {
    const wordData = [
        { text: 'Next.js', value: 50 },
        { text: 'React', value: 40 },
        { text: 'Server-side Rendering', value: 30 },
        { text: 'Components', value: 25 },
        { text: 'API Routes', value: 35 },
        { text: 'Deployment', value: 20 },
        { text: 'Vercel', value: 5 },
    ];

    return (
        <div>
            <h1>Word Cloud Example</h1>
            <WordCloud data={wordData} />
        </div>
    );
};

export default HomePage;