import react ,{Component} from 'react';
import Weather from './Components/Weather';
import Form from './Components/Form';
import './App.css';




 
const api_key= '20c0ba3d8c55cece5026f93f3ba52c16';


// 44http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}%2Cegypt&appid=${api_key}


class app extends react.Component{

  state ={
    tempureature : '',
    city : '',
    Country : '',
    humidity : '',
    description : '',
    error : '',

  }

  getweather= async(e)=>{
    e.preventDefault()
    
    const Country = e.target.elements.Country.value;
    const City = e.target.elements.City.value;
    
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}%2Cegypt&appid=${api_key}`)
    const data = await api.json();
    

   if(City&&Country){
    this.setState(
      {
       tempureature : data.main.temp,
       City : data.name,
       Country : data.sys.country,
       humidity : data.main.humidity,
       description : data.weather[0].description,
       error : '',
      }
       );
   } else{
    this.setState({
      tempureature : '',
      city : '',
      Country : '',
      humidity : '',
      description : '',
      error : '',
    })
   }
  }
  render() {
    return(
      <div className="Wraper">
        
        <div className="form-container">
        <Form getweather={this.getweather} />
        <Weather 
        
        tempureature = {this.state.tempureature}
        City = {this.state.City}
        Country =  {this.state.Country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error = {this.state.error}
        
        />
        
      
        </div>
       
        
        
      </div>
    )
  }
}

export default app;