import React from 'react';
import logo from '../assets/logo.png';
import '../Login.css';

export default function Login(){
    return(
//---------------------------------
<div className="container">

<section>
  <div className="onda"></div>
</section>

<form action="index.html" className="login-form" >

<img src={logo} height="85px" width="250px" alt="eachpost"/>

  <div className='txtb'>
    <input type='text' className = "username inpu"/>
    <div className = "span_user span">Usuário</div>
    <span></span>
  </div>

  <div className="txtb">
    <input type='password' className = "password inpu"/>
    <div className = "span_passwd span">Senha</div>
    <span></span>
  </div>

  <input type="submit" className="logbtn" value="Login"></input>

  <div className="bottom-text">
    Não tem uma conta? <a href="index.html">Cadastre-se</a>
  </div>

</form>

</div>

//----------------------------------------------------
    );
}



//JAVA SCRIPT DA PAGINA DE LOGIN
window.onload = function(){
    var inputs = document.getElementsByClassName('inpu');
    var spans = document.getElementsByClassName('span');
    
      inputs[0].addEventListener('keyup', function(){
  
        if(this.value.length >= 1){
          spans[0].classList.add('fica');
          
        }
  
        else{
          spans[0].classList.remove('fica');
        }
  
      });
  
      inputs[1].addEventListener('keyup', function(){
  
        if(this.value.length >= 1){
          spans[1].classList.add('fica');
          
        }
  
        else{
          spans[1].classList.remove('fica');
        }
  
      });
  
    }
  