import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './styled.css';


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }


    return (
        <>
        <div className= "form-container">
            <span className="close-btn">x </span>
            <div className="form-content-left">
                <img src="img/img-2.svg" alt="spaceship"
                className="form-img"/>
            </div>

           {/* <FormSignup /> */}

            {!isSubmitted ? 
            (<FormSignup submitForm= {submitForm}/>
            ) : (<FormSuccess />)}
            <FormSuccess />

            </div>
           
            
        
        </>
    );
}

export default Form