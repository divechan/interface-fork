// NOTE: Try not to add anything to thie file, it's almost entirely refactored out.

import { AddressZero } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { ChainId, ROUTER_ADDRESS } from '@sushiswap/core-sdk'
import IUniswapV2Router02ABI from 'app/constants/abis/uniswap-v2-router-02.json'
import IUniswapV2Router02NoETHABI from 'app/constants/abis/uniswap-v2-router-02-no-eth.json'
import { isAddress } from 'app/functions/validate'
import { RAILS, RAILS_TESTNET } from 'app/constants'

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return new Contract(address, ABI, getProviderOrSigner(library, account))
}

export function getRouterAddress(chainId?: ChainId & typeof RAILS & typeof RAILS_TESTNET) {
  if (!chainId) {
    throw Error(`Undefined 'chainId' parameter '${chainId}'.`)
  }
  return chainId == 1
    ? '0x1ba8775147a8EB7DF194a4d169c1D26e61aaeB5E'
    : chainId == 137
    ? '0x652fe694E94FA129bc96930171EeE2333B44F38d'
    : chainId == 24116
    ? '0x86CD8d8c42532d86D0f707d6664aC0aCF27262bd'
    : chainId == 6278
    ? '0x652fe694E94FA129bc96930171EeE2333B44F38d'
    : chainId == 56
    ? '0x9b9577d046cfA15d5D7cFADeB562D3f589357b73'
    : //@ts-ignore
      ROUTER_ADDRESS[chainId]
}

// account is optional
export function getRouterContract(chainId: number | any, library: Web3Provider, account?: string): Contract {
  return getContract(
    getRouterAddress(chainId),
    chainId !== ChainId.CELO ? IUniswapV2Router02ABI : IUniswapV2Router02NoETHABI,
    library,
    account
  )
}
