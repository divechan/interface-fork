import { ChainId, Token } from '@sushiswap/core-sdk'
import { RAILS_TESTNET } from 'app/constants'

export const USDC = new Token(RAILS_TESTNET, '0x0000000000000000000000000000000000627801', 6, 'USDC', 'USD Coin')
export const WETH = new Token(
  RAILS_TESTNET,
  '0x0000000000000000000000000000000000627800',
  8,
  'WSTEAMX',
  'Wrapped STEAMX'
)
