import React from 'react';

interface ProgressSliderProps {
    progress: number;
}

export const ProgressSlider: React.FC<ProgressSliderProps> = ({ progress }) => {

    return (
        <div className="slider-container">
            <input
                type="range"
                min="0"
                max="100"
                value={progress}
                // onChange={(e) => onChangeProgress(Number(e.target.value))}
                className="custom-range"
                style={{
                    background: `linear-gradient(to right,rgb(39, 163, 194) ${progress}%, #e0e0e0 ${progress}%)`,
                }}
            />
            <span className="progress-text">{progress}%</span>
        </div>
    );
};
