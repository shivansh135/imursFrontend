import React ,{useState,useEffect}from 'react';
import './form.css'
import { MainHeading } from '../headings/heading';
import { ButtonPrimary } from '../button1/button1';
import { ButtonSecondary } from '../button/button';
import { useNavigate } from 'react-router-dom';


function FormGroup(props) {
  const { sequence, label, inputType, name, value, onChange,id } = props;
 
  return (
    <div className="form-group">
      <div className="lable">
        <span className="sequence">{sequence}</span>
        {label}
      </div>
      { <input
          type={`${inputType}`}
          name={name}
          value={value}
          id={id}
          onChange={onChange}
        />}
    </div>
  );
}

function RadioGroup(props) {
  const { options, name, value, onChange } = props;

  return (
    <div className="button-radio" style={{ marginTop: '15px' }}>
      {options.map((option, index) => 
  
        (
        <div key={index}>
          <input
            type="radio"
            id={`radio${index}`}
            name={name}
            value={option}
            checked={value === option} // Set the checked status based on the current value
            onChange={onChange}
          />
          <label htmlFor={`radio${index}`}>{option.split('-')[1]}</label>
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
    type:'',
    logo:''
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target)
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const [names, setNames] = useState([]);

  useEffect(() => {
    // Fetch the data from the API when the component mounts
    fetch('https://iamyourstoryclint.el.r.appspot.com//api/partnertype')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Ensure data.product is an array before combining properties
        if (Array.isArray(data.product)) {
          const combinedInfoArray = data.product.map((item) => `${item._id} - ${item.name}`);
          console.log(combinedInfoArray)
          setNames(combinedInfoArray);
        } else {
          console.error('data.product is not an array');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);





  const register = () => {
    const { name, city, email, type } = formData;
    const logoInput = document.getElementById('logo');
    const logo = logoInput.files[0]; // Get the selected logo file
  
    // Create a FormData object to handle the multipart/form-data request
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', name);
    formDataToSubmit.append('email', email);
    formDataToSubmit.append('city', city);
    formDataToSubmit.append('type', type.split('-')[0]);
    formDataToSubmit.append('logo', logo); // Append the logo file
  
    fetch('https://iamyourstoryclint.el.r.appspot.com//api/registerpatner', {
      method: 'POST',
      body: formDataToSubmit,
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          // Request was successful, handle the response here
  
          fetch('https://iamyourstoryclint.el.r.appspot.com//api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
           
            credentials: 'include',
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
        navigate('/dashboard');
        window.location.reload();
      })
      .catch((error) => {
        // Handle network or other errors
        console.error('Error:', error);
      });
  };
  




    return (
      <div className='body'>
        <MainHeading name = {"Registration Form"}/>
        <div className='form'>
        <div className="g2">
          <FormGroup sequence="01"  label="Name" inputType="text" name="name" value={formData.name} onChange={handleInputChange} id='name'/>
          <FormGroup sequence="02" label="City" inputType="text" name="city" value={formData.city} onChange={handleInputChange} id='city' />
        </div>
        <div className='g2'>
        <FormGroup sequence="03" label="Email" inputType="text" name="email" value={formData.email} onChange={handleInputChange} id='email' />
        <FormGroup sequence="04" label="Uplode Brand Logo ?" name="logo" inputType="file" id='logo'/>
        </div>
        <FormGroup sequence="05" label="What's your brand name ?" inputType="radio" />
        <RadioGroup
        options={names}
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
