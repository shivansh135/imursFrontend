import React from 'react';
import './form.css'
import { MainHeading } from '../headings/heading';
import { ButtonPrimary } from '../button1/button1';
import { ButtonSecondary } from '../button/button';

function FormGroup(props) {
  const { sequence, label, inputType } = props;
  
  return (
    <div className="form-group">
      <div className="lable">
        <span className="sequence">{sequence}</span>
        {label}
      </div>
      {inputType === 'text' ? <input type="text" name="" id="" /> : null}
    </div>
  );
}

function RadioGroup(props) {
  const { options, name } = props;

  return (
    <div className="button-radio" style={{ marginTop: '15px' }}>
      {options.map((option, index) => (
        <div key={index}>
          <input type="radio" id={`radio${index}`} name={name} />
          <label htmlFor={`radio${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}

function Form() {
    return (
      <div className='body'>
        <MainHeading name = {"Registration Form"}/>
        <div className='form'>
        <div className="g2">
          <FormGroup sequence="01" label="What's your brand name ?" inputType="text" />
          <FormGroup sequence="01" label="What's your brand name ?" inputType="text" />
        </div>
        <FormGroup sequence="01" label="What's your brand name ?" inputType="text" />

        <FormGroup sequence="01" label="What's your brand name ?" inputType="radio" />
        <RadioGroup options={['Button 1', 'Button 2', 'Button 3']} name="radio-group" />
        <ButtonSecondary />
        <div style={{marginBottom:'50px'}}></div>
      </div>
      </div>
    );
  }
  
  export default Form;
