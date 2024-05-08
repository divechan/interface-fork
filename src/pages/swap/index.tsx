import { Feature } from 'app/enums'
import { featureEnabled } from 'app/functions'
import { SwapLayout } from 'app/layouts/SwapLayout'
import { Banner as BannerType, fetchBanners } from 'app/lib/api'
import { useActiveWeb3React } from 'app/services/web3'

import LegacySwap from '../legacy/swap'
import TridentSwap from '../trident/swap'

export interface SwapProps {
  banners: BannerType[]
}



const Swap = ({ banners }: SwapProps) => {
  const { chainId } = useActiveWeb3React()

  if (featureEnabled(Feature.TRIDENT, chainId)) {
    return <TridentSwap banners={banners} />
  }

  return <LegacySwap banners={banners} />
}

Swap.Layout = SwapLayout('swap-page')
// Remove the export statement for Swap component
export default Swap