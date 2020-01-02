import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing"> Love+ Design</Link></li>
                     <li><Link onClick={props.onToggleMenu} to="/landing"> Love+ Insights</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Smartify</Link></li>
                  <li><Link onClick={props.onToggleMenu} to="/generic">Trend Research II</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Trend Research I</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Spacechat</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Wish Message</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">SprayIt</Link></li>
                 <li><Link onClick={props.onToggleMenu} to="/elements">Honeycomb</Link></li>
                 <li><Link onClick={props.onToggleMenu} to="/elements">WeatherCessories</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Moodie</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
