import React from "react";

const Signin = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Sign in</h1>
      <form method="post" className="max-w-xs">
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
        />
        <input
          type='password'
          id="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md p-2 w-full mb-4"
        />
        <button 
            type='submit'
            className="
                bg-blue-500 
                hover:bg-blue-700 
                text-white 
                font-bold 
                py-2 px-
                4 rounded">
            Sign in
         </button>
      </form>
    </>
  );
};

export default Signin;