"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BackButton from "../Components/BackButton";
import NextStep from "../Components/NextStep";

function Page() {
  const params = useSearchParams();
  const plan = params.get("plan");
  const type = params.get("type");
  const ad1 = params.get("ad1") === "true";
  const ad2 = params.get("ad2") === "true";
  const ad3 = params.get("ad3") === "true";

  const time = plan === "month" ? "mo" : "yr";
  const price = plan === "month" ? 9 : 90;
  const priceAd1 = ad1 ? (plan === "month" ? 1 : 10) : 0;
  const priceAd2 = ad2 ? (plan === "month" ? 2 : 20) : 0;
  const priceAd3 = ad3 ? (plan === "month" ? 2 : 20) : 0;
  const total = price + priceAd1 + priceAd2 + priceAd3;
  return (
    <div className="lg:min-w-[33.5rem]">
      <div className="bg-White rounded-2xl w-11/12 mx-auto  lg:w-[450px] p-6 md:px-0 -translate-y-16 md:translate-y-0">
        <h1 className="text-Marine-blue text-2xl my-3 font-bold md:text-[2rem]">
          Finishing up
        </h1>
        <p className="text-Cool-gray">
          Double-check everything looks OK before confirming.
        </p>

        <div className="bg-Alabaster p-3 rounded-md my-6">
          <div className="flex justify-between items-center my-3">
            <span className="">
              <h2 className="text-Marine-blue font-bold">
                {type}({plan === "month" ? "Monthly" : "Yearly"})
              </h2>
              <Link href={"/selectPlan"} className="text-Cool-gray underline">
                Change
              </Link>
            </span>

            <p className="text-Marine-blue font-bold">
              +${price}/{time}
            </p>
          </div>

          {ad1 && (
            <div className="flex justify-between items-center my-3">
              <p className="text-Cool-gray">Online services</p>
              <p className="text-Marine-blue">
                +${priceAd1}/{time}
              </p>
            </div>
          )}
          {ad2 && (
            <div className="flex justify-between items-center my-3">
              <p className="text-Cool-gray">Larger storage</p>
              <p className="text-Marine-blue">
                +${priceAd2}/{time}
              </p>
            </div>
          )}
          {ad3 && (
            <div className="flex justify-between items-center my-3">
              <p className="text-Cool-gray">Customizable Profile</p>
              <p className="text-Marine-blue">
                +${priceAd3}/{time}
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-Cool-gray">Total (per {plan})</p>
          <p className="text-Purplish-blue font-bold text-xl">
            +${total}/{time}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center md:px-0 bg-Alabaster py-3 mt-10 px-[5%] md:bg-White md:!mt-20 md:mx-auto lg:w-[450px]">
        <BackButton />
        <NextStep href={`/thanks`} text={"Confirm"} />
      </div>
    </div>
  );
}

export default Page;
