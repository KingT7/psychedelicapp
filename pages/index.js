import Link from 'next/link';


function HomePage() { return( 
<div>
<header className="mainPageHeader"><div className="Greeting"> Welcome to Unique Candles </div> </header>
<Link href="Home">
  <button className='Enter'> ENTER </button>
   </Link>

</div>
);};

export default HomePage