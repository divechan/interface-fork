import { SwapLayout } from 'app/layouts/SwapLayout'
import { useActiveWeb3React } from 'app/services/web3'

import LegacyCrossSwap from '../legacy/crossswap'

const CrossSwap = () => {
    const { chainId } = useActiveWeb3React()

    return <LegacyCrossSwap />
}

CrossSwap.Layout = SwapLayout('cross-chain-page')
export default CrossSwap
