import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-green h-2" />
      <main className="flex flex-col w-full   py-10 ">
        <div className="md:w-1/2 w-5/6 mx-auto flex flex-col gap-10">
          <div className="w-full flex flex-col items-center  py-10">
            <Image
              src={"/mainlogo.png"}
              width={1920}
              height={1080}
              className="w-32 h-32"
            />
          </div>
          <div className="">
            <p>
              Over the last 30 years we at Business Lenders have been fortunate
              to provide aid and counsel to our fellow entrepreneurs as we grew
              our own business alongside theirs. I thank Business Lenders
              employees. What is a company without devoted employees? I also
              thank the people at Medallion Financial Corporation and Merrill
              Lynch/Bank of America for their trust in us, as measured by their
              providing us with warehouse credit facilities, and patience
              through mutually challenging times.
            </p>
          </div>
          <div className="flex flex-row gap-10 ">
            <Image
              src={"/penn_headshot.png"}
              width={1080}
              height={1080}
              className="w-1/3 h-fit"
            />
            <p>
              While I don’t come close to believing all good things must come to
              an end, a business needs to know when to hold ‘em and when to fold
              ‘em. We’ve ceased lending but have engaged resources to continue
              to support former borrowers who may need assistance. Please call
              860-244-9202 if you do.
            </p>
          </div>
          <div className="w-1/3  ">
            <p>Sincerely, </p>
            <Image
              src={"/penn_signature.png"}
              width={1080}
              height={1080}
              className="w-full h-fit"
            />
            <p>Penn Ritter Founder and Chairman</p>
          </div>
        </div>
      </main>
      <footer className="bg-green w-full">
        <div className="md:w-1/2 w-5/6  mx-auto py-10 flex md:flex-row flex-col gap-10 text-black text-small">
          <div className="flex flex-col gap-5 w-2/3 ">
            <p>P.O. Box 370127 | West Hartford, CT 06137-0127 </p>
            <p>Copyright © 2023 Business Lenders, LLC </p>
            <p>All Image & Photographs All Right Reserved </p>
          </div>
          <div className=" w-fit flex flex-col gap-5">
            <div className="flex flex-row gap-5">
              <Image src={"/phone-icon.svg"} width={20} height={20} />
              <p>1-860-244-9202</p>
            </div>
            <div className="flex flex-row gap-5">
              <Image src={"/mail-icon.svg"} width={20} height={20} />

              <p>
                <a href="mailto:jhart@businesslenders.com">
                  jhart@businesslenders.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
