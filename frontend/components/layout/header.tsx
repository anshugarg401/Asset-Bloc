import React, {useContext} from 'react'
import Link from 'next/link'
import Nav from './nav'
import NavDrawer from './nav-drawer'
import {AppContext} from "@/context/app-context"
import { formatAddress } from '@/lib/utils'
// import {Pi } from "react-icons/pi"
import {   useEthers ,useEtherBalance} from '../../node_modules/@usedapp/core'
import { Localhost } from '@usedapp/core'
const Header = () => {
  const { account,deactivate, activateBrowserWallet , chainId } = useEthers()
 

  const etherBalance = useEtherBalance(account, { chainId: 11155111 })
  const appCtx = useContext(AppContext)

  const {connected, signerAddress} = appCtx
 
  const ConnectButton = () => (
    <div>
      <button onClick={() => activateBrowserWallet()}>Connect</button>
    </div>
  )
  const MetamaskConnect = () => (
    <div>
         <div className = "flex flex-row">
      
     
      <div className={`rounded-full w-4 h-4 mr-2 mt-1.5 ${account ? "bg-blue-400" : "bg-red-400"}`}>

      </div>
      {!account && <ConnectButton /> }
      {account && <button onClick={deactivate}>Disconnect</button>}
      
      <br />
      
    </div>
    <div>
       {account && (
      <div  className="absolute">
        <div>
         
          &nbsp;
          <div className="account">{account}</div>
        </div>
        <br />
      </div>
    )}
    </div>
    </div>
   
   
    
  )

  
  /*
    

    <div className="fixed left-0 top-0 z-[100] flex w-full px-8 py-6 md:pb-6 md:pt-8 items-center justify-between border-b border-gray-300   backdrop-blur-2xl bg-black lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4">
  */

  return (
  
    <div className="fixed left-0 top-0 z-[100] flex w-full h-[60px] border border-red-300 px-8 py-6 md:pb-6 md:pt-8 items-center justify-between lg:p-4 ">
      <Link href={"/"}>
      <div className='text-red-600 font-bold text-lg'>AssetBloc</div>
      </Link>
      

      <Nav />

      <div className='flex items-center'>
      <MetamaskConnect/>
    
      <div className='mr-4 flex items-center'>
        
          {connected && <div>{formatAddress(signerAddress!)}</div>}
      </div>
      <NavDrawer />
      </div>
      

    </div>
  )
}

export default Header