import React, { Component, useEffect, useState } from 'react';
const CountdownBannerTimer = () => {
    // State for countdown values
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    useEffect(() => {
        // Target elements by id using useRef
        const b_daysElement = document.getElementById("b-days");
        const b_hoursElement = document.getElementById("b-hours");
        const b_minutesElement = document.getElementById("b-minutes");
        const b_secondsElement = document.getElementById("b-seconds");

        // Set the end time for the countdown (e.g., 7 days from now)
        const b_endTime = new Date();
        b_endTime.setDate(b_endTime.getDate() + 7);
        b_endTime.setHours(b_endTime.getHours() + 0);
        b_endTime.setMinutes(b_endTime.getMinutes() + 0);
        b_endTime.setSeconds(b_endTime.getSeconds() + 0);

        // Update countdown every second
        const b_countdownInterval = setInterval(updateCountdown, 1000);

        function updateCountdown() {
            const currentTime = new Date();
            const timeRemaining = b_endTime - currentTime;

            if (timeRemaining <= 0) {
                // Countdown has ended
                clearInterval(b_countdownInterval);
                setDays('00');
                setHours('00');
                setMinutes('00');
                setSeconds('00');
            } else {
                // Calculate remaining days, hours, minutes, and seconds
                const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                // Update state values
                setDays(daysRemaining.toString().padStart(2, "0"));
                setHours(hoursRemaining.toString().padStart(2, "0"));
                setMinutes(minutesRemaining.toString().padStart(2, "0"));
                setSeconds(secondsRemaining.toString().padStart(2, "0"));
            }
        }

        // Cleanup on component unmount
        return () => clearInterval(b_countdownInterval);
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    return (
        <div className="todays-title">
        <h1>Flash Sales</h1>
        <div className="todays-time">
          <div className="todays-time__item">
            <h4>Days</h4>
            <span id="days">{days}</span>
          </div>
          <p>:</p>
          <div className="todays-time__item">
            <h4>Hours</h4>
            <span id="hours">{hours}</span>
          </div>
          <p>:</p>
          <div className="todays-time__item">
            <h4>minutes</h4>
            <span id="minutes">{minutes}</span>
          </div>
          <p>:</p>
          <div className="todays-time__item">
            <h4>Seconds</h4>
            <span id="seconds">{seconds}</span>
          </div>
        </div>
      </div>
    );
};
export default CountdownBannerTimer;