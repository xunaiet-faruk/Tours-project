import video from '../../../assets/158229 (1080p).mp4'
import video2 from '../../../assets/178732 (1080p).mp4'
import video3 from '../../../assets//waterfall_-_24515 (1080p).mp4'

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">        
                    <video className='' autoPlay loop muted src={video} > 
                   
                        </video>  
               

                    <div className="absolute flex transform -translate-y-1/2 justify-end left-5 right-5 gap-4  top-[700px]">
                        
                        <a href="#slide4" className="btn btn-outline btn-circle text-white">❮</a>
                        <a href="#slide2" className="btn btn-outline btn-circle text-white">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <video className='' autoPlay loop muted src={video2} ></video>   
                    <div className="absolute flex transform -translate-y-1/2 justify-end left-5 right-5 gap-4 top-[700px]">
                        <a href="#slide1" className="btn btn-outline btn-circle text-white">❮</a>
                        <a href="#slide3" className="btn btn-outline btn-circle text-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <video className='' autoPlay loop muted src={video3} ></video>   
                    <div className="absolute flex transform -translate-y-1/2 justify-end left-5 right-5 gap-4 top-[700px]">
                        <a href="#slide3" className="btn btn-outline btn-circle text-white">❮</a>
                        <a href="#slide1" className="btn btn-outline btn-circle text-white">❯</a>
                    </div>
                </div>
          
            </div>

            <div className='absolute bottom-32 ml-72 '>
                <h1 className="text-6xl text-white italic mb-4  font-bold text-center ">Your Journey Begins</h1>
                <p className='text-2xl text-center text-white mb-5'>A journey of a 1000 miles starts with a single step. Import the full demo content <br/> with 1 click and create a head-turning website for your travel agency.</p>
           
            <div className='mt-3 flex justify-between'>
                <input placeholder='Destionation city' className='px-8 py-2 mr-7 rounded-full' type="text" name="" id="" />
                 <input  placeholder='' className='px-10 py-2 mr-7 rounded-full' type="date" name="" id="" />
                <select  className='px-8 py-2 rounded-full' name="" id="">
                    <option value="Adventure">Adventure</option>
                    <option value="cultural">cultural</option>
                    <option value="historical">Historical</option>
                </select>
                <div className='ml-8'>
                   <button className="btn btn-outline btn-secondary px-12 rounded-full">Search</button>

                </div>                  
            </div>
              
            </div>


        </div>
    );
};

export default Banner;