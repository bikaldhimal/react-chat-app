import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "../axios";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState("false");

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields");
    } else {
      await axios
        .post("/login", { email, password })
        .then((response) => {
          navigate("/chat");
          console.log(response);
          setIsActive("true");
          console.log(isActive);
        })
        .catch((error) => {
          alert(error.response.data);
          console.log(error.response.data);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="flex flex-col bg-slate-300 items-center justify-center text-center w-[450px] h-[500px] rounded-md shadow-sm">
        <h3 className="mb-[40px] text-sky-700 text-[1.3rem] font-bold font-serif cursor-default">
          React Chat App
        </h3>
        <div className="w-[7rem] h-[0.15rem] bg-sky-700 rounded-md mt-[-2rem] mb-8 animate-ping"></div>
        <div className="flex flex-col items-start gap-2">
          <label className="text-gray-500 text-[1.2rem] font-serif">
            Email
          </label>
          <input
            name="email"
            type="text"
            className="rounded-md
            outline-green-400
            bg-[#fcfbf4]
            py-3
            px-4
            text-gray-500
            w-[350px]
            shadow-md
            "
            placeholder="example@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="text-gray-500 text-[1.2rem] font-serif">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="rounded-md
            outline-green-400
            bg-[#fcfbf4]
            py-3
            px-4
            text-grey-darker mb-5
            w-[350px]
            shadow-md
            "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
          />

          {/* <Link to="/chat"> */}
          <button
            onClick={(e) => {
              login(e);
            }}
            className="bg-green-500 w-[21.8rem] h-12 hover:bg-green-600 active:bg-green-500 text-[#fcfbf4] rounded-md mb-[20px] shadow-lg delay-100"
          >
            Login
          </button>
          {/* </Link> */}
        </div>
        <p className="px-[3.5rem]">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-red-500 hover:cursor-pointer">Register</span>
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

export default Login;
