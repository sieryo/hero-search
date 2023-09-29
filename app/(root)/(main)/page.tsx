import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <div className=" min-h-[1000px] md:pt-10 pt-[100px]">
        <div className="w-full relative h-full p-5 ">
          <div className="w-full h-[700px] relative">
            <Image
              src="/landing-page.jpg"
              fill
              alt="landing"
              className=" object-cover"
            />
          </div>

          <div className="absolute bg-background w-[200px] h-[60px] right-0 top-[20%] rounded-lg">
            <div className="absolute right-[20px] top-[calc(0%-0.7rem)] -rotate-180 z-30 ">
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[11px] h-[11px]"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="absolute right-[20px] top-[calc(100%)] rotate-90 z-30 ">
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[11px] h-[11px]"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
          <div className="absolute bg-background w-[80px] h-[200px] left-[80px] top-0 rounded-lg">
            <div className="absolute left-[calc(0%-11px)] top-[calc(0%+20px)] rotate-90 z-30 ">
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[11px] h-[11px]"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="white"
                ></path>
              </svg>
            </div>
            <div className="absolute  right-[calc(0%-11px)] top-[calc(0%+20px)]  z-30 ">
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[11px] h-[11px]"
              >
                <path
                  d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                  fill="white"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen">
        <div className="w-[150px] h-[150px] bg-[#003967]"></div>
      </div>
    </div>
  );
}
