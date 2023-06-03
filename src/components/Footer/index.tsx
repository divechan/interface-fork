import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { DiscordIcon, GithubIcon, InstagramIcon, MediumIcon, RedditIcon, TelegramIcon, TwitterIcon } from 'app/components/Icon'
import LanguageSwitch from 'app/components/LanguageSwitch'
import Typography from 'app/components/Typography'
import { Feature } from 'app/enums'
import { featureEnabled } from 'app/functions'
import { useActiveWeb3React } from 'app/services/web3'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Container from '../Container'
import { Facebook, Youtube } from 'react-feather'
import { PrinterIcon } from '@heroicons/react/solid'

const Footer = () => {
  const { chainId } = useActiveWeb3React()
  const { i18n } = useLingui()

  return (
    <div className="z-10 w-full">
      <Container maxWidth="7xl" className="px-6 pb-20 mx-auto">
        <div className="grid grid-cols-2 gap-10 pt-8 border-t md:grid-cols-3 lg:grid-cols-6 xs:px-6 border-dark-900">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-2">
              <div className="">
                <Image src="https://i.imgur.com/44SEwTZ.png" alt="BallSwapper logo" width="28px" height="28px" />
              </div>
              <Typography variant="h2" weight={700} className="tracking-[0.02em] scale-y-90 hover:text-high-emphesis">
                BallSwapper
              </Typography>
            </div>
            <Typography variant="xs" className="text-low-emphesis">
              {i18n._(t`Our community is building a comprehensive decentralized trading platform for the future of finance. Join
              us!`)}
            </Typography>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/BitBallSwap" target="_blank" rel="noreferrer">
                <TwitterIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://www.facebook.com/bitballerc20/" target="_blank" rel="noreferrer">
                <Facebook width={16} className="text-low-emphesis" />
              </a>
              <a href="https://www.instagram.com/bitball_erc20/" target="_blank" rel="noreferrer">
                <InstagramIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://medium.com/p/bitball-4a607c33ea78" target="_blank" rel="noreferrer">
                <MediumIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://discord.gg/f7sWmJ4" target="_blank" rel="noreferrer">
                <DiscordIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://t.me/Ballswap" target="_blank" rel="noreferrer">
                <TelegramIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://www.youtube.com/channel/UCshc0oNpahxoulOhe5WwT-Q" target="_blank" rel="noreferrer">
                <Youtube width={16} className="text-low-emphesis" />
              </a>
              <a href="https://github.com/BitballErc20" target="_blank" rel="noreferrer">
                <GithubIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://BallSwapper.com" target="_blank" rel="noreferrer">
                <PrinterIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://www.reddit.com/r/BitBallEcosystem" target="_blank" rel="noreferrer">
                <RedditIcon width={16} className="text-low-emphesis" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <Typography variant="xs" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Products`)}
            </Typography>
            <Link href={featureEnabled(Feature.TRIDENT, chainId) ? '/trident/pools' : '/legacy/pool'} passHref={true}>
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Liquidity Pools`)}
              </Typography>
            </Link>
           
          </div>
          <div className="flex flex-col gap-1 md:text-right lg:text-right">
            <Typography variant="xs" weight={700} className="mt-2.5 hover:text-high-emphesis">
              {i18n._(t`Help`)}
            </Typography>
          
            <a href="https://discord.gg/f7sWmJ4" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Ask on Discord`)}
              </Typography>
            </a>
            <a href="https://twitter.com/BitBallSwap" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Ask on Twitter`)}
              </Typography>
            </a>
            <a href="https://t.me/Ballswap" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Ask on Telegram`)}
              </Typography>
            </a>
            <a href="https://medium.com/p/bitball-4a607c33ea78" target="_blank" rel="noreferrer">
              <Typography variant="xs" className="text-low-emphesis hover:text-high-emphesis">
                {i18n._(t`Ask on Forum`)}
              </Typography>
            </a>
          </div>
         
         
         
          <div className="flex flex-col gap-1">
            <LanguageSwitch />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
