import React, { useState } from 'react';

const useWindowSize = (scale: number) : [number, number] => {
    return [0, 0];
};

const Canvas = (props: any) => {
    const scale: number = props.scale ? props.scale : 0.5;
    const [width, height] = useWindowSize(scale);

    return (
        <canvas role="canvas" width={width} height={height}>
            
        </canvas>
    );
};

export default Canvas;