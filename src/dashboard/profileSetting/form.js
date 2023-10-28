import React from 'react';
import './form.css'
import { SimpleHeading } from '../../component/headings/heading';
import { ButtonBlack } from '../../component/button/button';
import { ButtonSecondary } from '../dash_buttons/buttons';
import { Dashboard } from '../structure/structure';

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

function Profile_Settings(props) {
    return (
      <Dashboard data={props.data}>
        <div className='body'>
        <div className='form'>
        <SimpleHeading text = "Profile Settings"/>
        
        <div className='uplodePhoto'>
            <label className='profileLable' for='profilePhoto'>
                <img src='icons/upload.svg' alt='upload'/>
                <span>Upload your Logo</span></label>
            <input id='profilePhoto' type='file' hidden/>
        </div>
        <div className="g2">
          <FormGroup sequence="01" label="What's your brand name " inputType="text" />
          <FormGroup sequence="01" label="Zip Code" inputType="text" />
        </div>
        <FormGroup sequence="01" label="Address " inputType="text" />
        <div className="g2">
          <FormGroup sequence="01" label="City " inputType="text" />
          <FormGroup sequence="01" label="state " inputType="text" />
        </div>
         <ButtonSecondary text="Edit" />
        <div style={{marginBottom:'50px'}}></div>
      </div>
      </div>
      </Dashboard>
      
    );
  }

  export default Profile_Settings

