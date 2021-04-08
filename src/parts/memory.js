import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function memory() {
    return (
        <>
            <h1 className="buildersHeader">memory</h1>
            <Link to="/buildersGuide">
              <button>
                <span>Go Back</span>
              </button>
            </Link>
        </>
    );
}
