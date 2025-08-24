






"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/header";
import Button from "../components/button";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="h-[1002px] bg-white text-black">
      <Header />

      <div className="w-full flex justify-center items-center">
     <motion.form
  onSubmit={handleSubmit}
  className="max-w-[950px] h-[638px] mt-25 shadow-2xl p-10 flex flex-col justify-center items-center"
  initial={{ scale: 0.5 }} 
  animate={{ scale: 1 }}   
  transition={{
    delay: 0.2, 
    duration: 0.6,
    ease: "easeOut"
  }}
>
          <h1 className="Font-inter font-bold text-[27px] pb-2 text-[#0C74BC] border-b-2 w-fit m-auto mt-5 mb-15">
            CONTACT US
          </h1>

          <h1 className="font-poppins font-medium text-[20px] self-start mb-8">
            Leave Us a message
          </h1>

          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-6">
              <div className="flex flex-col gap-5">
                <div className="relative">
                  <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                    className="w-[422px] border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
                    placeholder="First_Name"
                  />
                </div>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-[422px] border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
                  type="email"
                  placeholder="Email Address"
                />

                <textarea
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[173px] w-[422px] border-gray-300 rounded-lg border-2 p-2"
                  placeholder="Your Message"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="col-span-6">
              <div className="relative">
                <label className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
                  placeholder="Last_Name"
                />
              </div>
            </div>
          </div>

          <Button type="submit"  title="Send" clssName="px-20 py-2 self-end mt-5" />
        </motion.form>
      </div>
    </div>
  );
}

export default Contact;












