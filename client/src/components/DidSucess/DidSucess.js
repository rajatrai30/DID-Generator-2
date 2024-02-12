import React from "react";
// import "./DidComponent.scss";
import { Checkmark } from "react-checkmark";

function DidSucess() {
  return (
    <>
      <section className="bg-[#99da80]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow-md dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="flex flex-row items-center justify-evenly p-6 sm:p-4">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                DID Generated
              </h1>
            </div>
            <div className="flex flex-row items-center justify-evenly p-6 sm:p-4">
              <Checkmark size={"196"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DidSucess;
