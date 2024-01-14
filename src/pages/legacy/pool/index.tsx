import { PlusIcon } from '@heroicons/react/outline'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { CurrencyAmount } from '@sushiswap/core-sdk'
import Button from 'app/components/Button'
import Loader from 'app/components/Loader'
import FullPositionCard from 'app/components/PositionCard'
import Typography from 'app/components/Typography'
import Web3Connect from 'app/components/Web3Connect'
import { useV2PairsWithLiquidity } from 'app/features/trident/migrate/context/useV2PairsWithLiquidity'
import { SwapLayout, SwapLayoutCard } from 'app/layouts/SwapLayout'
import { useActiveWeb3React } from 'app/services/web3'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import React from 'react'

const Pool = () => {
  const { i18n } = useLingui()
  const { account } = useActiveWeb3React()
  const { loading, pairs } = useV2PairsWithLiquidity()

  console.log("pairs", pairs)
  return (
    <>
      <NextSeo title="Pool" />
      <div className="flex items-center justify-between p-4">
        <Typography variant="lg" className="py-6">
          Position Overview
        </Typography>
        <Link href="/add" passHref={true}>
          <Button size="sm" startIcon={<PlusIcon width={14} height={14} />}>
            New Position
          </Button>
        </Link>
      </div>
      <SwapLayoutCard className="!bg-blue-900 border border-blue-800 rounded-[5px] !p-0 !px-4 overflow-hidden m-2">
        {!account ? (
          <Web3Connect className="w-full !bg-blue-900 bg-gradient-to-r from-blue-800/80 hover:from-blue-600 to-blue-600/80 hover:to-blue-800 text-white h-[38px] rounded-[5px]" />
        ) : (
          <div className="px-2 space-y-4 rounded-[5px] bg-blue-900">
            <div className="grid grid-flow-row divide-y divide-blue-800">
              {loading ? (
                <div className="flex items-center justify-center h-40">
                  <Loader />
                </div>
              ) : pairs?.length > 0 ? (
                pairs.map((v2Pair) => (
                  <FullPositionCard
                    key={v2Pair.liquidityToken.address}
                    pair={v2Pair}
                    stakedBalance={CurrencyAmount?.fromRawAmount(v2Pair.liquidityToken, '0')}
                  />
                ))
              ) : (
                <div className="flex items-center justify-center h-40">
                  <Typography variant="xs">{i18n._(t`No positions found`)}</Typography>
                </div>
              )}
            </div>
          </div>
        )}
      </SwapLayoutCard>
      <Typography variant="xs" className="p-4 px-10 mt-5 text-center text-high-emphesis">
        {i18n._(t`Liquidity providers earn a 0.25% fee on all trades proportional to their share of
                        the pool. Fees are added to the pool, accrue in real time and can be claimed by
                        withdrawing your liquidity`)}
      </Typography>
    </>
  )
}

Pool.Layout = SwapLayout('pool-page')

export default Pool
