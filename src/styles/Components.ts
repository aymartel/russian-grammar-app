
import styled from 'styled-components'
import {

    Field,
  
  } from 'formik';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    justify-content: center;
    width: 100%;
    min-height: 100%;
    padding: 20px;
`
export const FormContent = styled.div`
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    padding: 30px;
    width: 90%;
    max-width: 450px;
    position: relative;
    padding: 0px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    text-align: center;
`

interface Props {
    backgroundColor: string;
}
export const FormFooter  = styled.div<Props>`
    background-color: ${props =>props.backgroundColor}};
    color:white;
    border-top: 1px solid #dce8f1;
    padding: 25px;
    text-align: center;
    -webkit-border-radius: 0 0 10px 10px;
    border-radius: 0 0 10px 10px;
  
`

export const Title = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    text-transform: uppercase;
    display:inline-block;
    margin: 40px 8px 10px 8px; 
`
export const Button = styled.button`
    border: none;
    color: white;
    padding: 15px 60px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bolder;

    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 10px 20px 10px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #39ace7;

      -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
  &:hover{ 
      cursor: pointer;
      background-color: #93cae5;
  }
  &:active {
    -moz-transform: scale(0.85);
    -webkit-transform: scale(0.85);
    -o-transform: scale(0.85);
    -ms-transform: scale(0.85);
    transform: scale(0.80);
}
`
export const RadioGorup  = styled.div`
font-size: 16px;
`
export const RadioButton  = styled.label`
margin: 10px;
`

export const Input  = styled(Field)`

background-color: #f6f6f6;
border: none;
color: #0d0d0d;
padding: 15px 15px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 10px;
width: 85%;
-webkit-border-radius: 5px 5px 5px 5px;
border-radius: 5px 5px 5px 5px;
  
`





