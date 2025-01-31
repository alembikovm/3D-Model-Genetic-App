import React, { useState } from "react";
import { ModelView } from "./components/ModelView/ModelView";
import { ProgressSlider } from "./components/ProgressSlider/ProgressSlider";
import Header from "./components/Header/Header";
import ZoomInIcon from "./assets/icons/icon L.svg?react";
import ZoomOutIcon from "./assets/icons/icon L-1.svg?react";
import CenterIcon from "./assets/icons/icon L-2.svg?react";
import CardioIcon from "./assets/icons/cardio_load.svg?react";
import UrologyIcon from "./assets/icons/urology.svg?react";

const DEFAULT_ZOOM = 1;
const MAX_ZOOM = 3

const App = () => {
    const [zoomLevel, setZoomLevel] = useState(DEFAULT_ZOOM); 
    const [progress, setProgress] = useState(50); 
    const [isCardioSelected, setIsCardioSelected] = useState(false);

    const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, MAX_ZOOM));
    const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, DEFAULT_ZOOM)); 
    const resetZoom = () => setZoomLevel(DEFAULT_ZOOM); 

    const handleCardioClick = () => {
        if (!isCardioSelected) {
            setZoomLevel(MAX_ZOOM)
            setIsCardioSelected(true)
            setProgress(100);
        } else {
            setZoomLevel(DEFAULT_ZOOM)
            setIsCardioSelected(false)
            setProgress(50);
        }
    }

    return (
        <div className="app-container">
            <Header />

            <main className="main-content">
                <aside className="sidebar">
                    <button className="bodypart-btn" onClick={handleCardioClick}>
                        <CardioIcon className="bodypart-icon" />
                        <span className="bodypart-icon-circle">+2</span>
                    </button>
                    <button className="bodypart-btn" disabled>
                        <UrologyIcon className="bodypart-icon" />
                    </button>
                </aside>

                <div className="model-area">
                    <ModelView zoomLevel={zoomLevel} progress={progress} isCardioSelected={isCardioSelected} />
                </div>

                <div className="bottom-card">
                    <p>
                        {isCardioSelected && <div className="text-points">+2</div>} More risks considered for your wellness
                    </p>

                    <ProgressSlider progress={progress} />

                    <button className="cta-btn">Order DNA Test</button>
                </div>

                <div className="zoom-panel">
                    <div className="zoom-inner">
                        <button className="icon-btn" onClick={zoomIn}>
                            <ZoomInIcon className="icon" />
                        </button>
                        <button className="icon-btn" onClick={zoomOut}>
                            <ZoomOutIcon className="icon" />
                        </button>
                    </div>
                    <button className="icon-btn" onClick={resetZoom}>
                        <CenterIcon className="icon" />
                    </button>
                </div>
            </main>
        </div>
    );
};

export default App;