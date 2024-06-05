import React, { useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const RegisterUser=()=>{

  }

  //   const RegisterUser = async (e)=>{
  //     if(email.length===0){
  //       alert("Email has left Blank!");
  //     }
  //     else if(password.length===0){
  //       alert("Password has left Blank!");
  //     }
  //     else{
  //       try{
  //         e.preventDefault();
  //         console.log(email, password);
  //         const config = {
  //           headers: {
  //             "Content-type": "application/json",
  //             withCredentials: true,
  //           },
  //         };
  //         const resp = await axios.post("http://localhost:5000/register", {
  //           email,
  //           password,
  //         }, config);

  //         if(resp.status === 200){
  //           alert("User Registered In successfully")
  //           navigate("/login");

  //         }
  //         console.log(resp)

  //       }catch(error){
  //         if(error.response.status === 409){
  //           alert("User Alreaady exist")
  //         }
  //         if(error.response.status === 401){
  //           alert("Invalid credentials")
  //         }
  //       }
  //     }
  //   }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Register to GodawariAgro
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium leading-6">
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-2 outline-none p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-2 outline-none p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6">
                  Phone Number
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-2 outline-none p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={RegisterUser}
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have account?
            <a
              href="/login"
              className="font-semibold leading-6 text-green-600 hover:text-green-500"
            >
              Login
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
