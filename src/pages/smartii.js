
import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { Glide } from 'react-glide'
import 'react-glide/lib/reactGlide.css'


import pic11 from '../assets/images/pic11.jpg'

const Smartii = (props) => (
    <Layout>
        <Helmet>
            <title> Smartii </title>
            <meta name="description" content="Smartify Midea" />
        </Helmet>


    <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2> Offerings in brief </h2>
                    </header>
                    <p>Hardware as a service, for new caregivers who want to enrich the wellbeing life of their new retiree parents. Love+ provides a total wellbeing solution including customizable data-driven contents, gamified activities, and IoT appliances with AI analysis that synthesis mental and physical care program for parents in a single platform.
                    </p>
                </div>
            </section>


         <section className="spotlights">
            
                        <section className="example">  
                        <div className="image-container">
                        <Glide> 
                            <img src={pic11} alt="research"/>
                            <img src={pic11} alt="research"/>
                            <img src={pic11} alt="research"/>
                        </Glide>
                        </div>       
                    
             
                         <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3> Millennial User Study</h3>
                                </header>
                                <p> Parents - Children activity is one product module of the mental care section, it provides content ranging from generation-gap topics, wellbeing tips, titorial and quiz with gamified playful system so that children can invite their parents to play & interact. </p>
                            </div>
                        </div>
                        </section>


                        <section className="example">
                                <div className= "image-container">
                                <Glide>
                                <img src={pic11} alt="direction"/>
                                <img src={pic11} alt="direction"/>
                                <img src={pic11} alt="direction"/>
                                </Glide>
                                </div>

                                 <div className="content">
                                    <div className="inner">
                                    <header className="major">
                                    <h3>Design Direction</h3>
                                    </header>
                                    <p> Bite-Size Reminder drives by data with accurate caring contents. This automation system collects parents location, birthday and healthy information, caring reminders generates by weather, special occasions specifically,
                                    so that children are enabled to send useful caring information when their parents are truly needed. </p>
                                    </div>
                                 </div>

                        </section>       
                


                        <section className="example">
                               <div className="image-container"> 
                                <Glide>
                                <img src={pic11} alt="Product Planning"/>
                                <img src={pic11} alt="Product Planning"/>
                                <img src={pic11} alt="Product Planning"/>
                                </Glide>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <header className="major">
                                            <h3>Product Planning</h3>
                                        </header>
                                        <p> 
                                        functions & strategy </p>
                                    </div>
                                </div>
                             </section>
                 

                             <section className="example">
                                <div className="image-container">
                                <Glide>
                                <img src={pic11} alt="Design"/>
                                <img src={pic11} alt="Design"/>
                                <img src={pic11} alt="Design"/>
                                </Glide>
                                </div>

                                <div className="content">
                                    <div className="inner">
                                        <header className="major">
                                            <h3>Design </h3>
                                        </header>
                                        <p> Screens </p>
                                    </div>
                                </div>
                            </section>
                     
                      </section>
                      

                        <section className="inner">
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
                
                         </section>



                  <section  className="spotlights">

                        <section className="example">
                             <div className="image-container"> 
                                 <Glide>
                                 <img src={pic11} alt="Product Planning"/>
                                 <img src={pic11} alt="Product Planning"/>
                                 <img src={pic11} alt="Product Planning"/>
                                 </Glide>
                             </div>
                                 <div className="content">
                                  <div className="inner">
                                    <header className="major">
                                        <h3> Demo </h3>
                                    </header>
                                    <p> Focus Group & 1 on 1 Interview </p>
                                    <p> Insights 1 </p>
                                    <p> Insights 2 </p>
                                  </div>
                                 </div>
                             </section>
                            
                 
              
                 </section>

                    <section id="one">
                        <div className="inner">
                            <header className="major">
                            <h2> Fullstack & to End Experience Designer </h2>
                            </header>
        
                            <p> • Serving the team as a full-stack to end user experience designer, drive to end design solutions in an agile development environment constantly.</p>
                            <p> • Mainly contributed in interaction & experience & pixel perfect user interface design of product modules such as Family activities, Points system, Personal Reminders, User Profile, IOT, Group Buying, etc.</p>
                            <p> • Conduct user research, +insights, arranging internal & external user research / branding marketing related workshops, mainly contributed in 1 focus group, 1 in-depth interview, 1 trademark workshop (collaborated with Global IP department ) and 1 conjoint analysis.</p> 
                            <p> • Helped product with structure-wise iteration as well as foresight development of love+'s future form ( insights of content development, new product opportunities, market preference, etc. )</p>
                            <p> • Work closely with cross functional teams（ growth & engineering & operation） exploring new possibilities of wellness solution, iot smart home scenarios, in case of crystallizing the new business model for our venture.</p>
                        </div>
                    </section>

                </div>

        {/* <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1> Smartify </h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
                </div>
            </section>
        </div> */}

    </Layout>
)

export default Smartii