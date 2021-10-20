import React from 'react';
import useForm from './useForm';
import UseForm from './useForm';
import validate from './validateInfo';
import  './styled.css';



const FormSignup = ({submitForm}) => {

    const { handleChange, values, handleSubmit, errors } 
    = useForm(submitForm, validate);

    return (
        <div className= 'form-content-right'>
            <form className= 'form' onSubmit= {handleSubmit}>
                <h1>Precisamos escrever algo hjhjhjhhjhkjhkaqui</h1>
                <div className= 'form-inputs'>
                    <label htmlFor='Username' 
                        className='form-label'>
                            Nome
                        <input 
                           id='username'
                           type='text'
                           name= 'username'
                           className='form-input'
                           placeholder='Digite seu nome'
                           value= {values.username}
                           onChange= {handleChange}
                           />
                    </label>
                 {errors.username && <p>{errors.username}</p>}   
                </div>

                <div className= 'form-inputs'>
                    <label htmlFor='email'
                        className='form-label'>
                            E-mail
                        <input
                           id='email'
                           type='email'
                           name= 'email'
                           className='form-input'
                           placeholder='Digite seu e-mail'
                           value= {values.email}
                           onChange= {handleChange}
                           />
                    </label>
                    {errors.email && <p>{errors.email}</p>} 
                </div>
                <div className= 'form-inputs'>
                    <label htmlFor='password'
                        className='form-label'>
                            Senha
                        <input
                           id='password'
                           type='password'
                           name= 'password'
                           className='form-input'
                           placeholder='Digite sua senha'
                           value= {values.password}
                           onChange= {handleChange}
                           />
                    </label>
                    {errors.password && <p>{errors.password}</p>} 
                </div>
                <div className= 'form-inputs'>
                    <label htmlFor='password2'
                        className='form-label'>
                            Confirmar senha
                        <input
                           id='password2'
                           type='password'
                           name= 'password2'
                           className='password2'
                           placeholder='Digite novamente sua senha'
                           value= {values.password2}
                           onChange= {handleChange}
                           />
                    </label>
                    {errors.password2 && <p>{errors.password2}</p>} 
                </div>
                <button 
                className='form-input-btn'
                type= 'submit'>
                    Cadastrar
                </button>
                <span className='form-input-login'>
                    Você ja é cadastrado? Login <a href= '#'>AQUI</a>
                </span>
            </form>
            
        </div>
    );
}

export default FormSignup
