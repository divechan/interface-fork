import { ChainId, Token } from '@sushiswap/core-sdk'
import { RAILS } from 'app/constants'

export const USDC = new Token(RAILS, '0x0000000000000000000000000000000000627802', 6, 'USDC', 'USD Coin')
export const WETH = new Token(RAILS, '0x0000000000000000000000000000000000627800', 8, 'WSTEAMX', 'Wrapped STEAMX')
