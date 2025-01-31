import React, { useState } from 'react';

interface StateControlButtonsProps {
    isZoomed: boolean;
    toggleZoom: () => void;
}

export const StateControlButtons: React.FC<StateControlButtonsProps> = ({ isZoomed, toggleZoom }) => {
    console.log(isZoomed ? 'Zoomed In' : 'Zoomed Out');

    return (
        <div className="state-control-buttons">
            <button onClick={toggleZoom}>{isZoomed ? 'Zoom Out' : 'Zoom In'}</button>
        </div>
    );
};
