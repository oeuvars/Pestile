import Link from "next/link";
import { useState } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AnimatePresence, motion } from "framer-motion";

interface MobileNavLinkProps {
  title: string;
  link: string;
}

const navLinks = [
  { title: "Home", link: "/" },
  { title: "Blogs", link: "/blogs" },
  { title: "features", link: "/#features" },
  { title: "Pricing", link: "/#pricing" },
  { title: "About Us", link: "/#about-us" },
];
const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <div className="flex justify-between items-center px-[4vw] mx-auto py-4 backdrop-blur-md border-b-2 border-[#F1ECE0] fixed top-0 w-full">
        <Link href="/">
          <img src='icons/pestile.svg' className='w-28 hover:upper-card-shadow cursor-pointer'/>
        </Link>
        <div
          className="cursor-pointer lg:hidden text-black"
          onClick={toggleMenu}
        >
          <img src="icons/hamburger.svg" alt="menu" className="w-7 h-7 my-auto"/>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-[#FBF6EA] text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-4xl text-black font-dynalight">Pestile</h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  <img src="icons/x.svg" alt="x" className="w-7 h-7 my-auto" />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-5"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden" key={index}>
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        link={link.link}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink: React.FC<MobileNavLinkProps> = ({ title, link }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-lg font-satoshi-medium text-black tracking-tight"
    >
      <AnchorLink href={link}>{title}</AnchorLink>
    </motion.div>
  );
};
