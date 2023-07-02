import * as React from 'react';

export default function Footer() {
    return (
        <div className="footer-container">
            <br/><br/>
            {new Date().getFullYear()} &copy; All rights reserved
        </div>
    );
}