import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { BiSend } from "react-icons/bi";

const Chat = () => {
  // let navigate = useNavigate();
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    let messageObj = {
      id: Math.random(),
      sender_id: 1,
      receiver_id: 2,
      message: message,
      date: Date.now,
    };
    if (message === "") {
      alert("Please type a message to send");
    } else {
      setMessages([messageObj, ...messages]);
    }
  };

  const el = document.getElementById("useChatScroll");
  if (el) {
    el.scrollTop = el.scrollHeight;
  }

  return (
    <div className="main-container flex flex-col align-center items-center justify-center mt-5 scroll-smooth">
      {/* Profile Section */}
      <div className="flex justify-start items-center w-[80rem] gap-20 m-5">
        {/* user Image Section */}
        {/* left section */}
        <div className="flex items-center justify-center gap-3">
          <figure className="rounded-full w-10 h-10">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              alt="user profile"
            />
          </figure>
          <h3 className="hover:cursor-pointer hover:underline hover:text-blue-500">
            Bikal Dhimal
          </h3>
        </div>
        {/* Logout Button */}
        <Link to="/login">
          <button className="ml-[60rem] flex items-center justify-center bg-red-500 rounded-md shadow-md hover:shadow-lg w-[6rem] h-[2rem] p-5 font-serif text-[#fcfbf4] hover:bg-red-400 active:bg-red-500">
            Logout
          </button>
        </Link>
      </div>
      <div className="w-[80rem] h-[2rem]">
        <p className="font-serif font-bold text-[1.5rem] text-slate-500">
          Active Users
        </p>
      </div>
      {/* Active User Section */}
      <div className="flex items-center justify-start w-[80rem] h-[6rem] overflow-auto bg-blue-400 rounded-xl mt-5 mb-5">
        <h3 className="flex items-center justify-center bg-white w-fit h-[3rem] p-5 m-3 rounded-xl hover:bg-blue-500 shadow-md hover:shadow-lg hover:text-white hover:cursor-pointer active:bg-blue-400 ">
          Bikal Dhimal
        </h3>
      </div>

      {/* Chat Body */}
      <div className="flex gap-10 scroll-smooth">
        {/* sender */}
        <div className="w-[80rem] h-[40rem] overflow-auto bg-slate-400 rounded-lg">
          {/* send and message type section */}
          <div className="sticky top-0 bg-slate-400 rounded-lg">
            <form
              className="flex align-center items-center justify-center mt-1 gap-2"
              action=""
              onSubmit={(e) => sendMessage(e)}
            >
              <input
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                type="text"
                placeholder="Enter your message"
                className="w-full m-5 p-2 rounded-md bg-slate-500 text-white shadow-md outline-gray-300"
              />
              <button
                type="submit"
                onClick={(e) => {
                  sendMessage(e);
                }}
                className="mr-5 w-[6rem] h-[2.5rem] bg-blue-500 rounded-md p-2 hover:bg-blue-400 hover:cursor-pointer text-white shadow-md"
              >
                Send
              </button>
            </form>
          </div>
          {/* Box to show message */}
          <div
            id="useChatScroll"
            className="flex flex-col mt-2 ml-5 gap-2 mb-5"
          >
            {messages.map((data, i) => {
              return (
                <ul
                  key={data.id}
                  className={`flex flex-col ${
                    i % 2 === 0 ? "items-end mr-5 " : ""
                  } gap-2`}
                >
                  <li
                    className={`text-white pt-2 pb-2 pl-3 pr-3 w-fit rounded-2xl shadow-md ${
                      i % 2 === 0 ? "bg-blue-500" : "bg-slate-300 text-gray-600"
                    }`}
                  >
                    {data.message}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>

      {/* Chat Footer */}
      <a
        className="text-gray-500 mt-2 hover:underline hover:text-blue-600"
        href="https://bikaldhimal.com.np/"
        target="_blank rel=noreferrer "
      >
        Copyright@bikaldhimal.com.np
      </a>
    </div>
  );
};

export default Chat;
