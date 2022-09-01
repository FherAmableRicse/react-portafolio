import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/fheramablericse/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/FherAmableRicse",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:amablericsefher@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          CV <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/CV_AMABLERICSEFHER.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];