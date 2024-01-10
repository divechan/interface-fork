import { ChainId, Token } from '@sushiswap/core-sdk'
import { RAILS_TESTNET } from 'app/constants'

export const USDC = new Token(
  RAILS_TESTNET,
  '0x0000000000000000000000000000000000627800',
  6,
  'USDC',
  'USD Coin'
)
export const WETH = new Token(
  RAILS_TESTNET,
  '0x1d05e4e72cD994cdF976181CfB0707345763564d',
  8,
  'WETH',
  'Wrapped ETH'
)
