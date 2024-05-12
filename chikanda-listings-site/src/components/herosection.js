import girlImg from '../assets/img/girl.png';

//This is code for the hero-section of the page
function HeroSection(){
    return(
        
        <div className='relative flex flex-col h-[353px]'>
            {/*This img tag creates the background of the hero section*/}
            <img src={girlImg} alt='Girl' className='border-box object-cover h-[353px] w-[915] overflow-clip' />
            <div className='text-3xl sm:text-5xl absolute top-1/2 w-full text-center text-wrap block'>
                <div className='static items-center'>
                    <h1 className='font-extrabold text-p_teal'>
                        Find your <br />
                        new hostel!
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;