"use client"
import { space } from "postcss/lib/list";
import React , {FC, useState} from "react";

export const SearchToken = ({openToken , tokens , tokenData}) =>{

    const [ active , setActive ] = useState(1)
    const coin = [
        {
            img : "asda",
            name : "DOGE"
        },        {
            img : "asda",
            name : "DAI"
        },
        {
            img : "asda",
            name : "FUN"
        },
        {
            img : "asda",
            name : "WETH9"
        },
        {
            img : "asda",
            name : "UNI"
        },
        {
            img : "asda",
            name : "TIME"
        },
        {
            img : "asda",
            name : "SHIBAINU"
        },
        {
            img : "asda",
            name : "OOO"
        },
        {
            img : "asda",
            name : "HEY"
        }
    ]
    return (
        <div className="relative inset-0 flex bg-blue-500 w-full h-full items-center justify-center z-[9999] text-xl">
        {/* Black overlay */}
        <div className="fixed inset-0 bg-slate-900"></div>
          <div className="z-[10] bg-slate-900 border w-[32vw] h-fit p-10 rounded-lg">
                {/* top part */}
                <div className="flex justify-between pb-4">
                        <div className="">
                            Search token
                        </div>
                            <button onClick={()=>{openToken(false)}}>X</button>
                </div>
                {/* mid part */}
                <div>
                    <input type="text" className="w-full rounded-lg text-slate-400 text-sm p-2 bg-slate-900 border" placeholder="Search Token..." />
                </div>

                {/* coin part */}
                <div className="grid grid-cols-6 gap-3 pt-3">
                    {coin.map((el,i)=>(
                        <span key={i+1} className={active == i+1 ? "flex text-sm bg-blue-500 rounded h-8 w-16 items-center justify-center":"flex text-sm bg-blue-800 rounded h-8 w-16 items-center justify-center"} onClick={()=>(setActive(i+1),tokens({
                            name : el.name,
                            img : el.img
                        }))}>
                            <img src="../../../public/file.svg" alt="" />
                            {el.name}
                        </span>
                    ))}
                </div>

          </div>
      </div>
    )
}
