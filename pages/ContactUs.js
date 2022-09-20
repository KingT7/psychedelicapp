import Link from 'next/Link';

function ContactUs() { 
               return( 

<div>

<nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#"> Crazy</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link"> <Link href='Home'>Home </Link> <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link href='Info'>Info</Link></a>
                </li>
                <li className="nav-item">
         <a className="nav-link"><Link href='ContactUs'>Contact Us</Link></a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-white my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>


<div className="contactFormMainContent">

    
    <h3><u>Contact Us</u></h3>
<p>Fill out our form to get in touch. We will respond as soon as possible. </p>

<input type='text' placeholder='First Name'/> 
<input type='text' placeholder='Last Name'/>
<input type='text' placeholder='E-mail'/>
<textarea placeholder='Send us a message...'></textarea>
<button>Send</button>

    </div>
    </div>
    );};
    
    export default ContactUs;