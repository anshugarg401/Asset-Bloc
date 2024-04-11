import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Mainnet, DAppProvider, Config, Sepolia } from '@usedapp/core';
import { getDefaultProvider } from 'ethers'
import { Localhost } from '@usedapp/core'
const config: Config = {
  // readOnlyChainId: Mainnet.chainId,
  readOnlyChainId: Localhost.chainId,
  readOnlyUrls: {
    // [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [11155111]: getDefaultProvider("https://eth-sepolia.g.alchemy.com/v2/-rXBeb7Wwqlhn4ewabMzjkrMMn4tQBtU"),
    // [Localhost.chainId]: 'http://127.0.0.1:8545',
  },
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
    <Component {...pageProps} />
    </DAppProvider>
  )
}
