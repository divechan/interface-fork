import { UNIVERSAL_ROUTER_ADDRESS } from '@uniswap/universal-router-sdk'
import { useWeb3React } from '@web3-react/core'

import { BaseVariant, FeatureFlag, useBaseFlag } from '../index'

export function usePermit2Flag(): BaseVariant {
  return useBaseFlag(FeatureFlag.permit2, BaseVariant.Enabled)
}

export function usePermit2Enabled(): boolean {
  const flagEnabled = usePermit2Flag() === BaseVariant.Enabled
  const { chainId } = useWeb3React()
 return false
}

export { BaseVariant as Permit2Variant }
