import React , {FC ,useEffect ,useState} from "react";

interface Props{
    setOpenModel  : (value:boolean) => (void);
}

export const Model:FC<Props> = ({setOpenModel , connectWallet}) =>{
    const walletMenu = ["MetaMask" , "Phantom" , "Coinbase"] 
    return (<div className="z-[1111] backdrop-blur-sm absolute w-full h-screen flex items-center justify-center inset-0 ">
        <div className="p-5 bg-slate-600 rounded-lg shadow-xl text-3xl ">
            <div className="flex pb-6">
                <span className="pr-10 font-bold">Connect a wallet </span><div className="pl-2"><button onClick={()=>(setOpenModel(false))}>b</button></div> 
            </div>
            <div className="gap-2 flex flex-col">
                {walletMenu.map((wallet,index)=>(
                <div className="bg-slate-800 text-slate-400 font-light text-lg rounded-2xl p-3 " key={index}>
                    {wallet}
                </div>
                ))}
            </div>
        </div>
        </div>
    )
}
