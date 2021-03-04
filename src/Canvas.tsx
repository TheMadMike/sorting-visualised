import React, { useLayoutEffect, useState } from 'react';

const useWindowSize = () : [number, number] => {
    const [dimensions, setDimensions] = useState([0, 0]);
    useLayoutEffect(() => {
        setDimensions([window.innerWidth, window.innerHeight]);
    }, []);
    return [dimensions[0], dimensions[1]];
};

const Canvas = React.forwardRef((props: { scale?: number }, ref: any) => {
    const scale: number = props.scale ? props.scale : 0.5;
    const [windowWidth, windowHeight] = useWindowSize();

    return (
        <canvas ref={ref} data-testid="canvas" width={windowWidth*scale} height={windowHeight*scale}>
        </canvas>
    );
});

export default Canvas;