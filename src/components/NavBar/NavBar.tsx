"use client"    
import React , {FC , useState , useEffect , useContext} from "react";
import Image from "next/image";
import Link from "next/link";
import { Model , TokenList} from "../index";

export const NavBar = ({}) =>{
    const menuItems = [
        {
            name : "Swap",
            link : '/'
        },        {
            name : "Tokens",
            link : '/'
        },        {
            name : "Pools",
            link : '/'
        }
    ]

    const [openModel , setOpenModel] = useState(false)
    const [openTokenBox ,setOpenTokenBox] = useState(false)
    const [account , setAccount] = useState(false)

    return (     
        <div className="">   
        <div className="relative flex items-center justify-center bg-slate-700 h-20 text-white z-[999]">
            <div className="absolute left-12 px-10 text-xl font-bold shadow-lg">SWAPSPACE</div>
            <div className="flex ml-40 gap-10 text-xl font-light">
                {menuItems.map((element,i)=>(
                <Link key={i+1} href={{pathname : `${element.name}`, query :`${element.link}`}}>
                    <p>{element.name}</p>
                </Link>
                ))}
            </div>
            <div className="px-10 flex justify-center items-center">
                <input type="text" className="rounded-lg bg-slate-700 border w-[20vw] pl-5 h-10" placeholder="Find Token..." />
            </div>
            <div className="flex gap-10 absolute right-12 text-sm font-light">
                <div className="h-10 w-36 flex justify-center items-center rounded-lg bg-slate-800">Network Name</div>
                <div className=" h-10 w-24 flex justify-center items-center rounded-lg bg-slate-800 ">
                    {account ? (
                        <button onClick={()=>{setOpenTokenBox(true)}}>0xHdaSKJDHK...</button>
                    ) : ( 
                    <button onClick={()=>{setOpenModel(true)}}>CONNECT</button>
                )}
                </div>
            </div>
        </div>
        <div className="">{openModel && (
            <Model setOpenModel = {setOpenModel} connectWallet="connect"/>
        )}
        {!openTokenBox && (
                    <TokenList tokenData="asd" setOpenTokenBox={setOpenTokenBox}/>
                )}
        </div>
        </div>
    )
}
