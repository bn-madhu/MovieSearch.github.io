import './starBucks.css';
import logo from './images/logo.svg';
import student_hero from './images/student_hero.png';
import starForm from './images/starForm.png';

const StarBuckss = () =>
{
    return(
        
        <div className="starBucks_home">
            <div className="navbar">

                <div className="logo">
                    <img src={logo} alt="" style={{width: "200px"}} />
                </div>

                <div className="nav_links">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Student Support</a></li>
                        <li><a href="">Degree Search</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Work for StarBucks</a></li>
                    </ul>
                </div>
                    
                <div className="buttons">
                    <button id="btn1">Get Info</button>
                    <button id="btn2">Apply Now</button>
                </div>
            </div>

            <div className="banner">
                <p> <b>Work for Starbucks?</b> Chat with current scholars and ASU representatives at our next Virtual Open House on  <b>March 23rd from 9:30 to 11 a.m. PST. Register now!</b></p>
            </div>

            <div className="quality_support">
                <div className="content">
                    <h1>Quality support <br /> crafted for you</h1>
                    <p>Resources for Starbucks students at ASU Online</p>
                </div>
                <div className="image">
                    <img src={student_hero} alt="" />
                </div>
            </div>

{/* // 2nd nav section */}
            <nav id="nav_Sticky_2">
                <a href=""> <p>Services</p> </a>
                <a href=""> <p>Success Team</p> </a>
                <a href=""> <p>Get info</p> </a>
            </nav>


            <div className='supportText'>
                <h1>Support services for Starbucks partners at ASU</h1>
                <span>We're committed to ensuring all our students have the tools and resources they need to earn a top-ranked degree at ASU Online. Our support services help students navigate the online learning experience and get academic assistance so they can succeed. Browse our support services below.</span>
            </div>

            <hr id='hrTag'/>
{/* // box model section */}
            <div className="box_section">
                <div className="box">
                    <h3>Flexible learning</h3>
                    <p>The flexibility of online courses allows you to learn from anywhere in the world. There are six start dates each year.</p>
                </div>
                <div className="box">
                    <h3>Flexible learning</h3>
                    <p>The flexibility of online courses allows you to learn from anywhere in the world. There are six start dates each year.</p>
                </div>
                <div className="box">
                    <h3>Flexible learning</h3>
                    <p>The flexibility of online courses allows you to learn from anywhere in the world. There are six start dates each year.</p>
                </div>
                <div className="box">
                    <h3>Flexible learning</h3>
                    <p>The flexibility of online courses allows you to learn from anywhere in the world. There are six start dates each year.</p>
                </div>
                <div className="box">
                    <h3>Flexible learning</h3>
                    <p>The flexibility of online courses allows you to learn from anywhere in the world. There are six start dates each year.</p>
                </div>
                <div className="box">
                    <h3>Flexible learning</h3>
                    <p>The flexibility of online courses allows you to learn from anywhere in the world. There are six start dates each year.</p>
                </div>
            </div>

{/* // fixed feedback div */}
            <div id="fixed_left_content">
                <span>Feedback</span>
            </div>

{/* // form section */}
            <div className="formMain">
                <div className="image1">
                    <img src={starForm} style={{width: "450px",height: "850px",padding: "0px 60px"}} />
                </div>
                
                <div className="formSection">
                    <div id="headerDiv1">
                        <h1>Get started at ASU today!</h1>
                        <p>Please fill out the form to request additional information. Our enrollment coaches can answer your questions about the application process, degree programs, financial aid and more.</p>
                    </div>
                    <div id="nameDiv2">
                        <div>
                            <label for="firstName">First name</label><br />
                            <input type="text" id='firstName'/>
                        </div>
                        <div>
                            <label for="lastName">Last name</label><br />
                            <input type="text" id='lastName'/>
                        </div>
                    </div>
                    <div>
                        <label for="email">Email</label><br />
                        <input type="email" id='email' style={{width: "500px"}} />
                    </div>
                    <div>
                        <label for="phoneNumber">Phone number</label><br />
                        <input type="tel" id='phoneNumber' style={{width: "500px"}} />
                    </div>
                    <div>
                        <label for="degree">Degree program</label><br />
                        <input type="text" id='degree' style={{width: "500px"}} />
                    </div>
                    <div>
                        <input type="radio" id='yes' />
                        <label for="yes">Yes, i am a Starbucks partner.</label>
                    </div>
                    <div>
                        <input type="radio" id='no'/>
                        <label for="no">No, i am not a Starbucks partner.</label>
                    </div>
                    <div id="span_input">
                        <div>
                            <span>By submitting my information, I consent to ASU contacting me about educational services using automated calls, prerecorded voice messages, SMS/text messages or email at the information provided above. Message and data rates may apply. To opt out of messages, text STOP to 46278. Consent is not required to receive services, and I may call ASU directly at <a href="#">844-278-7289.</a> I consent to ASU's <a href="#"> mobile terms and conditions, Privacy Statement,</a> including the European Supplement, and ASU Online's <a href="#"> web analytics privacy policy.</a></span>
                        </div>
                        <div id="input_submit">
                            <input type="submit" placeholder="Submit" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default StarBuckss;