const {expect} = require("chai")
const {ethers} = require("ethers")

const DAI = ""
const WETH9 = ""
const USDC = ""

describe("SingleSwapToken",()=>{
    let singleSwapToken
    let accounts;
    let weth 
    let usdc
    let dai

    before(async()=>{
        const accounts = await hre.ethers.getSigners()
        const SingleSwapToken = await hre.ethers.getContractFactory("SwapToken")
        singleSwapToken = await SingleSwapToken.deploy()
        console.log("asd")
        await singleSwapToken.waitForDeployment()

        weth = await hre.ethers.getContractAt("IWETH" ,WETH9)
        dai = await hre.ethers.getContractAt("IERC20" ,DAI)
        usdc = await hre.ethers.getContractAt("IERC20" ,USDC)
    })  
    it("swapExactInputSingle" , async()=>{
        const amountIn = 10n ** 18n;
        await weth.deposit({value : amountIn})
        await weth.approve(singleSwapToken.target,amountIn)
        console.log("asd")
    })
})