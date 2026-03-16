import { Link } from "react-router";

interface PropTypes {
  backLink: string;
  linkTxt: string;
}

function CancelBtn({ backLink, linkTxt }: PropTypes) {
  return (
    <>
      <Link
        to={backLink}
        className="border-3 border-gray-700 text-lg text-center py-1.5 px-4 rounded-md bg-gray-700 text-white capitalize ms-2 w-[200px] shadow-md hover:shadow-lg"
      >
        {linkTxt}
      </Link>
    </>
  );
}

export default CancelBtn;
