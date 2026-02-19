import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function BackBtn() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2   pb-10 pt-5  text-3xl rounded-md "
    >
       <IoIosArrowRoundBack />
    </button>
  );
}
