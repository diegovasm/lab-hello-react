import icon4 from '../images/icon4.png'

function ImageFour(){

    return(

        <div className='image-box'>
            <img
                className="image"
                src={icon4}
                alt="icon4"
            />
            <p className='textOver'>JSX</p>
            <p className='textUnder'>Statically-typed, <br/> designed to run on <br/> modern browsers.</p>

        </div>  

    );
}

export default ImageFour;