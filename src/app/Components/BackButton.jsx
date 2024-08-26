import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button
      className="text-Cool-gray font-bold hover:text-Marine-blue"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
}

export default BackButton;
