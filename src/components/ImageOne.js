import icon1 from '../images/icon1.png'

function ImageOne(){

    return(
        <div className='image-box'>
            <img
                className="image"
                src={icon1}
                alt="icon1"
            />
            <p className='textOver'>Declarative</p>
            <p className='textUnder'>React makes it <br/> painless to create <br/> interactive UIs.</p>

        </div>
        
    );
}

export default ImageOne;