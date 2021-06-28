import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

function CardInfo(props) {

    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <animated.div className="g-card-info hero-text" style={style}>
            <Link className="hero-text" to={props.link}>
                <p className="g-card-title hero-text">{props.title}</p>
            </Link>
            <p className="g-card-sub-title hero-text">{props.subTitle}</p>
        </animated.div>
    );
}

export default CardInfo;