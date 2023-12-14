
import './Features.css'
const Features = () => {
    return (
      <div className='lg:ml-52'>
            <div className="wrapper">
                <div className="container">
                    <input type="radio" name="slide" id="card1" checked />
                    <label for="card1" className="card scroll-smooth" style={{ backgroundImage: 'url(https://i.ibb.co/sRjS5cm/image.png' }}>
                        <div className="row">
                            <div className="icon">1</div>
                            <div className="description">
                                <h4>Available flights</h4>
                                
                            </div>
                        </div>

                    </label>


                    <input type="radio" name="slide" id="card2" />
                    <label for="card2" className="card scroll-smooth" style={{ backgroundImage: 'url(https://i.ibb.co/wLrCVGB/image.png' }}>
                        <div className="row">
                            <div className="icon">2</div>
                            <div className="description">
                                <h4>Available Cars Anytime</h4>
                               
                            </div>
                        </div>
                    </label>


                    <input type="radio" name="slide" id="card3" />
                    <label for="card3" className="card scroll-smooth" style={{ backgroundImage: 'url(https://i.ibb.co/mX0W8qc/pexels-mudassir-ali-1556991.jpg' }}>

                        <div className="row">
                            <div className="icon">3</div>
                            <div className="description">
                                <h4>Available Ship</h4>
                            </div>
                        </div>
                    </label>

                    <input type="radio" name="slide" id="card4" />
                    <label for="card4" className="card scroll-smooth" style={{ backgroundImage: 'url(https://i.ibb.co/rsdT4ns/pexels-pixabay-261102.jpg' }}>
                        <div className="row">
                            <div className="icon">4</div>
                            <div className="description">
                                <h4>Luxurious hotel Room Available</h4>
                                
                            </div>
                        </div>
                    </label>

                </div>
            </div>
      </div>
    );
};

export default Features;