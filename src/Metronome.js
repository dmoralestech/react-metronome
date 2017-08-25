import React from 'react';
import './Metronome.css'

const Metronome = () => {
    let bpm = 100;
    let playing = false;

    return (
        <div className="metronome">
            <div className="bpm-slider">
                <div>{bpm} BPM</div>
                <input
                    type="range"
                    min="60"
                    max="240"
                    value={bpm} />
            </div>
            <button>
                {playing ? 'Stop' : 'Start'}
            </button>
        </div>
    );
};

export default Metronome;