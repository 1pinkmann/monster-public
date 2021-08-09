import React from 'react'
import { zeroPad } from 'react-countdown'

import './timer.css'

export default function Timer({ days, hours, minutes, seconds }) {
    return (
        <div className="timer">
            <div className="timer__column">
                <input type="text" readOnly className="timer__input" value={zeroPad(days, 2)} />
                <div className="timer__text">Days</div>
            </div>
            <div className="timer__column">
                <input type="text" readOnly className="timer__input" value={zeroPad(hours, 2)} />
                <div className="timer__text">Hours</div>
            </div>
            <div className="timer__column">
                <input type="text" readOnly className="timer__input" value={zeroPad(minutes, 2)} />
                <div className="timer__text">Minutes</div>
            </div>
            <div className="timer__column">
                <input type="text" readOnly className="timer__input" value={zeroPad(seconds, 2)} />
                <div className="timer__text">Seconds</div>
            </div>
        </div>
    )
}
