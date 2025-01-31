import React, {  } from "react";
import { Canvas } from "@react-three/fiber";
import { BodyModel } from "./components/BodyModel/BodyModel";
import { CardioOverlay } from "./components/CardioOverlay/CardioOverlay";

interface ModelViewProps {
    zoomLevel: number;
    progress: number;
    isCardioSelected: boolean;
}

export const ModelView: React.FC<ModelViewProps> = ({ zoomLevel, isCardioSelected }) => {
    return (
        <div className="model-view">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <BodyModel zoomLevel={zoomLevel} isCardioSelected={isCardioSelected} />
                {isCardioSelected && <CardioOverlay />}
            </Canvas>
        </div>
    );
};
