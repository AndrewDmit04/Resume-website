import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import config from './particles/particlesSetup'
import "./styles/landing.css"

const App = () => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        container.canvas._originalStyle.cssText = "width: 50%; height: 100%; position: absolute; z-index: 0; top: 0px; left: 0px; pointer-events: initial;"

    }, []);
    return(
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={config}
                canvasClassName="canvas"
            />
    )
}

export default App