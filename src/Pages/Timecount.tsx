import { FaPeace } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";

const Timecount = () => {
  const data = [
    {
      id: 1,
      title: "Virtual machines",
      content:
        "DigitalOcean Droplets are simple, scalable virtual machines for all your web hosting and VPS hosting needs.",
      linkPath: "VPS hosting",
      icon: <FaPeace />,
    },
    {
      id: 2,
      title: "Virtual machines",
      content:
        "DigitalOcean Droplets are simple, scalable virtual machines for all your web hosting and VPS hosting needs.",
      linkPath: "VPS hosting",
      icon: <FaPeace />,
    },
    {
      id: 3,
      title: "Virtual machines",
      content:
        "DigitalOcean Droplets are simple, scalable virtual machines for all your web hosting and VPS hosting needs.",
      linkPath: "VPS hosting",
      icon: <FaPeace />,
    },
    {
      id: 4,
      title: "Virtual machines",
      content:
        "DigitalOcean Droplets are simple, scalable virtual machines for all your web hosting and VPS hosting needs.",
      linkPath: "VPS hosting",
      icon: <FaPeace />,
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="max-w-[1000px] min-h-5">
        <div className="m-4 flex gap-4 flex-wrap justify-center mx-4">
          {data?.map((el: any) => (
            <div className="bg-slate-50 text-black border-4 rounded-2xl lg:w-[380px] h-[340px] py-10 px-10 flex flex-col ">
              <div className="flex items-center gap-6 mb-10">
                <div>{el.icon}</div>
                <div>{el.title}</div>
              </div>
              <div>
                <div className="w-full h-5 border-t-[3px]  border-dashed " />
              </div>
              <div>
                2DigitalOcean Droplets are simple, scalable virtual machines for
                all your web hosting and{" "}
                <span className="  text-black underline hover:bg-blue-600 hover:text-white hover:cursor-pointer translate-y-1 transition-all duration-300 ">
                  VPS hosting
                </span>{" "}
                needs.
              </div>

              <div className="flex-1" />
              <div className="gap-4 hover:cursor-pointer *:hover:scale-100">
                <div className="flex items-center ">
                  <p>Learn More</p>{" "}
                  <span>
                    <MdArrowForward />
                  </span>
                </div>
                <div className="border-2 border-black w-[110px] transition-all duration-300 scale-0 " />
              </div>
            </div>
          ))}

          {/* <div className="max-w-[1000px] bg-red-500 h-10 mt-20 ">
          <div className="bg-blue-500 h-10 w-[1200px]"></div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Timecount;
