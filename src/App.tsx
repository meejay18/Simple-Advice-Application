import React, { useState, useEffect } from "react";
import { FcRating } from "react-icons/fc";

const App = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        setData(products);
      });
  }, []);
  return (
    <div className="w-full h-[200rem]  flex flex-col justify-center items-center ">
      <div className="w-[250px] mb-5 flex justify-center items-center text-[30px] h-[50px] text-white bg-blue-800">
        E-COMMERCE
      </div>
      <div className="w-[1200px] h-[99%] bg-[white]  border rounded-md grid grid-cols-3 place-items-center gap-y-2 ">
        {data.map((el: any) => (
          <div className="w-[300px] h-[420px]  shadow-xl border rounded-md">
            <div className="flex ">
              <div className="w-[80%] h-[60px] text-center text-[12px] justify-center items-center flex font-semibold ">
                {el.title}
              </div>
              <div className="items-center justify-center flex">{el.price}</div>
            </div>
            <div className="w-full h-[30px] uppercase flex justify-center items-center font-semibold bg-blue-800  text-white">
              {el.category}
            </div>
            <img className="w-[100%] h-[50%]" src={el.image} alt="" />

            <div className="w-[100%] h-[50px] font-medium text-[10px] ">
              {el.description.slice(0, 200)}...
            </div>

            <div className="w-[100%] h-[50px]  flex justify-between  items-center">
              <button className=" px-4 py-2 text-[12px] flex justify-between mt-4 items-center  bg-blue-800 border rounded-md text-white">
                ADD TO CART
              </button>
              <div className="w-[70px] h-[50px]  flex gap-3 justify-center  mt-4 items-center">
                <FcRating /> {el.rating.rate.toFixed()}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
