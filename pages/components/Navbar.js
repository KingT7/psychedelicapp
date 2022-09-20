import Link from 'next/link';
import Image from 'next/image';
import psych from './psych.jpg';



function Navbar(){

 



  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;



    return(
<div className="MainContent">

        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#"> Crazy</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <a className="nav-link"> <Link href="/">Home </Link> <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"><Link href="/">Info</Link></a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Dropdown</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action 1</a>
                        <a className="dropdown-item" href="#">Action 2</a>
                    </div>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
                <button className="btn btn-outline-white my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>




<div className="container">
<header className="blog-header py-3">
  <div className="row flex-nowrap justify-content-between align-items-center">
    <div className="col-4 pt-1">
      <a className="text-white bg-primary" href="#">Subscribe</a>
    </div>
    
    <div className="col-4 d-flex justify-content-end align-items-center">
      <a className="text-danger" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
      </a>
      <a className="btn btn-md btn-outline-secondary text-white bg-primary" href="#">Sign up</a>
    </div>
  </div>
</header>

<div className="nav-scroller py-1 mb-2">
  <nav className="nav d-flex justify-content-between">
    <a className="p-2 text-danger" href="#">World</a>
    <a className="p-2 text-danger" href="#">U.S.</a>
    <a className="p-2 text-danger" href="#">Technology</a>
    <a className="p-2 text-danger" href="#">Design</a>
    <a className="p-2 text-danger" href="#">Culture</a>
    <a className="p-2 text-danger" href="#">Business</a>
    <a className="p-2 text-danger" href="#">Politics</a>
    <a className="p-2 text-danger" href="#">Opinion</a>
    <a className="p-2 text-danger" href="#">Science</a>
    <a className="p-2 text-danger" href="#">Health</a>
    <a className="p-2 text-danger" href="#">Style</a>
    <a className="p-2 text-danger" href="#">Travel</a>
  </nav>
</div>

<div className="jumbotron text-white rounded bg-dark">
  <div className="col-md-6 px-0">
    <h2 className=" font-italic text-center ">Welcome to Psychedelic Styles</h2>
    <p className="lead my-3 text-center">My name is Nicholas. I hope you enjoy this small sample of my work. Have a nice day!</p>
  
  </div>
</div>

<div className="row mb-2">
  <div className="col-md-6">
    <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <div className="card-body d-flex flex-column align-items-start">
        <strong className="d-inline-block mb-2 text-primary">World</strong>
        <h3 className="mb-0">
          <a className="text-dark" href="#">Our galaxy</a>
        </h3>
        <div className="mb-1 text-danger">{date}</div>
        <p className="card-text text-success mb-auto">Our galaxy is an interesting place. There are many unknown things we have yet to discover. <br/> 
        Dive deep into our universe and see what mind-blowing things you can find! </p>
        <a href="#">Continue reading...</a>
      </div>
      <Image className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap"/>
    </div>
  </div>
  <div className="col-md-6">
    <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <div className="card-body d-flex flex-column align-items-start">
        <strong className="d-inline-block mb-2 text-success">Design</strong>
        <h3 className="mb-0">
          <a className="text-dark" href="#">Your ideas</a>
        </h3>
        <div className="mb-1 text-danger">{date}</div>
        <p className="card-text text-success mb-auto">This is a place for you to create, show off, and display your own content and ideas.</p>
        <a href="#">Continue reading...</a>
      </div>
      <Image className="card" alt= "card" />

    </div>
    
    <Image className='psych' alt='photo' src={psych} width="700px" height="500px"></Image>




  </div>
</div>
</div>



</div>

);
}
export default Navbar;