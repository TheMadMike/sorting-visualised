import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Canvas from './Canvas';

afterEach(cleanup);


describe('<Canvas>', () => {
    test('renders properly', () => {
        const { queryByRole } = render(<Canvas />);
        expect(queryByRole('canvas')).toBeTruthy();    
    });
    test('adjusts itself to the target device screen size', () => {
        const { queryByRole } = render(<Canvas scale={0.5}/>);
        const canvas: HTMLCanvasElement = queryByRole('canvas') as HTMLCanvasElement;
        expect(canvas.width).toBe(0.5*window.innerWidth);
        expect(canvas.height).toBe(0.5*window.innerHeight);
    });
});
