import React from 'react';
import {Link} from 'react-router';

export default class HomePage extends React.Component {
    render() {
        return (
            <Link to={`details`} ><p>Index</p></Link>
        );
    }
}