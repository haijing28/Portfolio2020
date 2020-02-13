import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import love from '../assets/images/love.png'
import smty from '../assets/images/love02.jpg'
import colm from '../assets/images/pic03.jpg'
import trnd from '../assets/images/pic04.jpg'
import spch from '../assets/images/pic05.jpg'
import wsmg from '../assets/images/pic06.jpg'
import hncb from '../assets/images/pic06.jpg'
import spyt from '../assets/images/pic06.jpg'

         //Thumbnails 
               //loveplus
               //Midea,smart-controller
               //Midea,colmo UX 
               //MideaTrendResearch
               //Spacechat
               //WishMessage
               //HoneyComb           
               //Sprayit


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="DesignLens"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner/>

       

                <div id="main">
                    <section id="one" className="tiles">

                     
                                <article style={{backgroundImage: `url(${love})`}}>
                                    <header className="major">
                                        <h3>Love+</h3>
                                        <p>hardware as a service, powered by electrolux</p>
                                    </header>
                                    <Link to="/love+" className="link primary"></Link>
                                </article> 

                           
                              
                                <article style={{backgroundImage: `url(${smty})`}}>
                                    <header className="major">
                                        <h3>Smartify</h3>
                                        <p>Midea Product Innovation for Millennial Life Style</p>
                                    </header>
                                    <Link to="/landing" className="link primary"></Link>
                                </article>


                                <article style={{backgroundImage: `url(${colm})`}}>
                                    <header className="major">
                                        <h3>Colmo UX</h3>
                                        <p> Premium Appliance UX Strategy & Design</p>
                                    </header>
                                    <Link to="/landing" className="link primary"></Link>
                                </article>


                                <article style={{backgroundImage: `url(${trnd})`}}>
                                    <header className="major">
                                        <h3>Midea Trend Research</h3>
                                        <p>Design Trend HandBook for Midea Group</p>
                                    </header>
                                    <Link to="/landing" className="link primary"></Link>
                                </article>


                                <article style={{backgroundImage: `url(${spch})`}}>
                                    <header className="major">
                                        <h3>Spacechat</h3>
                                        <p> Location Based Service </p>
                                    </header>
                                    <Link to="/landing" className="link primary"></Link>
                                </article>


                                <article style={{backgroundImage: `url(${wsmg})`}}>
                                    <header className="major">
                                        <h3>Wish Message</h3>
                                        <p>MFA Design & Technology Thesis</p>
                                    </header>
                                    <Link to="/landing" className="link primary"></Link>
                                </article>


                                <article style={{backgroundImage: `url(${hncb})`}}>
                                    <header className="major">
                                        <h3>Honeycomb</h3>
                                        <p>Product Innovation @Mozilla NYC Lab </p>
                                    </header>
                                    <Link to="/landing" className="link primary"></Link>
                                </article>


                                 <article style={{backgroundImage: `url(${spyt})`}}>
                                    <header className="major">
                                        <h3>Sprayit</h3>
                                        <p> Real Time Collaborative Doodling Tool </p>
                                    </header>  
                                    <Link to="/landing" className="link primary"></Link>
                                </article>

                    </section>




                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                            <p> Experience & Service Designer.
                            Implement sustainable values among products, users and reshaping experience for our better humanity with compassion, sense of aesthetics, humor. 
Knowledges in science and culture in hybrids.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">View All</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex