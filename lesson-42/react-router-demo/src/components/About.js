import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2>Це сторінка про нас</h2>
            <Link to="team">Наша команда</Link>
            <Outlet />
        </div>
    );
};

export default About;