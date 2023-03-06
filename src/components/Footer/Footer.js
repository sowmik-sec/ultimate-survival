import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-600 p-12 flex flex-col justify-center items-center">
      <button className="text-white w-56">Terms </button>
      <button className="text-white w-56">Cookie setting </button>
      <button className="text-white w-56">Sitemap </button>
      <button className="text-white w-56">Privacy policy </button>
      <button className="text-white w-56">Accessibility statement </button>
      <p className="text-white">
        <small>© 2023 Ultimate Survival all right reserves</small>
      </p>
    </div>
  );
};

export default Footer;
