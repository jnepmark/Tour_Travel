import React, { useState } from 'react';

const BookingForm = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    fromDate: '',
    toDate: '',
    adultsCount: 1,
    childrenCount : 1,
    // citizenship:'',
   // moreDetails:''
};
const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
     const { name, value } = e.target;
     
     // Ensure that only positive numbers are entered for adultsCount and childrenCount
     if (name === 'adultsCount' || name === 'childrenCount') {
       if (value < 1) {
         return; // Do not update state for negative or zero values
       }
     }

     setFormData({ ...formData, [name]: value });
   }

   const handleSubmit = async (e) => { // Make handleSubmit asynchronous to use await inside it
    e.preventDefault();
    if (Object.values(formData).every(value => value !== '')) {

      try {
        await fetch('/api/create-booking', { 
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body : JSON.stringify(formData)
        });
        
        alert('Data Submitted successfully');
        setFormData(initialFormData); // Reset form data to initial empty values

      } catch(err){
         alert('Error submitting data');
      }

    } else {
      alert('Please fill in all fields');
    }
 }
return (
 <div className="flex justify-center items-center h-screen">
   <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
     <div>
       <h2>Personal Data</h2>
     </div>

     {/* First Name */}
     <div className="mb-4">
       <label>First Name:</label><br/>
       <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} className="p-2 border w-full h-7" />
     </div>

      {/* Last Name */}
     	<div className="mb-4">
     	<label>Last Name :</label><br/>
     	<input type ='text' name ='lastName' value ={ formData.lastName } onChange ={ handleChange }className ="p-2 border w-full h-7" />
 	 </div >

      {/* Email */}
     	<div className="mb -4 ">
     		<label>Email :</label><br/>
     		<input type ='email' name ='email'value ={ formData.email }onChange ={ handleChange } placeholder=""className ="p-2 border w-full h-7"/>
 	 </ div >

        {/* Phone Number */}
     	<div className="mb -4 ">
 		<label >Phone :</ label >< br />
 		<input type ='tel'name ='phone'value ={ formData.phone }onChange ={ handleChange } 
 			placeholder=""className ="p-2 border w-full h-7"/>
  	 </ div >

  	  {/* From Date */}
	  <div >
	    <label >From Date :</label >< br/>
	    <input type ='date'name ='fromDate'value ={ formData.fromDate }onChange ={ handleChange }
	      placeholder=""className ="border h-8"/>
	  </ div >

 		<div >< label >To Date :</ label ><br/>
    <input type ='date'name ='toDate'value ={ formData.toDate }onChange ={ handleChange }
    placeholder=""className ="border h-8"/> 
    </ div >

    {/*-- Adults Count -->*/}       
        	 		<div >< label >Adults Count :</ label >< br />
        			<input type ='number'name ='adultsCount'value ={ formData.adultsCount }onChange ={ handleChange }
        			className ="border"/>
              </ div >

       {/* <!-- Children Count --> */}       
        		<div >< label >Children Count :</ label >< br />
        		<input type ='number'name= 'childrenCount'value= { formData.childrenCount}
        		onChange= { handleChange}
        		className= "border"/>
            </div>

            {/* <div className="mb -4 ">
       <label>citizenship :</label><br/>
       <input type ='text' name ='citizenship' value ={ formData.citizenship } onChange ={ handleChange }className ="border" />
      </ div > */}
      <div className="mb-4">
      		<label htmlFor="moreDetails">More Details:</label><br/>
      		<textarea name='moreDetails' id='moreDetails' value={ formData.moreDetails} onChange ={ handleChange} rows="2" cols="50" className="border w-full"></textarea>
      </div>

 

     

     
{/* Submit Button */}
{/* Submit Button */}
{/* Submit Button */}
{/* Submit Button */}


<button type="submit"className ="w-full bg-blue-500 text-white py -3 px -6 rounded mt">Submit</button>
</form>
</div>);
};

export default BookingForm;