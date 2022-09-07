import React from 'react';
import styled, {css} from 'styled-components'; 

const fontStyles = css`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  line-height: 29px;
  font-size: 24px;
`;

const Form = styled.div`
    form {
      box-sizing: border-box;
      border: 5px solid #27569C;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      padding: 30px 15px 15px 10px;
      text-align: center;
      transition: all .2s;
      fieldset {
      border: none;
      ${fontStyles};
      }
      legend {
        color: #27569C;
        margin: 10px auto 40px;
      }
      p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 29px;
        margin-bottom: 25px; 
      }
      input {
        ${fontStyles}
        box-sizing: border-box;
        width: 295px;
        padding: 5px;
        background: #D9D9D9;
        border:  4px solid #27569C;
        border-radius: 10px;
        outline: none;
        transition: all .2s;
      }
      .wrong-input {
        border:  4px solid #E4B062;
      }
      button {
        ${fontStyles};
        background: #E4B062;
        border-radius: 10px;
        padding:8px 60px;
        border: none;
        cursor: pointer;
      }
    }
  .wrong-form {
        animation: wrongInput .6s ease-in-out 0s alternate;
  }
  @keyframes wrongInput {
        0%  { -webkit-transform:     translate(2px, 1px) rotate(0deg); }
        10% { -webkit-transform:     translate(-1px, -2px) rotate(-2deg); }
        20% { -webkit-transform:     translate(-3px, 0px) rotate(3deg); }
        30% { -webkit-transform:     translate(0px, 2px) rotate(0deg); }
        40% { -webkit-transform:     translate(1px, -1px) rotate(1deg); }
        50% { -webkit-transform:     translate(-1px, 2px) rotate(-1deg); }
        60% { -webkit-transform:     translate(-3px, 1px) rotate(0deg); }
        70% { -webkit-transform:     translate(2px, 1px) rotate(-2deg); }
        80% { -webkit-transform:     translate(-1px, -1px) rotate(4deg); }
        90% { -webkit-transform:     translate(2px, 2px) rotate(0deg); }
        100%{ -webkit-transform:     translate(1px, -2px) rotate(-1deg); }
  } 
  @media (max-width: 500px) {
    margin-top: 15px;
    form {
      padding: 0 33px;
      legend {
        margin: 10px auto 15px;
      }
      p {
        flex-direction: column;
        align-items: start;
        gap: 15px;
        margin-bottom: 10px;
      }
      input {
        width: 212px;
      }
      button {
        margin-bottom: 25px;
      }
    }
  }
`;

export function showWrongInput () {
  let inputs = document.querySelectorAll('.auth-input');
  let form = document.querySelector('.auth-form');
  for (let item of inputs) {
    item.classList.add('wrong-input');
  }
  form.classList.add('wrong-form');
  setTimeout(() => {
    for (let item of inputs) {
      item.classList.remove('wrong-input');
    }
    form.classList.remove('wrong-form');
  }, 3000)
}

export const AuthForm = (props) => {
  return (
    <Form>
      <form className='auth-form'>
        <fieldset>
          <legend>Autorization</legend>
          <p>
            <label htmlFor="login">login</label>
            <input className='auth-input' type="text" name="login" onChange={(e) => props.setLogin(e.target.value)}/>
          </p>
          <p>
            <label htmlFor="password">password</label>
            <input className='auth-input' type="password" name="password" onChange={(e) => props.setPassword(e.target.value)}/>
          </p>
        </fieldset>
        <button type="submit" onClick={props.handleSubmit}>Submit</button>
      </form> 
    </Form>
  )
}
