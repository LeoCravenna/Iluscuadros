import React, { Component } from 'react'
import iconMenu from '../../iconMenu.svg';

class MenuWidget extends Component {
    render() {
        return (
            <div>
                <img src={iconMenu} alt="iconMenu" />
            </div>
        )
    }
}

export default MenuWidget