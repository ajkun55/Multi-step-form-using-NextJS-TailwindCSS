import Image from "next/image";

function Page() {
  return (
    <div className="bg-White rounded-2xl w-11/12 mx-auto p-6 -translate-y-16 md:max-w-[33.5rem] md:p-1 md:translate-y-0 text-center grid place-content-center min-h-96">
      <Image
        src="/icon-thank-you.svg"
        alt=""
        width={80}
        height={80}
        className="mx-auto md:mb-5"
      />
      <h1 className="text-Marine-blue text-2xl my-3 font-bold md:text-[2rem]">
        Thank you!
      </h1>
      <p className="text-Cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Page;
