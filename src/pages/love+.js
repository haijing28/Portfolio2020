import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import love1 from '../assets/images/love/Love1.png'
import love2 from '../assets/images/love/Love2.png'
import love3 from '../assets/images/love/Love3.png'
import love4 from '../assets/images/love/Love4.png'


const Love = (props) => (

    <Layout>

        <Helmet>
            <title> Love+ </title>
            <meta name="description" content="Love+"/>
        </Helmet>

        <BannerLanding/>
        
        <div id="main">


            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2> Love+ </h2>
                    </header>
                    <p>Hardware as a service, for new caregivers who want to enrich the wellbeing life of their new retiree parents. Love+ provides a total wellbeing solution including customizable data-driven contents, gamified activities, and IoT appliances with AI analysis that synthesis mental and physical care program for parents in a single platform.
                    </p>
                </div>
            </section>


            <section id="two" className="spotlights">


                        <section>
                            
                            <Link to="/love+" className="image">
                                <img src={love1} alt="pca"/>
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3> Parents-Children Activity </h3>
                                    </header> 
                                    <p> Parents - Children activity is one product module of the mental care section, it provides content ranging from generation-gap topics, wellbeing tips, titorial and quiz with gamified playful system so that children can invite their parents to play & interact. </p>
                    
                                </div>
                            </div>
                          </section>



                            <section>
                                <Link to="/love+" className="image">
                                    <img src={love2} alt="reminder"/>
                                </Link>
                                <div className="content">
                                    <div className="inner">
                                        <header className="major">
                                            <h3>Bite-Size Reminder</h3>
                                        </header>
                                        <p> Bite-Size Reminder drives by data with accurate caring contents. This automation system collects parents location, birthday and healthy information, caring reminders generates by weather, special occasions specifically,
                                        so that children are enabled to send useful caring information when their parents are truly needed. </p>
                                    </div>
                                </div>
                            </section>


                                <section>
                                    <Link to="/love+" className="image">
                                        <img src={love3} alt="points"/>
                                    </Link>
                                    <div className="content">
                                        <div className="inner">
                                            <header className="major">
                                                <h3>Caring Points System</h3>
                                            </header>
                                            <p> Caring Points system is an incentive method that is designed to grow unpaid users’ retention rate and conversion rate. 
                                            Love+ users gain caring points by using activity and reminder modules as redeem once they make a purchase or subscription for the selected electrolux hardware service program.  </p>
                                        
                                        </div>
                                    </div>
                                </section>

                                
                                <section>
                                    <Link to="/love+" className="image">

                                        <img src={love4} alt="IOT" />

                                    </Link>
                                    <div className="content">
                                        <div className="inner">
                                            <header className="major">

                                                <h3>IOT & Paid Users </h3>

                                            </header>
                                            <p> Love + platform developed three categories of award-winning appliance devices of Electrolux to provide customers with a premium noridc smart home experience.
                                            Love+ launched Pure A9 Air purifier primarily to specificallly meet the current PM2.5 situation in Mainland China. </p>
                                        </div>
                                    </div>
                                </section> 

                                </section> 




                                  <section>

                                   <div className="inner">

                                        <h2 id="content">User Journey</h2>
                                        <p> Jason is a XXX </p>
                                            <div className="grid-wrapper">
                                            <div className="col-6">
                                             <h3>Story1</h3>
                                             <p>Vivienne Sent him a XXX </p></div>
                                              <div className="col-6">
                                              <h3>Story2</h3>
                                              <p> Jason XXX </p>
                                              </div>
                                              </div>

                                              </div>

                                 </section> 



                      <section id="three" className="spotlights">


                        <section>
                            <Link to="/love+" className="image">
                                <img src={love1} alt="pca" />
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3> User Research </h3>
                                    </header> 
                                    <p> Focus Group & 1 on 1 Interview </p>
                                    <p> Insights 1 </p>
                                    <p> Insights 2 </p>
                    
                                </div>
                            </div>
                          </section>



                            <section>
                                <Link to="/love+" className="image">
                                    <img src={love2} alt="reminder" />
                                </Link>
                                <div className="content">
                                    <div className="inner">
                                        <header className="major">
                                            <h3>Market Preference Research</h3>
                                        </header>
                                        <p> Con-Joint Analysis </p>
                                    </div>
                                </div>
                            </section>


                            </section>



            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2> Fullstack Experience Designer  </h2>
                    </header>
                    <p> Briefly introduce my role & work contents
                    </p>
                </div>
            </section>






  
              </div>

    </Layout>
)


export default Love

