import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
     
                <li><Link onClick={props.onToggleMenu} to="/love+"> Love+ </Link></li>                 
                <li><Link onClick={props.onToggleMenu} to="/smartify">Smartify</Link></li>
                  <li><Link onClick={props.onToggleMenu} to="/trend">Trend Research</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/spacechat">Spacechat</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/wishmessage">Wish Message</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/sprayit">SprayIt</Link></li>
                 <li><Link onClick={props.onToggleMenu} to="/honeycomb">Honeycomb</Link></li>

            </ul>
      
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
