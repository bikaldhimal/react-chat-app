import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../axios";

const Signup = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = async () => {
    if (!name && !email && !password && !confirmPassword) {
      alert("The fields are empty, Please fill all the fields");
    } else {
      if (password !== confirmPassword) {
        alert("The password doesn't match, Please try again.");
      } else {
        await axios
          .post("/signup", { name, email, password })
          .then((response) => {
            console.log(response);
            alert("User Created Successfully.");
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
            alert(error.response.data);
          });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col bg-slate-300 items-center justify-center text-center w-[450px] h-[700px] rounded-md shadow-sm">
        <h3 className="mb-[40px] text-sky-700 text-[1.3rem] font-bold font-serif cursor-default">
          React Chat App
        </h3>
        <div className="w-[7rem] h-[0.15rem] rounded-md bg-sky-700 mt-[-2rem] mb-8 animate-ping"></div>

        <div
          // action=""
          // method="post"
          className="flex flex-col items-start gap-2"
        >
          <label className="text-gray-500 text-[1.2rem] font-serif">
            Full Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            type="text"
            className="rounded-md
            outline-blue-400
            bg-[#fcfbf4]
            py-3
            px-4
            text-gray-500
            w-[350px]
            shadow-md
            "
            placeholder="Enter your name"
          />
          <label className="text-gray-500 text-[1.2rem] font-serif">
            Email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            type="text"
            className="rounded-md
            outline-blue-400
            bg-[#fcfbf4]
            py-3
            px-4
            text-gray-500
            w-[350px]
            shadow-md
            "
            placeholder="example@gmail.com"
          />
          <label className="text-gray-500 text-[1.2rem] font-serif">
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            type="password"
            className="rounded-md
            outline-blue-400
            bg-[#fcfbf4]
            py-3
            px-4
            text-grey-darker
            w-[350px]
            shadow-md
            "
            placeholder="Enter your password"
          />
          <label className="text-gray-500 text-[1.2rem] font-serif">
            Confirm Password
          </label>
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            name="confirmPassword"
            type="password"
            className="rounded-md
            outline-blue-400
            bg-[#fcfbf4]
            py-3
            px-4
            text-grey-darker mb-5
            w-[350px]
            shadow-md
            "
            placeholder="Re-enter your password"
          />

          <button
            onClick={() => {
              signup();
            }}
            className="bg-blue-500 w-full h-12 hover:bg-blue-600 active:bg-blue-500 text-[#fcfbf4] rounded-md mb-[20px] shadow-lg delay-100"
          >
            Sign Up
          </button>
        </div>

        <p className="px-[3.5rem]">
          Already have an account?
          <Link to="/login">
            <span className="text-red-500 hover:cursor-pointer"> Login</span>
          </Link>
        </p>

        <a
          rel="noreferrer"
          href="http://bikaldhimal.com.np/"
          target="_blank"
          className="mt-[40px] text-slate-400 hover:text-blue-400 delay-100"
        >
          copyright@bikaldhimal.com.np
        </a>
      </div>
    </div>
  );
};

export default Signup;
