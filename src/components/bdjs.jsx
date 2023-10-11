import './bd stor/bdcss.css';




const Bdstor=(props)=>{
    const {image,title,prize,rating,desc}=props;

    return(
        <>
            <div className="maindiv">
            <img src={image} className='storcardimg'/>
            <h1 className='storcardhed'>{title}</h1>
            <p className='stcardpriz' >Prise:{prize}</p>
            <p className='strrating'>Rating:{rating}</p>
            <p className='carddesc'>{desc}</p>
            <button className='cardBtn'>Add to Card</button>
            </div>
        </>
    )
}

export default Bdstor;