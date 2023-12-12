import React, { useRef, useEffect } from 'react';
import createGlobe from 'cobe';
const Globe = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;
        if (canvasRef.current) {
            let width = 0;
            const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth)
            window.addEventListener('resize', onResize)
            onResize()
            const globe = createGlobe(canvasRef.current, {
                devicePixelRatio: 2,
                width: width * 2,
                height: width * 2 * 0.4,
                phi: 0,
                theta: 0,
                dark: 1,
                diffuse: 1.2,
                mapSamples: 16000,
                mapBrightness: 6,
                baseColor: [0.3, 0.3, 0.3],
                markerColor: [0.1, 0.8, 1],
                glowColor: [1, 1, 1],
                markers: [
                    { location: [39.0291678, 125.5862294], size: 0.04 },
                    { location: [50.80940011, 19.0403719], size: 0.04 },
                    { location: [39.9390304, 116.2326555], size: 0.04 },
                    { location: [48.6040185, 37.9690239], size: 0.04 },
                    { location: [31.5017034, 34.4571027], size: 0.04 },
                ],
                onRender: (state) => {
                    state.phi = phi;
                    phi += 0.01;
                    state.width = width * 2
                    state.height = width * 2 * 0.6
                }
            });

            return () => globe.destroy();
        }
    }, []);
    return (
        <>   <canvas
            ref={canvasRef}
            style={{
                width: '100%',
                height: '100%',
                contain: 'layout paint size',
                opacity: 1,
                transition: 'opacity 1s ease',
            }}
        /></>
    )
}
export default Globe;