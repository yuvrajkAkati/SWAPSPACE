import React , {useState,useEffect,useContext} from "react";
import { Toggle } from "../index";

export const Token = ({setOpenSetting}) => {  
    return (
        <div className="bg-slate-900 relative border w-[36vw] h-[30vw] text-xl rounded-lg ">
           <div className="w-full h-full p-10">
             {/* top components */}
                <div className="flex items-center justify-between w-full pb-7">
                    <div>
                        SETTINGS
                    </div>
                    <div>
                        <button onClick={()=>{
                            setOpenSetting(false)
                        }}>
                            b
                        </button>
                    </div>
                </div>
                {/* slip tolerance */}
                <div className="pb-7">
                    <div className="pb-4">
                        Slippage tolerance
                    </div>
                    <div className="flex">
                        <div>
                            <button className="bg-black rounded p-2 text-lg">Auto</button>
                        </div>
                        <div className="flex justify-center pl-1 w-full">
                            <input type="text" placeholder="0" className="pl-5 bg-slate-900 border rounded-lg w-full"/>
                        </div>
                    </div>
                </div>
                {/* time */}
                <div>
                    <div className="pb-4">
                        Slippage tolerance
                    </div>
                    <div className="flex">
                        <div className="flex justify-center pr-1 w-full">
                            <input type="text" placeholder="0" className="pl-5 bg-slate-900 border rounded-lg w-full"/>
                        </div>
                        <div>
                            <button className="bg-black rounded p-2 text-lg">Auto</button>
                        </div>
                    </div>
                </div>
                {/* interface */}
                <div className="py-7">
                    <div className="pb-2 ">
                        Interface Settings
                    </div>
                    <div className="flex flex justify-between">
                        <div className="text-lg">
                            Transaction Deadline
                        </div>
                        <div>
                            <Toggle/>
                        </div>  
                    </div>
                </div>


           </div>
        </div>
    )
}


// {/* <div className="">
//            <div className="bg-red-500 h-96 flex w-full items-center justify-center">
//             {/* top componnet */}
//                 <div className="w-full">
//                 <div className=" flex w-full bg-red-500 items-center justify-center">
//                 <div className="flex bg-blue-500 w-full pb-20 items-end justify-between">
//                     <div>
//                         setting
//                     </div>
//                     <div className="">
//                     <button onClick={()=>{
//                         setOpenSetting(false) 
//                     }}>b</button>
//                     </div>
//                 </div>
//             </div>
//             {/* asd */}
//             <div className="">
//                 <div>
//                     slippage tolerance
//                 </div>
//                 <div className="flex">
//                     <div>
//                         <button></button>
//                     </div>
//                     <div>
//                         <input type="text" />
//                     </div>
//                 </div>
//             </div>
//             {/* minutes part */}
//             <div className="">
//                 <div>
//                     minutes
//                 </div>
//                 <div className="flex">
//                     <div>
//                         <input type="text" />
//                     </div>
//                     <div>
//                         <button></button>
//                     </div>
//                 </div>
//             </div>
//             {/* interface */}
//             <div>
//                 <div>interface settings</div>
//                 <div>
//                     <div>
//                         transaction details
//                     </div>
//                     <div>
//                         <Toggle></Toggle>
//                     </div>
//                 </div>
//             </div>

//                 </div>
//            </div>
//         </div> */}