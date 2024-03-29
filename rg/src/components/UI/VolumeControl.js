// src/components/VolumeControl.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMute } from '../../features/audio/audioSlice';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const VolumeControl = () => {
    const dispatch = useDispatch();
    const muted = useSelector((state) => state.audio.muted);
    const Icon = muted ? FaVolumeMute : FaVolumeUp;

    const handleToggleSound = () => {
        dispatch(toggleMute());
    };

    return (
        <div className="volume-control" onClick={handleToggleSound}>
            <Icon size="2em" />
        </div>
    );
};

export default VolumeControl;
