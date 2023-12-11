import React from 'react';
import './loader.css';

function Loader() {
    return (
        <div className="loader">
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;