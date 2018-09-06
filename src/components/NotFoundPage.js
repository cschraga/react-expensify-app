import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <p>File not found bitch.</p>
        <p><Link to= "/">Go Home</Link></p>
    </div>
);

export default NotFoundPage;