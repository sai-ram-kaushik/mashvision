import React from "react";

const AboutCompany = ({ about }) => {
  const { title, content, image } = about;
  return (
    <div className="w-full px-5 lg:px-10 py-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>{title}</h3>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-5 lg:gap-64 mt-5">
          <p>{content}</p>
          <img src={image} width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

