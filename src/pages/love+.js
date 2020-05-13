import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Glide } from 'react-glide'
import 'react-glide/lib/reactGlide.css'
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
                
                            <section className="example">
                            <div className="image-container">
                                <Glide>
                                <img src={love1} alt="pca"/>
                                <img src={love2} alt="pca"/>
                                <img src={love3} alt="pca"/>
                                </Glide>
                            </div>
                 
                             <div className="content">
                                <div className="inner">
                                    <header className="major">
                                        <h3> Parents-Children Activity </h3>
                                    </header>
                                    <p> Parents - Children activity is one product module of the mental care section, it provides content ranging from generation-gap topics, wellbeing tips, titorial and quiz with gamified playful system so that children can invite their parents to play & interact. </p>
                                </div>
                            </div>
                            </section>


                            <section className="example">
                                    <div className= "image-container">
                                    <Glide>
                                    <img src={love2} alt="reminder"/>
                                    <img src={love3} alt="reminder"/>
                                    </Glide>
                                    </div>

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
                    


                            <section className="example">
                                   <div className="image-container"> 
                                    <Glide>
                                    <img src={love3} alt="points"/>
                                    <img src={love2} alt="points"/>
                                    </Glide>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <header className="major">
                                                <h3>Caring Points System</h3>
                                            </header>
                                            <p> Caring Points system is an incentive method that is designed to grow unpaid users’ retention rate and conversion rate.
                                            Love+ users gain caring points by using activity and reminder modules as redeem once they make a purchase or subscription for the selected electrolux hardware service program. </p>
                                        </div>
                                    </div>
                                 </section>
                     

                                 <section className="example">
                                    <div className="image-container">
                                    <Glide>
                                    <img src={love4} alt="IOT"/>
                                    <img src={love2} alt="IOT"/>
                                    </Glide>
                                    </div>

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
                                                    <p> Jason XXX </p></div>
                                                </div>
                                              </div> 
                             </section>

                      <section id="three" className="spotlights">

                            <section className="example">
                                 <div className="image-container"> 
                                     <Glide>
                                        <img src={love3} alt="IOT" /> 
                                        <img src={love4} alt="IOT" /> 
                                     </Glide>
                                 </div>
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
                                

                                 <section className="example">
                                 <div className="image-container">
                                 <Glide>
                                    <img src={love4} alt="IOT" /> 
                                    <img src={love2} alt="reminder"/>
                                 </Glide>
                                 </div>
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
                                <h2> Fullstack & to End Experience Designer </h2>
                                </header>
                                <hr></hr>
                                <p> • Serving the team as a full-stack to end user experience designer, drive to end design solutions in an agile development environment constantly.</p>
                                <p> • Mainly contributed in interaction & experience & pixel perfect user interface design of product modules such as Family activities, Points system, Personal Reminders, User Profile, IOT, Group Buying, etc.</p>
                                <p> • Conduct user research, +insights, arranging internal & external user research / branding marketing related workshops, mainly contributed in 1 focus group, 1 in-depth interview, 1 trademark workshop (collaborated with Global IP department ) and 1 conjoint analysis.</p> 
                                <p> • Helped product with structure-wise iteration as well as foresight development of love+'s future form ( insights of content development, new product opportunities, market preference, etc. )</p>
                                <p> • Work closely with cross functional teams（ growth & engineering & operation） exploring new possibilities of wellness solution, iot smart home scenarios, in case of crystallizing the new business model for our venture.</p>
                            </div>
                        </section>

                    </div>

    </Layout>
)

export default Love
