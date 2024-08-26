"use client";
import { usePathname } from "next/navigation";

function SideNav() {
  const pathname = usePathname();
  console.log(pathname);

  const contents = [
    { id: 1, step: "Step 1", heading: "Your info" },
    { id: 2, step: "Step 2", heading: "Select plan" },
    { id: 3, step: "Step 3", heading: "Add-ons" },
    { id: 4, step: "Step 4", heading: "Summary" },
  ];
  return (
    <div className="flex justify-center gap-6 md:flex-col md:justify-start md:p-8 md:gap-0 bg-mobile md:bg-desktop h-full bg-cover">
      {contents.map((c) => (
        <div key={c.id} className="flex mt-10 md:m-2 md:gap-5 md:items-center">
          <p
            className={`border rounded-full border-White text-White p-2 w-8 h-8 grid place-content-center ${
              pathname === "/" &&
              c.id === 1 &&
              "bg-Light-blue !text-Marine-blue border-none"
            } ${
              pathname === "/selectPlan" &&
              c.id === 2 &&
              "bg-Light-blue !text-Marine-blue border-none"
            } ${
              pathname === "/addOns" &&
              c.id === 3 &&
              "bg-Light-blue !text-Marine-blue border-none"
            } ${
              (pathname === "/summary" || pathname === "/thanks") &&
              c.id === 4 &&
              "bg-Light-blue !text-Marine-blue border-none"
            }`}
          >
            {c.id}
          </p>
          <span className="hidden md:block">
            <p className="text-Cool-gray uppercase">{c.step}</p>
            <p className="uppercase font-medium text-White tracking-wider">
              {c.heading}
            </p>
          </span>
        </div>
      ))}{" "}
    </div>
  );
}

export default SideNav;
