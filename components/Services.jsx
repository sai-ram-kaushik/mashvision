import React from "react";

const Services = ({ services }) => {
  const { title, content } = services;
  return (
    <div className="w-full px-5 lg:px-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>{title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-10 mt-5">
          {content.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-start min-w-[12rem] min-h-[8rem] border border-secondary p-3 rounded-xl"
              >
                <h4>{service.label}</h4>
                <p className="max-w-[300px]">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
