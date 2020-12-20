import react  from 'react';

const Form =(props)=>{
    return(
        <form onSubmit={props.getweather}>
        <input type="text" name="Country" placeholder="Country" />
        <input type="text" name="City" placeholder="City" />

        <button>Get weather</button>
    </form>
    )
}

export default Form;