"use client";
import { useState } from "react";
import Card from "../Components/Card";
import BackButton from "../Components/BackButton";
import NextStep from "../Components/NextStep";

function Page() {
  const [choice, setChoice] = useState("month");
  const [type, setType] = useState("arcade");
  console.log(type, choice);
  return (
    <div className="lg:min-w-[33.5rem]">
      <div className="w-11/12 mx-auto bg-White rounded-2xl lg:w-[450px] md:p-0  -translate-y-16 md:translate-y-0 p-6">
        <h1 className="text-Marine-blue text-2xl my-4 font-bold md:text-[2rem] md:mt-10">
          Select your plan
        </h1>
        <p className="text-Cool-gray">
          You have the option of monthly or yearly billing.
        </p>
        <div className="md:flex md:justify-between md:items-center md:gap-5 my-4 md:mt-10">
          <Card
            choice={choice}
            type={"arcade"}
            setType={setType}
            selected={type === "arcade"}
          />
          <Card
            choice={choice}
            type={"advanced"}
            setType={setType}
            selected={type === "advanced"}
          />
          <Card
            choice={choice}
            type={"pro"}
            setType={setType}
            selected={type === "pro"}
          />
        </div>
        <div className="flex justify-center gap-3 items-center bg-Alabaster p-3 rounded-md my-5">
          <p
            className={`${
              choice === "month" ? "text-Purplish-blue" : "text-Cool-gray"
            } font-bold`}
          >
            Monthly
          </p>
          <span className="bg-Marine-blue flex items-center justify-between rounded-[3rem] w-10 p-1">
            <button
              className={`w-4 rounded-full h-4 ${
                choice === "month" && "bg-White"
              }`}
              onClick={() => setChoice("month")}
            ></button>
            <button
              className={`w-4 rounded-full h-4 ${
                choice === "year" && "bg-White"
              }`}
              onClick={() => setChoice("year")}
            ></button>
          </span>
          <p
            className={`${
              choice === "year" ? "text-Purplish-blue" : "text-Cool-gray"
            } font-bold`}
          >
            Yearly
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center md:px-0 bg-Alabaster py-3 mt-10 px-[5%] md:bg-White md:mt-20 md:mx-auto lg:w-[450px]">
        <BackButton />
        <NextStep href={`/addOns?plan=${choice}&type=${type}`} />
      </div>
    </div>
  );
}

export default Page;
