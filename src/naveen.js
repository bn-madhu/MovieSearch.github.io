import './naveen.css'
// import cabbage from './images/cabbage.png'
// import person from './images/person.jpg'
// import basket from './images/basket.png'
// import starForm from './images/starForm.png'
import Logo1 from './images/Logo1.png';
import myacc from './images/myacc.png';
import cart from './images/cart.png';


const Navbar =() =>{
    return(
        <div className="nav">
            <div className="mainNav">
                <div className="logo">
                    <img src={Logo1} alt="" />
                </div>
                <div className='list'>
                        <p>Catogery1</p>
                        <p>Catogery2</p>
                        <p>Catogery3</p>
                        <p>Catogery4</p>
                        <p>Catogery5</p>
                </div>
                <div className="navlink">
                    <div className="topRightNav">
                        <div id="topnavship">
                            <div>
                                <h5>Ship to: <span style={{color:"skyblue", paddingLeft:"10px"}}>798 Davis Lane</span></h5>
                            </div>
                            <div id="topnavcart">
                                <img src={myacc} id="acc" />
                                <span>My Account</span>
                                <img src={cart} alt="" id="cart" style={{paddingLeft:"18px"}} />
                                <span>Cart</span>
                            </div>
                        </div>
                        <div className='search'>
                            <input type="text" />
                            <button></button>
                        </div>
                    </div>
            </div>
        </div>
    </div>


        // <div className="mainNav">
        //     {/* nav bar 1st */}
        //     <div className="navFirst">
        //         <div className="logo">
        //             <img src={cabbage} alt=""/>
        //             <h3><span style={{color:"green"}}>Company</span>logo</h3>
        //         </div>
        //         <div className="inputbar">
        //             <input type="search" />
        //             <button></button>    
        //         </div>
        //         <div className="content">
        //             <img src={person} alt="" id="person"/>
        //             <img src={basket} alt="" id="basket"/>
        //         </div>
        //     </div>
        //     {/* nav bar 2nd */}
        //     <div className="navSecond">
        //         <div id="contents">
        //             <p>Bakery</p>
        //             <p>Nuts & Seeds</p>
        //             <p>Vegetables</p>
        //             <p>Cheeses</p>
        //             <p>Sea Food</p>
        //             <p>Dairy</p>
        //             <p>Meat</p>
        //             <p>Snacks</p>
        //         </div>
        //     </div>

        //     <section className="main" style={{marginTop:"50px", backgroundColor:"red"}}>
        //         <div>
        //             <div className="leftContent">
        //                 <img src={starForm} id="imgLeftMain" />
        //                 <div className="innerImg">
        //                     <img src={starForm} id="imgLeftBottom" />
        //                     <img src={starForm} id="imgLeftBottom" />
        //                     <img src={starForm} id="imgLeftBottom" />
        //                 </div>
        //             </div>
        //             <div className="midContent">

        //             </div>
        //             <div className="rightContent">

        //             </div>
        //         </div>
        //     </section>
        // </div>
    )
}

export default Navbar;