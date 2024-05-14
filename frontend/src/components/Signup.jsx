import React from "react";

const Signup = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Sign up</h1>
      <form method="post" className="max-w-xs">
        <input
          id="firstname"
          type="text"
          placeholder="First name"
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
        />
        <input
          id="lastname"
          type='text'
           placeholder='Last name'
           className='border border-gray -300rounded -mdp -2w-fullmb -4 '
         />
         <input 
             type ='email' 
             id ='email' 
             placeholder ='Email' 
             class Name= 'border border-gray -300rounded-mdp -2w-fullmb -4 '   />  
         < input  
              id = 'password'   
              type = 'password'   
              placeholder = 'Password'
               class Name=  'border border-gray -300rounded-mdp 2w-fullmb 4 '/>
       </ form>  
       <
       button type ='submit'
            class Name= "bg-blue500 hover:bg-blue700 text-white font-bold py-2 px-4 rounded" > Sign up </button> </ >
    );
};

export default Signup;