import icon3 from '../images/icon3.png'

function ImageThree(){

    return(

        <div className='image-box'>
            <img
                className="image"
                src={icon3}
                alt="icon3"
            />
            <p className='textOver'>Single-Way</p>
            <p className='textUnder'>A set of immutable <br/> values ae passed to <br/> the component's.</p>

        </div>  

    );
}

export default ImageThree;