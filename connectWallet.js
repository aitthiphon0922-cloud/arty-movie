import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

const config = createConfig(
  getDefaultConfig({
    appName: 'Arty Movie',
    projectId: 'arty-movie-project', 
    chains: [mainnet],
    transports: {
      [mainnet.id]: http(),
    },
  })
)

export default function ConnectWallet() {
  return (
    <WagmiProvider config={config}>
      <RainbowKitProvider>
        <div style={{ padding: 40 }}>
          <h2>Connect Wallet</h2>
          <br />
          <w3m-button />
        </div>
      </RainbowKitProvider>
    </WagmiProvider>
  )
}
