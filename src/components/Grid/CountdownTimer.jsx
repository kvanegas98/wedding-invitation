import React, { useState, useEffect } from 'react';
import AnimatedSection from '../Animations/Animation';
const CountdownTimer = () => {
    const targetDate = new Date('September 7, 2024 16:00:00').getTime();

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000)
            };
        }

        return timeLeft;
    }

    return (
        <div>
             <AnimatedSection animationClass="movement">
            <section className="couple-section" data-scroll-index="1">
                <div className="row">
                    <div className="textobiblico">
                        <h3>Ya falta poco</h3>
                        <p>7 de Septiembre del 2024</p>
                        {timeLeft.days !== undefined ? (
                <div className="countdown">
                    <div>
                        <p>{timeLeft.days}</p>
                        <p className="label">Días</p>
                    </div>
                    <div>
                        <p>{timeLeft.hours}</p>
                        <p className="label">Horas</p>
                    </div>
                    <div>
                        <p>{timeLeft.minutes}</p>
                        <p className="label">Minutos</p>
                    </div>
                    <div>
                        <p>{timeLeft.seconds}</p>
                        <p className="label">Segundos</p>
                    </div>
                </div>
            ) : (
                <p></p>
            )}
                    </div>
                </div>
            </section>
            </AnimatedSection>
        </div>
    );
}

export default CountdownTimer;
