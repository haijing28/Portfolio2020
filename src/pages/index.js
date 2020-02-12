import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import love01 from '../assets/images/love01.jpg'
import love02 from '../assets/images/love02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import pic07 from '../assets/images/pic06.jpg'
import TrendResearch from '../assets/images/pic06.jpg'

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
                    title="Designpholio"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

       

                <div id="main">
                    <section id="one" className="tiles">

                     
                       <article style={{backgroundImage: `url(${love01})`}}>
                            <header className="major">
                                <h3>Love+</h3>
                                <p>hardware as a service, powered by electrolux</p>
                            </header>
                            <Link to="/love+" className="link primary"></Link>
                        </article> 

                   
                      
                      <article style={{backgroundImage: `url(${love02})`}}>
                            <header className="major">
                                <h3>Smartify</h3>
                                <p>Midea Product Innovation for Millennial Life Style</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Colmo UX</h3>
                                <p> Premium Appliance UX Strategy & Design</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>


                          <article style={{backgroundImage: `url(${TrendResearch})`}}>
                            <header className="major">
                                <h3>Midea Trend Research</h3>
                                <p>Design Trend HandBook for Midea Group</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                             <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Spacechat</h3>
                                <p> Location Based Service </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Wish Message</h3>
                                <p>MFA Design & Technology Thesis</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Honeycomb</h3>
                                <p>Product Innovation @Mozilla NYC Lab </p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>

                         <article style={{backgroundImage: `url(${pic07})`}}>
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