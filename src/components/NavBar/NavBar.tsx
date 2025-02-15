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

    return (        
        <div className="relative flex items-center justify-center bg-red-500 h-20">
            <div className="absolute left-12 px-10 bg-blue-500 text-xl ">SWAPSPACE</div>
            <div className="flex ml-40 gap-10 text-xl ">
                {menuItems.map((element,i)=>(
                <Link key={i+1} href={{pathname : `${element.name}`, query :`${element.link}`}}>
                    <p>{element.name}</p>
                </Link>
                ))}
            </div>
            <div className="px-10 flex justify-center items-center">
                <input type="text" className="rounded-lg bg-blue-500 px-14 h-10" />
            </div>
            <div className="flex gap-10 absolute right-12 text-xl">
                <div className="">network name</div>
                <div><button onClick={()=>{}}>address</button></div>
                {openModel && (
                    <Model setOpenModel = {setOpenModel} connectWallet="connect"/>
                )}
            </div>
                {openTokenBox && (
                    <TokenList tokenData="asd" setOpenTokenBox={setOpenTokenBox}/>
                )}
        </div>
    )
}
