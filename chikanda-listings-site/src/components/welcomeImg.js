import girlImg from '../assets/img/girl.png';


function WelcomeImg(){
    return(
        
        <div style={{border:'2px solid red'}} className='relative'>
            <img src={girlImg} alt='Girl ' style={{
                width:'100vw',
                zIndex:'-10'
            }} className='blur-[2px]' />
            <div className='text-center mx-48 absolute text-5xl text-zinc-100 inset-0'>Find your new hostel! </div>
        </div>
        
    )
}

export default WelcomeImg;