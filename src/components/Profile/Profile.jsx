import React from "react";
import Navbar from "../Front/Navbar";

const Profile = () => {
  return (
    <>
    <Navbar/>
    <div class="flex flex-col mt-28 w-[80%] m-auto">
      <div class="rounded-2xl flex ">
        <img
          class="inline-block shrink-0 rounded-2xl w-[80px] h-[80px] lg:w-[160px] lg:h-[160px]"
          src="./profile.png"
          alt="profile"/>
        <div class="p-4 m-4 flex flex-col justify-center mb-2">
          <div class="flex items-center mb-2">
            <h1 class="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1">
              Alec Jhonson
            </h1>
          </div>
          <div class="flex flex-wrap pr-2 mb-4 font-medium">
            <span class="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary">
              contact@example.com{" "}
            </span>
          </div>
        </div>
      </div>

      <ul class="group flex  font-semibold list-none border-b-2 justify-center">
        <li class="flex mt-2 mx-10 text-lg -mb-[2px]">
          <h1 class="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary">
            Liked
          </h1>
        </li>
        <li class="flex mt-2 mx-10 text-lg -mb-[2px] group">
          <h1 class="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-history]:border-primary group-[.active-history]:text-primary text-muted hover:border-primary">
            History
          </h1>
        </li>
      </ul>
    </div>
    </>
    
  );
};
export default Profile;
