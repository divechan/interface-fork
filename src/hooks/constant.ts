import { Percent } from '@uniswap/sdk-core'
import JSBI from 'jsbi'

export const FACTORY_ADDRESS = '0xDc371dF9029603165f9C6F5267CC4B4e9AD7DE38'

export const INIT_CODE_HASH = '0xe44ce4fc9dd7b87faea4bf8e4956de9109a41519dcf1f2907dfcfb6d37fe4864'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)