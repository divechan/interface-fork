import { UNIVERSAL_ROUTER_ADDRESS } from '@uniswap/universal-router-sdk'
import { useWeb3React } from '@web3-react/core'

import { BaseVariant, FeatureFlag, useBaseFlag } from '../index'

export function usePayWithAnyTokenFlag(): BaseVariant {
  return useBaseFlag(FeatureFlag.payWithAnyToken)
}

export function usePayWithAnyTokenEnabled(): boolean {
  const flagEnabled = usePayWithAnyTokenFlag() === BaseVariant.Enabled
  const { chainId } = useWeb3React()

  return false
}

export { BaseVariant as PayWithAnyTokenVariant }
