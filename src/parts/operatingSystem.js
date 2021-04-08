import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function operatingSystem() {
    return (
        <>
            <h1 className="buildersHeader">operatingSystem</h1>
            <Link to="/buildersGuide">
              <button>
                <span>Go Back</span>
              </button>
            </Link>
        </>
    );
}
