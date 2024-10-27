import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [sec, setSec] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [Hr, setHr] = useState<number>(0);

  const seconds = () => {
    setSec((el: number) => {
      if (el + 1 === 60) {
        minutes();
        return 0;
      }
      return el + 1;
    });
  };

  const minutes = () => {
    setMin((el: number) => {
      if (sec === 60) {
        hour();
        return 0;
      }
      return el + 1;
    });
  };

  const hour = () => {
    setHr((el: number) => el + 1);
  };

  useEffect(() => {
    const x = setTimeout(() => {
      seconds();
      clearTimeout(x);
    }, 1000);
  }, [sec]);

  return (
    <div className="w-full h-[25rem] flex justify-center items-center">
      <div className="w-[400px] h-[300px] border rounded-md flex justify-center items-center ">
        <div className="w-full h-[60px]  border rounded-md bg-green-500 flex justify-evenly items-center animate-pulse text-white ">
          <div>{sec}</div>
          <div>{min}</div>
          <div>{Hr}</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
