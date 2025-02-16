"use client"
import React , {FC, useState} from "react";
import {Token , SearchToken} from "../index"
export const HeroSection = ({ accounts , tokenData }) =>{
    const [openSetting , setOpenSetting] = useState(false)
    const [openToken ,setOpenToken] = useState(false)
    const [openTokensTwo,setOpenTokensTwo] = useState(false)

    const [tokenOne , setTokenOne] = useState({
        name : "",
        image : ""
    })

    const [tokenTwo , setTokenTwo] = useState({
        name : "",
        image : ""
    })


    return (
        <div className="flex relative z-50 justify-center items-center">
            <div className="flex items-center px-96 justify-center h-screen">
                <div className="bg-gradient-to-r from-slate-700 via-slate-300 to-slate-400 w-4/5 h-96 mb-32 rounded-lg p-0.5">
                    <div className="bg-slate-900 h-full w-full text-slate-300 text-3xl">
                        <div className="flex justify-between py-5 pt-10 px-10">
                            <div>Swap</div>
                            <div><button onClick={()=>{setOpenSetting(true)}}>b</button></div>
                        </div>
                        <div className=" px-10 pt-10 ">
                            <div className="flex">
                            <input type="text" placeholder="0" className="w-full pr-20 pl-4 py-2 border border-slate-700 bg-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"/>
                            <div className="pl-1"><button className="bg-slate-900 h-full border w-40 rounded-xl">ETH</button>
                            </div>
                            </div>
                        </div>
                        <div className=" px-10 pt-5 ">
                            <div className="flex">
                            <input type="text" placeholder="0" className="w-full pr-20 pl-4 py-2 border border-slate-700 bg-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"/>
                            <div className="pl-1"><button className="bg-slate-900 h-full border w-40 rounded-xl">ETH</button>
                            </div>
                            </div>
                        </div>                      
                        <div className="">
                            <div className="flex justify-center items-center pt-10 w-full px-10 ">
                            {accounts? (
                                <button className="border border-slate-700 w-full rounded-full p-2 text-xl uppercase">connect</button>
                            ): <button className="border border-slate-700 w-full rounded-full p-2 text-xl uppercase" onClick={()=>{}}>Swap</button> 
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <>for the dynamic block</> */}
            <div className="fixed mb-32 text-white">
                {
                    openSetting && <Token setOpenSetting={setOpenSetting}></Token>
                }
            </div>
            {
                openToken && (
                    <SearchToken openToken={setOpenToken} tokens={setTokenOne} tokenData={tokenData}></SearchToken>
                )
            }
            {
                openToken && (
                    <SearchToken openToken={setOpenToken} tokens={setTokenOne} tokenData={tokenData}></SearchToken>
                )
            }
        </div>
    )
}
