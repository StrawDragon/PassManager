import ClassNames from './style.less';
import React from 'react';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className={ClassNames['page']}>
                <div className={ClassNames['side-panel']}></div>
                <div className={ClassNames['content']}></div>
            </div>
        );
    }
}