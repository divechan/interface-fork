import { BigintIsh, Price, sqrt, Token, CurrencyAmount, Percent } from '@uniswap/sdk-core'
import invariant from 'tiny-invariant'
import JSBI from 'jsbi'
import { pack, keccak256 } from '@ethersproject/solidity'
import { getCreate2Address } from '@ethersproject/address'
import { BigNumber } from '@ethersproject/bignumber'

import {
  MINIMUM_LIQUIDITY,
  FIVE,
  _997,
  _1000,
  ONE,
  ZERO,
  BASIS_POINTS,
  ONE_HUNDRED_PERCENT,
  ZERO_PERCENT
} from './constant'
import {INIT_CODE, V2_FACTORY_ADDRESSES} from '../constants/addresses'
import { InsufficientReservesError, InsufficientInputAmountError } from './error'

export const computePairAddress = ({
  factoryAddress,
  tokenA,
  tokenB
}: {
  factoryAddress: string
  tokenA: Token
  tokenB: Token
}): string => {
  const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA] // does safety checks
  return getCreate2Address(
    factoryAddress,
    keccak256(['bytes'], [pack(['address', 'address'], [token0.address, token1.address])]),
    INIT_CODE[token0.chainId]
  )
}