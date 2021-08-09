import React from 'react'
import { InlineWidget } from 'react-calendly';
import './popup.css';

let styles = {
    minWidth: '100%',
    height: '100%'
}

export default function Popup({setShowForm}) {
    
    function closePopup() {
        setShowForm(false);
    }

    return (
        <div className="popup">
            <button className="popup__close" onClick={closePopup}></button>
            <InlineWidget styles={styles} url='https://calendly.com/monstereducation/introduction-call-public-speaking-life-skills' />
        </div>
    )
}
