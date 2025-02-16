import React , {FC} from "react";

export const TokenList = ({tokenData , setOpenTokenBox}) =>{
    const data = ["ETH",3,4,5,6,7,1,1,1,1,1,1,1,1,]
    return (
            <div className=" absolute right-0 w-[16vw] max-h-80 scrollbar-hidden overflow-y-auto p-4 bg-slate-900 border shadow-lg rounded-2xl mr-10 mt-24 z-[99]">
              <h2 className="text-xl font-bold mb-4 flex justify-between bg-slate-900 text-slate-400">
                <div>Tokens</div> <div className="px-1 cursor-pointer" onClick={()=>{
                    setOpenTokenBox(false)
                }}>X</div>
              </h2>
              <div className="divide-y divide-gray-300">
                {data.map((item, index) => (
                  <div key={index} className="bg-slate-700 flex gap-y-2 rounded-lg h-[3vw] items-center pl-4">
                    <div className="flex">
                        <img src="ad" className="pr-1" alt="asd" /> {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
    )
}
