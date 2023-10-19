import React ,{useState}from 'react';
import './form.css'
import { MainHeading } from '../headings/heading';
import { ButtonPrimary } from '../button1/button1';
import { ButtonSecondary } from '../button/button';


function FormGroup(props) {
  const { sequence, label, inputType, name, value, onChange } = props;

  return (
    <div className="form-group">
      <div className="lable">
        <span className="sequence">{sequence}</span>
        {label}
      </div>
      {inputType === 'text' ?             <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
        /> : null}
    </div>
  );
}

function RadioGroup(props) {
  const { options, name, value, onChange } = props;

  return (
    <div className="button-radio" style={{ marginTop: '15px' }}>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`radio${index}`}
            name={name}
            value={option}
            checked={value === option} // Set the checked status based on the current value
            onChange={onChange}
          />
          <label htmlFor={`radio${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
}

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    email: '',
    type:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



const register=()=>
{

  const { name, city, email,type } = formData;
  
  

  console.log('Name:', name);
  console.log('City:', city);
  console.log('Email:', email);
  console.log('Email:', type);
  const postData = {
   name:name,
   email:email
   
  };

  fetch('http://localhost:4000/api/registerpatner', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
    credentials: 'include'

  })
    .then((response) => {
      if (response.ok) {
        // Request was successful, handle the response here

        fetch('http://localhost:4000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
          credentials: 'include'
        })
          .then((response) => {
            if (response.ok) {
              // Request was successful, handle the response here
              return response.json();
            } else {
              // Request failed, handle errors here
              alert('POST request failed');
            }
          })
          .then((data) => {
            // Handle the response data as needed
            console.log(data);
              
         
          })
          .catch((error) => {
            // Handle network or other errors
            console.error('Error:', error);
          });
            



        return response.json();
      } else {
        // Request failed, handle errors here
        alert('POST request failed');
      }
    })
    .then((data) => {
      // Handle the response data as needed
      console.log(data);
      
    
   
    })
    .catch((error) => {
      // Handle network or other errors
      console.error('Error:', error);
    });
} 
  


    return (
      <div className='body'>
        <MainHeading name = {"Registration Form"}/>
        <div className='form'>
        <div className="g2">
          <FormGroup sequence="01"  label="Name" inputType="text" name="name" value={formData.name} onChange={handleInputChange} />
          <FormGroup sequence="02" label="City" inputType="text" name="city" value={formData.city} onChange={handleInputChange} />
        </div>
        <FormGroup sequence="03" label="Email" inputType="text" name="email" value={formData.email} onChange={handleInputChange} />

        <FormGroup sequence="01" label="What's your brand name ?" inputType="radio" />
        <RadioGroup
        options={['Travel', 'Button 2', 'Button 3','btn 4']}
        name="type"
        value={formData.type}
        onChange={handleInputChange}
      />
        <div onClick={register}><ButtonSecondary  /></div>
        
        
       
        <div style={{marginBottom:'50px'}}></div>
      </div>
      </div>
    );
  
    }
  export default Form;
