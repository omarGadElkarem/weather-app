import react  from 'react';


const Weather = (props)=>{
    return(
        <div className="info">
            {
                props.tempureature &&  <p className="info_key">  Tempreature :  
                <span className="info_value"> {props.tempureature}</span>
                </p>
            } 

             {
               props.City &&  <p className="info_key">  City :  
               <span className="info_value"> {props.City}</span>
               </p>
            }

             {
                props.Country &&  <p className="info_key">  Country :  
                <span className="info_value"> {props.Country}</span>
                </p> 
            }
             {
                props.humidity &&  <p className="info_key">  Humidity :  
                <span className="info_value"> {props.humidity}</span>
                </p>
            }
            {
                props.description &&  <p className="info_key">  description :  
                <span className="info_value"> {props.description}</span>
                </p>
            }
            {
                props.error &&  <p className="info_key">  Error :  
                <span className="info_value"> {props.Error}</span>
                </p>
            }
         
        </div>
    )
}

export default Weather;