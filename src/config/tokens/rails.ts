import { ChainId, Token } from '@sushiswap/core-sdk'
import { RAILS } from 'app/constants'

export const USDC = new Token(
  RAILS,
  '0x750ba8b76187092B0D1E87E28daaf484d1b5273b',
  6,
  'USDC',
  'USD Coin'
)
export const WETH = new Token(
  RAILS,
  '0x0000000000000000000000000000000000627800',
  8,
  'WETH',
  'Wrapped ETH'
)


