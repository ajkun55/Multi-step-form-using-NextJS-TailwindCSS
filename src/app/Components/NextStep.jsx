import Link from "next/link";

function NextStep({ href, text = "Next Step" }) {
  return (
    <Link
      href={href}
      className={`${
        text === "Confirm" ? "bg-Purplish-blue" : "bg-Marine-blue"
      } text-White rounded-md w-[125px] grid place-content-center ml-auto p-2 hover:brightness-150`}
    >
      {text}
    </Link>
  );
}

export default NextStep;
