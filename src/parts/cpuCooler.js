import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function cpuCooler() {
    return (
        <>
            <h1 className="buildersHeader">CPU COOLER</h1>
            <Link to="/buildersGuide">
              <button>
                <span>Go Back</span>
              </button>
            </Link>
        </>
    );
}
