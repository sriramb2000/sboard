import React, { useState, useEffect, useRef } from 'react';
import Sound from 'react-sound';
import '../Styles/Buttons.css';

export default function SoundSquare(props) {
    const [loop, setLoop] = useState(false);
    const [playStatus, setPlayStatus] = useState(Sound.status.STOPPED);
    const [sound, setSound] = useState(null);
    const [styling, setStyling] = useState(null);

    const togglePlay = () => {
        console.log('clicked');
        let nextState = (playStatus == Sound.status.STOPPED) ? Sound.status.PLAYING : Sound.status.STOPPED;
        setPlayStatus(nextState);
    }

    const play = (e) => {
        sound.play();
        if (e.shiftKey) {
            toggleLoop();
        }
        if (e.shiftKey && e.altKey) {
            console.log("clickey");
        }
        
    }

    const toggleLoop = () => {
        setLoop(!loop);
        if (!loop) {
            setStyling("active btn rounded "+props.color);
        } else {
            setStyling("btn rounded "+props.color);
        }
    }

    useEffect(() => {
        if (!styling && props.color) {
            setStyling("btn rounded "+props.color);
        }
    });


    return (
        <div onClick={play}>
            <a className={styling}></a>
            <audio ref={(val) => setSound(val)}
                loop={loop}
            >
                <source src={props.soundUrl} type="audio/mpeg" />
            </audio>
        </div>
    );
}