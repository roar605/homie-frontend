import React, { useState } from "react";

const ContactSeller = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // const [isError, setIsError] = useState(false);
  // const validPhoneStyle="p-2 border-b-2 border-green-700"
  // const InvalidPhoneStyle="p-2 border-b-2 border-red-700"
  // const pattern = new RegExp(/^\d{1,10}$/);
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className=" sticky top-0 w-1/3 p-4 rounded-lg bg-white justify-center  flex flex-col mx-4">
      <h1 className="font-medium text-lg">Contact Seller</h1>
      <div className="flex">
        <img alt="logo" src="./logofinal.png" width={70} />
        <div className="flex flex-col justify-center">
          <h1>Priyanshu Priy</h1>
          <span>+91 87690...</span>
        </div>
      </div>
      <h2>Please share your contact</h2>
      <form className="flex flex-col">
        <label>
          Name :
          <input
            className="p-2 border-b-2 "
            type="text"
            value={name}
            onChange={handleNameChange}
          ></input>
        </label>
        <label>
          Phone :
          <input
            className="p-2 border-b-2"
            type="text"
            value={phone}
            onChange={handlePhoneChange}
          ></input>
        </label>
        <label>
          Email :
          <input
            className="p-2 border-b-2"
            type="text"
            value={email}
            onChange={handleEmailChange}
          ></input>
        </label>
      </form>

      <button className="bg-gray-500 p-2 py-4">Get Contact Details</button>
    </div>
  );
};

export default ContactSeller;
