"use client";
import Image from "next/image";
import { useState } from "react";
import BackButton from "../Components/BackButton";
import NextStep from "../Components/NextStep";
import { useSearchParams } from "next/navigation";

function Page() {
  const [ad1, setAd1] = useState(true);
  const [ad2, setAd2] = useState(true);
  const [ad3, setAd3] = useState(false);
  const params = useSearchParams();
  const plan = params.get("plan");
  const type = params.get("type");

  let price1, price2;

  if (plan === "month") {
    price1 = "+$1/mo";
    price2 = "+$2/mo";
  } else {
    price1 = "+$10/yr";
    price2 = "+$20/yr";
  }

  return (
    <div className="lg:min-w-[33.5rem]">
      <div className="bg-White rounded-2xl w-11/12 mx-auto p-6 lg:w-[450px] md:px-0 -translate-y-16 md:translate-y-0">
        <h1 className="text-Marine-blue text-2xl my-3 font-bold md:text-[2rem]">
          Pick add-ons
        </h1>
        <p className="text-Cool-gray">
          Add-ons help enhance your gaming experience.
        </p>
        <div
          className={`flex justify-between items-center rounded-md p-3 my-3 mt-6 border md:px-6 ${
            ad1 ? "border-Purplish-blue bg-Magnolia" : "border-Light-gray"
          }`}
          onClick={() => setAd1(!ad1)}
        >
          <div className="flex items-center gap-5">
            <span
              className={`${
                ad1 && "bg-Purplish-blue"
              } w-4 h-4 grid place-content-center`}
            >
              <Image
                src="/icon-checkmark.svg"
                width={12}
                height={9}
                alt=""
                className={`${!ad1 && "hidden"}`}
              />
            </span>
            <span>
              <h2 className="text-Marine-blue font-bold">Online service</h2>
              <p className="text-Cool-gray">Access to multiplayer games</p>
            </span>
          </div>
          <p className="text-Purplish-blue">{price1}</p>
        </div>
        <div
          className={`flex justify-between items-center rounded-md p-3 my-3 border md:px-6 ${
            ad2 ? "border-Purplish-blue bg-Magnolia" : "border-Light-gray"
          }`}
          onClick={() => setAd2(!ad2)}
        >
          <div className="flex items-center gap-5">
            <span
              className={`${
                ad2 && "bg-Purplish-blue"
              } w-4 h-4 grid place-content-center`}
            >
              <Image
                src="/icon-checkmark.svg"
                width={12}
                height={9}
                alt=""
                className={`${!ad2 && "hidden"}`}
              />
            </span>
            <span>
              <h2 className="text-Marine-blue font-bold">Larger storage</h2>
              <p className="text-Cool-gray">Extra 1TB of cloud save</p>
            </span>
          </div>
          <p className="text-Purplish-blue">{price2}</p>
        </div>
        <div
          className={`flex justify-between items-center rounded-md my-3 p-3 border md:px-6 ${
            ad3 ? "border-Purplish-blue bg-Magnolia" : "border-Light-gray"
          }`}
          onClick={() => setAd3(!ad3)}
        >
          <div className="flex items-center gap-5">
            <span
              className={`${
                ad3 && "bg-Purplish-blue"
              } w-4 h-4 grid place-content-center`}
            >
              <Image
                src="/icon-checkmark.svg"
                width={12}
                height={9}
                alt=""
                className={`${!ad3 && "hidden"}`}
              />
            </span>
            <span>
              <h2 className="text-Marine-blue font-bold">
                Customizable Profile
              </h2>
              <p className="text-Cool-gray">Custom theme on your profile</p>
            </span>
          </div>
          <p className="text-Purplish-blue">{price2}</p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-Alabaster md:px-0 py-3 mt-10 px-[5%] md:bg-White lg:mt-20 md:mx-auto lg:w-[450px]">
        <BackButton />
        <NextStep
          href={`/summary?plan=${plan}&type=${type}&ad1=${ad1}&ad2=${ad2}&ad3=${ad3}`}
        />
      </div>
    </div>
  );
}

export default Page;
