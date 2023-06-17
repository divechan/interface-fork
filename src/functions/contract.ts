// NOTE: Try not to add anything to thie file, it's almost entirely refactored out.

import { AddressZero } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { ChainId, ROUTER_ADDRESS } from '@sushiswap/core-sdk'
import IUniswapV2Router02ABI from 'app/constants/abis/uniswap-v2-router-02.json'
import IUniswapV2Router02NoETHABI from 'app/constants/abis/uniswap-v2-router-02-no-eth.json'
import { isAddress } from 'app/functions/validate'

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

export function getRouterAddress(chainId?: ChainId) {
  if (!chainId) {
    throw Error(`Undefined 'chainId' parameter '${chainId}'.`)
  }
  return chainId == 1
    ? '0x1ba8775147a8EB7DF194a4d169c1D26e61aaeB5E'
    : chainId == 137
    ? '0xc684e9b1Bf80955822BC1B4512049e4897a95631'
    : chainId == 56
    ? '0x7Af7353a67aCAE37ED0e41A5D1afDFF855cC3932'
    : ROUTER_ADDRESS[chainId]
}

// account is optional
export function getRouterContract(chainId: number, library: Web3Provider, account?: string): Contract {
  return getContract(
    getRouterAddress(chainId),
    chainId !== ChainId.CELO ? IUniswapV2Router02ABI : IUniswapV2Router02NoETHABI,
    library,
    account
  )
}
