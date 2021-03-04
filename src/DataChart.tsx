import { useEffect, useRef} from "react";
import Canvas from './Canvas';

const DataChart = (props: {dataSet: number[]}) => {
    const canvasRef = useRef<HTMLCanvasElement>(document.createElement('canvas'));

    useEffect(() => {
        setTimeout(() => {
            const {width, height} = canvasRef.current.getBoundingClientRect();
            const ctx = canvasRef.current.getContext('2d') as CanvasRenderingContext2D;
            
            const maxValue: number = Math.max(...props.dataSet);
            const barWidth: number = width/props.dataSet.length;
            
            ctx.fillStyle = 'red';
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;

            ctx.clearRect(0, 0, width, height);

            for(let i = 0; i < props.dataSet.length; ++i) {
                let barHeight = height*(props.dataSet[i]/maxValue);    
                
                ctx.fillRect(i*barWidth, height-barHeight, barWidth, barHeight);
                ctx.strokeRect(i*barWidth, height-barHeight, barWidth, barHeight);    
            }
        }, 10);
    }, [props.dataSet]);

    return (
        <Canvas ref={canvasRef} />
    );
};

export default DataChart;