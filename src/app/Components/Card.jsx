import Image from "next/image";

function Card({ choice, type, setType, selected }) {
  let price;
  if (choice === "month") {
    if (type === "arcade") {
      price = "$9/mo";
    } else if (type === "advanced") {
      price = "$12/mo";
    } else {
      price = "$15/mo";
    }
  } else {
    if (type === "arcade") {
      price = "$90/yr";
    } else if (type === "advanced") {
      price = "$120/yr";
    } else {
      price = "$150/yr";
    }
  }
  return (
    <div
      className={`border border-Light-gray rounded-md cursor-pointer p-3 my-3 flex md:flex-col lg:w-[140px] md:p-4 gap-5 ${
        selected && "border-Purplish-blue bg-Magnolia"
      }`}
      onClick={() => setType(type)}
    >
      <Image src={`/icon-${type}.svg`} alt="" width={40} height={40} />
      <span>
        <h2 className="font-bold text-Marine-blue">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h2>
        <p className="text-Cool-gray">{price}</p>
        {choice === "year" && (
          <p className="text-Purplish-blue">2 months free</p>
        )}
      </span>
    </div>
  );
}

export default Card;
