import React from 'react'

import gatsby from '../assets/images/gatsby.png'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                {/* <li><a href="https://twitter.com/charl28th/" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li> */}
                <li><a href="#" className="icon alt fa-wechat"><span className="label">Wechat</span></a></li>
                <li><a href="https://www.instagram.com/haijing.28/" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="https://github.com/haijing28" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/haijing88/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy;&nbsp;Design & Develop by <a href="http://designlens.info"> Haijing Oceanstill</a> &#9829; &amp;
                with <a href="https://www.gatsbyjs.org/" className="icon"><span ><img width={10} height={10} src={gatsby}></img></span></a></li>
            </ul>
        </div>
    </footer>
)

export default Footer