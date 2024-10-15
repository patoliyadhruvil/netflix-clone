import React, { useState, useEffect } from "react";
import User1 from "../../assets/User1.png";
import User2 from "../../assets/User2.png";
import User3 from "../../assets/User3.jfif";
import User4 from "../../assets/User4.jpg";
import User5 from "../../assets/User5.png";
import Github from "../../assets/Github.png";
import { useDispatch } from "react-redux";
import { setProfile } from "../../Store/profile";
import { Link } from "react-router-dom";

const Profile = () => {
  const [imageArray, setImageArray] = useState([User1, User2]);
  const [count, setCount] = useState(0);
  const [imageContainer, setImageContainer] = useState([User3, User4, User5]);
  const [selected, setSelected] = useState(false);
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const SetUserProfile = (payload) => {
    dispatch(setProfile(payload));
  };

  // Handle display timeout effect
  useEffect(() => {
    if (display) {
      const timer = setTimeout(() => {
        setDisplay(false);
      }, 1000);
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [display]);

  const handleAddUser = () => {
    if (count <= 2) {
      setImageArray([...imageArray, imageContainer[count]]);
      setCount(count + 1);
      setDisplay(true);
    }
  };

  return (
    <div className="h-[90vh] text-white">
      <div className="flex items-center justify-center px-10">
        <ul className="mt-5 flex h-fit w-[60vw] flex-wrap md:mt-20">
          {imageArray.map((i, j) => (
            <li key={i.substring(12, 17)} className="mb-2 mr-5 text-xs">
              <Link to="/home">
                <img
                  onClick={(e) => {
                    if (!selected) {
                      e.target.style.borderWidth = "3px";
                      setSelected(true);
                      SetUserProfile(`User${j + 1}`);
                    }
                  }}
                  className="w-12 rounded-sm md:w-28 md:hover:border-4"
                  src={i}
                  alt="user image"
                />
              </Link>
            </li>
          ))}
        </ul>
        <span className="justify-center absolute right-10 top-[4.8rem] flex flex-col items-center font-extralight text-white md:right-32 md:top-[5rem]">
          <button
            className="rounded-xl border bg-[#101010f9] px-3 py-1 text-3xl font-bold md:mt-16 md:px-8 md:py-6"
            onClick={handleAddUser}
          >
            +
          </button>
          <span className="mt-1 text-sm md:hidden">Add</span>
        </span>
      </div>

      <ul className="absolute bottom-48 w-full text-base font-light text-slate-200 md:static md:mt-20 md:grid md:grid-cols-2 md:gap-2 md:font-semibold">
        <Link to="/watchlist">
          <li className="mx-3 mb-3 flex h-12 cursor-pointer items-center rounded-md bg-[#151414e9] px-3 md:py-8">
            <svg
              className="w-5 fill-white md:w-6"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 26.016v-20q0-2.496 1.76-4.256t4.256-1.76h20q2.464 0 4.224 1.76t1.76 4.256v20q0 2.496-1.76 4.224t-4.224 1.76h-20q-2.496 0-4.256-1.76t-1.76-4.224zM4 26.016q0 0.832 0.576 1.408t1.44 0.576h20q0.8 0 1.408-0.576t0.576-1.408v-20q0-0.832-0.576-1.408t-1.408-0.608h-20q-0.832 0-1.44 0.608t-0.576 1.408v20zM8 24v-4h4v4h-4zM8 18.016v-4h4v4h-4zM8 12v-4h4v4h-4zM14.016 24v-4h9.984v4h-9.984zM14.016 18.016v-4h9.984v4h-9.984zM14.016 12v-4h9.984v4h-9.984z"></path>
            </svg>
            <span className="ml-4">My WatchList</span>
          </li>
        </Link>

        <li className="mx-3 mb-3 flex h-12 cursor-pointer items-center rounded-md bg-[#151414e9] px-1 md:py-8">
          <svg
            className="w-8 fill-black md:w-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 128"
            width="64px"
            height="64px"
          >
            <path d="M106.9,55.3c-0.8-2.8-1.8-5.4-3.2-7.9l8.8-8.8L99.8,26l-8.8,8.8c-4.9-2.8-10.5-4.3-16.3-4.4l-3.2-12l-17.3,4.6l3.2,12c-5,2.9-9.1,7.1-11.9,11.9l-12-3.2L29,61.1l12,3.2c0,2.8,0.4,5.6,1.1,8.4c0.8,2.8,1.8,5.4,3.2,7.9l-8.8,8.8L49.2,102l8.8-8.8c4.9,2.8,10.5,4.3,16.3,4.4l3.2,12l17.3-4.6l-3.2-12c5-2.9,9.1-7.1,11.9-11.9l12,3.2l4.6-17.3l-12-3.2C108.1,60.9,107.7,58.1,106.9,55.3z M78.6,79.1c-8.4,2.2-16.9-2.7-19.2-11.1s2.7-16.9,11.1-19.2c8.4-2.2,16.9,2.7,19.2,11.1C91.9,68.3,86.9,76.9,78.6,79.1z" />
          </svg>
          <span className="ml-2">App Settings</span>
        </li>

        <li
          className="mx-3 mb-3 flex h-12 cursor-pointer items-center rounded-md bg-[#151414e9] px-2 md:py-8"
          onClick={() => window.open("https://github.com/patoliyadhruvil?tab=repositories")}
        >
          <img
            className="w-8 rounded-full bg-white md:w-12"
            src={Github}
            alt="GitHub image"
          />
          <span className="ml-3">Visit My GitHub</span>
        </li>
      </ul>

      <p className="absolute bottom-32 w-full text-center font-mono">
        {/* Additional content here */}
      </p>
    </div>
  );
};

export default Profile;
