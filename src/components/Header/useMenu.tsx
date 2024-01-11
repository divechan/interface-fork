import { BeakerIcon, GlobeIcon, SwitchVerticalIcon, TrendingUpIcon } from '@heroicons/react/outline'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { ChainId, SUSHI_ADDRESS } from '@sushiswap/core-sdk'
import { RocketIcon, WalletIcon } from 'app/components/Icon'
import { Feature } from 'app/enums'
import { featureEnabled } from 'app/functions'
import { useActiveWeb3React } from 'app/services/web3'
import { ReactNode, useMemo } from 'react'

export interface MenuItemLeaf {
  key: string
  title: string
  link: string
  icon?: ReactNode
}

export interface MenuItemNode {
  key: string
  title: string
  items: MenuItemLeaf[]
  icon?: ReactNode
}

export type MenuItem = MenuItemLeaf | MenuItemNode
export type Menu = MenuItem[]

type UseMenu = () => Menu
const useMenu: UseMenu = () => {
  const { i18n } = useLingui()
  const { chainId, account } = useActiveWeb3React()

  return useMemo(() => {
    if (!chainId) return []

    const menu: Menu = [{
      key: 'Home',
      title: i18n._(t`Home`),
      link: '/swap',
    },
    ]

    const explorers = [
      {
        key: 'mainnet',
        title: i18n._(t`Mainnet`),
        link: 'https://explore.steamexchange.io',
      },
      {
        key: 'testnet',
        title: i18n._(t`Testnet`),
        link: 'https://build.steamexchange.io',
      },
    ]

    const trade = [
      {
        key: 'swap',
        title: i18n._(t`Trade`),
        link: '/swap',
      },
      {
        key: 'buy',
        title: i18n._(t`Buy Crypto`),
        link: '/swap',
      },
    ]

    const liquidity = [
      {
        key: 'pool',
        title: i18n._(t`Pools`),
        link: '/pool',
      },
      {
        key: 'add-liquidity',
        title: i18n._(t`Add Liquidity`),
        link: `/add/ETH/${SUSHI_ADDRESS[chainId]}`,
      },
      {
        key: 'remove-liquidity',
        title: i18n._(t`Remove`),
        link: '/remove',
      },
      {
        key: 'migrate',
        title: i18n._(t`Migrate Liquidity`),
        link: '/migrate',
        disabled: !featureEnabled(Feature.MIGRATE, chainId),
      },
      {
        key: 'import',
        title: i18n._(t`Import Liquidity`),
        link: '/find',
      },
    ]

    if (featureEnabled(Feature.TRIDENT, chainId)) {
      menu.push({
        key: 'trade',
        title: i18n._(t`Trade`),
        icon: <SwitchVerticalIcon width={20} />,
        items: [
          {
            key: 'trident-swap',
            title: i18n._(t`Swap`),
            link: '/swap',
          },

        ],
      })

      const tridentLiquidity = {
        key: 'liquidity',
        title: i18n._(t`Liquidity`),
        icon: <BeakerIcon width={20} />,
        items: [
          {
            key: 'trident-pools',
            title: i18n._(t`Pools`),
            link: '/trident/pools',
          },
          {
            key: 'trident-create',
            title: i18n._(t`Create`),
            link: '/trident/create',
          },
        ],
      }

      if (featureEnabled(Feature.TRIDENT_MIGRATION, chainId)) {
        tridentLiquidity.items.push({
          key: 'trident-migrate',
          title: i18n._(t`Migrate`),
          link: '/trident/migrate',
        })
      }

      menu.push(tridentLiquidity)

      if (featureEnabled(Feature.AMM, chainId)) {

      }
    } else {
      menu.push({
        key: 'trade',
        title: i18n._(t`Digital Assets`),
        icon: <SwitchVerticalIcon width={20} />,
        items: trade,
      })
      menu.push({
        key: 'explorers',
        title: i18n._(t`Explorers`),
        icon: <SwitchVerticalIcon width={20} />,
        items: explorers,
      })

      menu.push({
        key: 'liquidity',
        title: i18n._(t`Manage Liquidity`),
        icon: <BeakerIcon width={20} />,
        items: liquidity.filter((item) => !item?.disabled),
      })
    }











    return menu.filter((el) => Object.keys(el).length > 0)
  }, [account, chainId, i18n])
}

export default useMenu
