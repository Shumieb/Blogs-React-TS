import { Link } from "react-router";
import { FaGithub, FaDisplay, FaLinkedin } from "react-icons/fa6";

function SocialsLinks() {
  return (
    <>
      <Link
        to="https://www.linkedin.com/in/shumirai-chirairo-5800642a2/"
        target="_blank"
        className="text-3xl text-purple-950 py-2 me-3"
      >
        <FaLinkedin />
      </Link>
      <Link
        to="https://github.com/Shumieb"
        target="_blank"
        className="text-3xl text-purple-950 py-2 me-3"
      >
        <FaGithub />
      </Link>
      <Link
        to="/"
        target="_blank"
        className="text-3xl text-purple-950 py-2 me-3"
      >
        <FaDisplay />
      </Link>
    </>
  );
}

export default SocialsLinks;
