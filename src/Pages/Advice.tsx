import React, { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="w-full h-[20rem] justify-center items-center flex flex-col gap-4 pt-[70px] ">
      <div className="w-[500px] min-h-[140px] border rounded-md animate-[refine-slide] bg-black flex justify-center items-center text-[30px] text-white">
        {advice}
      </div>
      <button className="p-4 rounded-md border " onClick={getAdvice}>
        Get advice
      </button>
      <Message count={count} />
    </div>
  );
};

const Message = (props: any) => {
  return (
    <p>
      You have clicked the button for <strong>{props.count}</strong> time(s)
    </p>
  );
};

export default Advice;
