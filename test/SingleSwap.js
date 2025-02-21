const {expect} = require("chai");
const {ethers} = require("hardhat");
const { waitForDebugger } = require("inspector");

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("SingleSwapToken",()=>{
    let singleSwapToken;
    let accounts;
    let weth ;
    let dai;
    let usdc;
        
        before(async()=>{
            accounts = await ethers.getSigners();
           
            const SingleSwapToken = await ethers.getContractFactory("SingleSwapToken")
            singleSwapToken = await SingleSwapToken.deploy()
            await singleSwapToken.waitForDeployment()
            weth = await ethers.getContractAt("IWETH",WETH9)
            dai = await ethers.getContractAt("IERC20",DAI)
            usdc = await ethers.getContractAt("IERC20",USDC)

            console.log(singleSwapToken.target)
        })
        
        it("swapExactInputSingle" , async()=>{            
            const amountIn = 10n ** 18n;
            // deposit
            await weth.connect(accounts[0]).deposit({value : amountIn})
            await weth.approve(singleSwapToken.target,amountIn);
            console.log("ASd")
            console.log(weth);
            console.log(dai);
            console.log(usdc);
            console.log(accounts);
            console.log(singleSwapToken);
    })
})


