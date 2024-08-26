"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [inputs, setInputs] = useState({ username: "", email: "", phone: "" });
  const [isError, setIsError] = useState({
    username: false,
    email: false,
    phone: false,
  });
  const [isFocused, setIsFocused] = useState({
    username: false,
    email: false,
    phone: false,
  });
  function handleChange(event) {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username").trim();
    const email = formData.get("email").trim();
    const phone = formData.get("phone").trim();
    //const { username, email, phone } = inputs;
    const re = /\S+@\S+\.\S+/;
    const phoneRe =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    !username ? handleError("username") : handleNoError("username");
    !email || !re.test(email) ? handleError("email") : handleNoError("email");
    !phone || !phoneRe.test(phone)
      ? handleError("phone")
      : handleNoError("phone");

    setInputs({ username, email, phone });
    if (!isError.username && !isError.email && !isError.phone) {
      return router.push("/selectPlan");
    }
  }
  function handleError(input) {
    let newList = isError;
    newList[input] = true;
    setIsError(newList);
  }
  function handleNoError(input) {
    let newList = isError;
    newList[input] = false;
    setIsError(newList);
  }
  const handleInputFocus = (input) => {
    setIsFocused({ ...isFocused, [input]: true });
  };
  const handleInputBlur = (input) => {
    setIsFocused({ ...isFocused, [input]: false });
  };
  const errorMsg = (
    <p className="text-Strawberry-red font-medium">This field is required</p>
  );
  return (
    <main className="relative lg:min-w-[33.5rem]">
      <div className="flex flex-col md:justify-center bg-White rounded-2xl w-11/12 mx-auto lg:w-[450px] md:p-0 -translate-y-16 md:translate-y-0">
        <h1 className="text-Marine-blue text-2xl my-3 px-6 pt-4 font-bold md:text-[2rem] md:px-0 md:mt-8">
          Personal info
        </h1>
        <p className="text-Cool-gray px-6  md:px-0">
          Please provide your name, email address, and phone number.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 my-2 p-6 text-Marine-blue  md:px-0"
        >
          <span>
            <label>Name</label> {isError.username && errorMsg}
          </span>
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            onFocus={() => handleInputFocus("username")}
            onBlur={() => handleInputBlur("username")}
            className={`${
              isFocused.username && "border-Marine-blue outline-Marine-blue"
            } ${
              isError.username && "border-Strawberry-red"
            } border font-medium p-2 rounded-md border-Light-gray`}
            placeholder="e.g. Stephen King"
          />
          <span>
            <label>Email Address </label>
            {isError.email && errorMsg}
          </span>
          <input
            type="text"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            onFocus={() => handleInputFocus("email")}
            onBlur={() => handleInputBlur("email")}
            className={`${
              isFocused.email && "border-Marine-blue outline-Marine-blue"
            } ${
              isError.email && "border-Strawberry-red"
            } border font-medium p-2 rounded-md border-Light-gray`}
            placeholder="e.g. stephenking@lorem.com"
          />
          <span>
            <label>Phone Number </label>
            {isError.phone && errorMsg}
          </span>
          <input
            type="text"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
            onFocus={() => handleInputFocus("phone")}
            onBlur={() => handleInputBlur("phone")}
            className={`${
              isFocused.phone && "border-Marine-blue outline-Marine-blue"
            } ${
              isError.phone && "border-Strawberry-red"
            } border font-medium p-2 rounded-md border-Light-gray`}
            placeholder="e.g. +1 234 567 890"
          />

          <div className="absolute -bottom-[27%] -left-4 flex justify-end bg-Alabaster w-screen md:relative md:w-auto md:left-0 md:bg-White">
            <button
              type="submit"
              className="bg-Marine-blue text-White rounded-md w-[125px] mr-[4%] p-2 my-3 md:mt-10 hover:brightness-150 md:mr-0"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
