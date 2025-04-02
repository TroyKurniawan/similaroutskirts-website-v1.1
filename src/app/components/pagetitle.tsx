import React from "react";

type PageTitleProps = {
  title: string;
};

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="w-screen flex justify-center place-items-center mt-24 animate-fadeInSlide">
      <div>
        <h1
          className="text-4xl font-black text-blue-500 w-fit pb-2 uppercase
                  border-b-4 md:border-b-8 border-blue-500
                  md:text-6xl lg:text-7xl"
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

export default PageTitle;
