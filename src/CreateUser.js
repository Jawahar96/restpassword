import { formik, useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { env } from './config';

function CreateUser() {
     const navigate =useNavigate()

  const formik=useFormik({
    initialValues : {
      name :"",
      Position :"",
      Office :"",
      Age : "",
      Startdate :"",
      Salary :"",
      Company : ""

    },
    validate :(values)=>{

      let errors={};
     if(values.username ==="" &&  values.username.length < 5){
      errors.name ="Enter a valid  name"
     }

     if(values.Position=""){
      errors.Position="Enter correct position"
     }

     return errors;

    },
    onSubmit : async(values)=>{
     let user=await  axios.post(`{${env.api}/create-user`,values)
      alert("User created")
      navigate('/')
    }
  });

 
  return (
    <div>
      <div className='container'>
    <form onSubmit={formik.handleSubmit}>
    <div className='row'>
        <div className='col-lg-6'>
          <label> Name</label>
          <input className='form-control' type={'text'} 
          value={formik.values.name}
            onChange={formik.handleChange} 
            name='name'
            />
            <span style={{color :"red"}}>{formik.errors.name}</span>
         
        </div>
     
      <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Position</label>
          <input className={`form-control ${formik.errors.Position ? `input-error` : ``}`} type={'text'} 
          value={formik.values.Position}
          onChange={formik.handleChange} 
            name='Position'

          />

        </div>
        </div>

        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Age</label>
          <input className='form-control' type={'number'} 
          value={formik.values.Age}
          onChange={formik.handleChange} 
            name='Age' />
          
        </div>
        </div></div>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Office</label>
          <input className='form-control' type={'text'}
            value={formik.values.Office}
            onChange={formik.handleChange}
            name='Office'

          />


        </div></div>
        </div>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Start date</label>
          <input className='form-control' type={'date'} 
          value={formik.values.Startdate}
          onChange={formik.handleChange} 
          name='Startdate'
     

          />
        <div className='col-lg-6'></div>
        </div>
        </div>
        
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Company</label>
          <input className='form-control' type={'text'} value={formik.values.Company}
        onChange={formik.handleChange}
        name='Company'

          />
          

        </div>

</div>
</div>
<div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Salary</label>
          <input className='form-control' 
          type={'text'}
          value={formik.values.Salary}
          onChange={formik.handleChange}
          name='Salary'
l
          />
</div>
        </div>
</div>
<div className='col-lg-6'>
  <button className='btn-btn-sm btn-success ' disabled={!formik.isValid}>Submit
    
  </button>
</div>
</div></div></div>
</form>
</div>
</div>

  
  )
}

export default CreateUser
