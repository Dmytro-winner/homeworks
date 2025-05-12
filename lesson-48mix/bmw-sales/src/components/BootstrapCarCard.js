import React from 'react';

export default function BootstrapCarCard() {
    return (
        <div className="card m-3" style={{ width: '18rem' }}>
            <img src="https://cdn.bmwusa.com/img/BMW_M3_Sedan.png" className="card-img-top" alt="BMW M3" />
            <div className="card-body">
                <h5 className="card-title">BMW M3</h5>
                <p className="card-text">Швидкість, стиль, якість — все в одному.</p>
                <a href="#" className="btn btn-primary">Детальніше</a>
            </div>
        </div>
    );
}