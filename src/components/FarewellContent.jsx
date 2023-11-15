import Image from "next/image";
import React from "react";

const FarewellContent = () => {
  return (
    <main className="flex flex-col w-full   py-10 ">
      <div className="md:w-1/2 w-5/6 mx-auto flex flex-col gap-10">
        <div className="w-full flex flex-col items-center  py-10">
          <Image
            src={"/business-lenders-logo-280x280.png"}
            width={1920}
            height={1080}
            className="w-48 h-48"
            alt="Business Lenders logo"
          />
        </div>
        <div className="">
          <p>
            Over the last 30 years we at Business Lenders have been fortunate to
            provide aid and counsel to our fellow entrepreneurs as we grew our
            own business alongside theirs. I thank Business Lenders employees.
            What is a company without devoted employees? I also thank the people
            at Medallion Financial Corporation and Merrill Lynch/Bank of America
            for their trust in us, as measured by their providing us with
            warehouse credit facilities, and patience through mutually
            challenging times.
          </p>
        </div>
        <div className="flex flex-row gap-10 ">
          <Image
            src={"/penn_headshot.png"}
            width={1080}
            height={1080}
            className="w-1/3 h-fit"
            alt="Penn Ritter headshot"
          />
          <div className="flex flex-col gap-5">
            <p>
              While I don’t come close to believing all good things must come to
              an end, a business needs to know when to hold ‘em and when to fold
              ‘em. We’ve ceased lending but have engaged resources to continue
              to support former borrowers who may need assistance.
            </p>
            <p className="font-bold">
              Please call{" "}
              <a className="text-green underline" href="tel:+1-860-244-9202">
                {" "}
                860-244-9202
              </a>{" "}
              if you do.
            </p>
          </div>
        </div>
        <div className="w-1/3  ">
          <p>Sincerely, </p>
          <Image
            src={"/penn_signature.png"}
            width={1080}
            height={1080}
            className="w-fit h-fit"
            alt="Penn Ritter signature"
          />
          <p>
            Penn Ritter <br /> Founder and Chairman
          </p>
        </div>
      </div>
    </main>
  );
};

export default FarewellContent;
