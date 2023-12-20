
import './Features.css'
const Features = () => {
    
  
    return (
        
      <div className='mx-auto max-w-xl'>
            <div className="wrapper">
                <div className="container">
                    <input type="radio" name="slide" id="card1" checked />
                    <label for="card1" className="design scroll-smooth w-80 rounded-3xl " style={{ backgroundImage: 'url(https://i.ibb.co/sRjS5cm/image.png' }}>
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                                <h4>Available flights</h4>
                                
                            </div>
                        </div>

                    </label>
                    
                    {/* card 2  */}

                    <input type="radio" name="slide" id="card2" />
                    <label for="card2" className="design scroll-smooth" style={{ backgroundImage: 'url(https://i.ibb.co/wLrCVGB/image.png' }}>
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                                <h4>Available Cars Anytime</h4>
                               
                            </div>
                        </div>
                    </label>


                        {/* card threee */}

                    <input type="radio" name="slide" id="card3" />
                    <label for="card3" className="design scroll-smooth" style={{ backgroundImage: 'url(https://i.ibb.co/mX0W8qc/pexels-mudassir-ali-1556991.jpg' }}>

                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                                <h4>Available Ship</h4>
                            </div>
                        </div>
                    </label>

                   
                </div>
            </div>
      </div>
    );
};

export default Features;