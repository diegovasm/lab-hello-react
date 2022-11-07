import icon2 from '../images/icon2.png'

function ImageTwo(){

    return(
        <div className='image-box'>
            <img
                className="image"
                src={icon2}
                alt="icon2"    
            />
            <p className='textOver'>Components</p>
            <p className='textUnder'>Build encapsulated <br/> components that <br/> manage their state.</p>

        </div>    
    );
}

export default ImageTwo;