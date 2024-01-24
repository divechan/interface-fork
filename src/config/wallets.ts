// import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react'
import { ChainId } from '@sushiswap/core-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'
// import { PortisConnector } from 'web3-react-portis-connector'
// import { WalletConnectConnector } from 'web3-react-walletconnect-connector'
// import { WalletLinkConnector } from 'web3-react-walletlink-connector'
import { GamestopConnector, NetworkConnector } from 'app/entities/connectors'
import Cookies from 'js-cookie'
import { InjectedConnector } from 'web3-react-injected-connector'

import RPC from './rpc'

const supportedChainIds = [...(Object.values(ChainId) as number[]), 24116, 6278]

// export const network = new NetworkConnector({
//   defaultChainId: 1,
//   urls: RPC,
// })

let network: NetworkConnector | undefined

export const getNetworkConnector = (): NetworkConnector => {
  if (network) {
    return network
  }

  const defaultChainId = Cookies.get('chain-id')

  return (network = new NetworkConnector({
    defaultChainId: defaultChainId ? Number(defaultChainId) : 6278,
    urls: RPC,
  }))
}

export const injected = new InjectedConnector({
  supportedChainIds,
})

export const gamestopConnector = new GamestopConnector({})

export interface WalletInfo {
  connector?: (() => Promise<AbstractConnector>) | AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'injected.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true,
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D',
  },
  METAMASK_MOBILE: {
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Open in MetaMask app.',
    href: 'https://metamask.app.link/dapp/swap.SteamX.com',
    color: '#E8831D',
    mobile: true,
    mobileOnly: true,
  },
  WALLET_CONNECT: {
    connector: async () => {
      const WalletConnectConnector = (await import('web3-react-walletconnect-connector')).WalletConnectConnector
      return new WalletConnectConnector({
        rpc: RPC,
        bridge: 'https://bridge.walletconnect.org',
        qrcode: true,
        supportedChainIds,
      })
    },
    name: 'WalletConnect',
    iconName: 'wallet-connect.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true,
  },
  // KEYSTONE: {
  //   connector: async () => {
  //     const KeystoneConnector = (await import('@keystonehq/keystone-connector')).KeystoneConnector
  //     return new KeystoneConnector({
  //       chainId: 1,
  //       url: RPC[ChainId.ETHEREUM],
  //     })
  //   },
  //   name: 'Keystone',
  //   iconName: 'keystone.png',
  //   description: 'Connect to Keystone hardware wallet.',
  //   href: null,
  //   color: '#4196FC',
  //   mobile: true,
  // },
  // LATTICE: {
  //   connector: async () => {
  //     const LatticeConnector = (await import('@web3-react/lattice-connector')).LatticeConnector
  //     return new LatticeConnector({
  //       chainId: 1,
  //       url: RPC[ChainId.ETHEREUM],
  //       appName: 'SushiSwap',
  //     })
  //   },
  //   name: 'Lattice',
  //   iconName: 'lattice.png',
  //   description: 'Connect to GridPlus Wallet.',
  //   href: null,
  //   color: '#40a9ff',
  //   mobile: true,
  // },
}
