import img1 from '../assets/headphone.png'
import img2 from '../assets/xbox.png'
import img3 from '../assets//tv.png'
 


const BannerCarousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='bg-[#fceae8] px-20 py-10 rounded-lg'>
                        <div className='flex items-center'>
                            <div>
                                <h1 className='font-bold text-4xl'>Walton LED Tv</h1>
                                <p className='py-3'>Upgrade Your Home Theater: Discover the Perfect TV for an Immersive Viewing Experience</p>
                                <h2 className='text-[#FF136F] mb-3 text-3xl font-bold'>1200$</h2>
                                <button className='bg-gradient-to-r from-[#FF589B] to-[#FF136F] text-white rounded-lg py-2 px-6'>Buy now</button>
                                

                            </div>

                            <div>
                                {<img src={img3} alt="..."/>}
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div className='bg-[#fceae8] px-20 py-10 rounded-lg'>
                        <div className='flex items-center'>
                            <div>
                                <h1 className='font-bold text-4xl'>Walton headphone</h1>
                                <p className='py-3'>Immerse Yourself in Sound: Find the Perfect Headphones for an Unmatched Audio Experience</p>
                                <h2 className='text-[#FF136F] mb-3 text-3xl font-bold'>1200$</h2>
                                <button className='bg-gradient-to-r from-[#FF589B] to-[#FF136F] text-white rounded-lg py-2 px-6'>Buy now</button>
                                

                            </div>

                            <div>
                                {<img src={img1} alt="..."/>}
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div className='bg-[#fceae8] px-20 py-10 rounded-lg'>
                        <div className='flex items-center'>
                            <div>
                                <h1 className='font-bold text-4xl'>X-box for your living room</h1>
                                <p className='py-3'>Elevate Your Entertainment: Transform Your Living Room into the Ultimate X-Box Gaming Hub</p>
                                <h2 className='text-[#FF136F] mb-3 text-3xl font-bold'>1200$</h2>
                                <button className='bg-gradient-to-r from-[#FF589B] to-[#FF136F] text-white rounded-lg py-2 px-6'>Buy now</button>
                                

                            </div>

                            <div>
                                {<img src={img2} alt="..."/>}
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BannerCarousel;