import { CurrencyLogo } from 'app/components/CurrencyLogo'
import Typography from 'app/components/Typography'
import Input from 'app/components/Input'
import { classNames } from 'app/functions'
import React, { FC, useEffect, useState } from 'react'
import Button from 'app/components/Button'
import { i18n } from '@lingui/core'
import { t } from '@lingui/macro'
import { ChevronDownIcon, XIcon } from '@heroicons/react/solid'
import { HeadlessUiModal } from 'app/components/Modal'
import useActiveWeb3React from 'app/lib/hooks/useActiveWeb3React'
import { ethers } from 'ethers'

interface CustomSwapAssetPanelProps {
    spendFromWallet: boolean
    header: (x: any) => React.ReactNode
    currency: any
    currencies: Array<any>
    value: string
    onChange: (v: React.ChangeEvent<HTMLInputElement>) => void
    onBlur: (v: React.ChangeEvent<HTMLInputElement>) => void
    onSelect: (v: any) => void
    additionalHeaderContent?: React.ReactNode
    disableCurrencySelect?: boolean
}

const CustomSwapAssetPanel: FC<CustomSwapAssetPanelProps> = ({
    spendFromWallet,
    header,
    currency,
    currencies,
    value,
    onChange,
    onBlur,
    onSelect,
    additionalHeaderContent,
    disableCurrencySelect,
}) => {
    const { account } = useActiveWeb3React()
    const [balance, setBalance] = useState<string>('0')
    const [isOverflow, setIsOverflow] = useState<boolean>(false)

    async function getTokenBalance(walletAddress: string, tokenAddress: string | undefined, providerUrl: string) {
        try {
            // Connect to the Ethereum provider
            const provider = new ethers.providers.JsonRpcProvider(providerUrl)

            // Get ERC20 token contract interface
            const tokenContractInterface = new ethers.utils.Interface(['function balanceOf(address) view returns (uint256)'])

            // Create an instance of the ERC20 token contract
            if (tokenAddress == undefined) return
            const tokenContract = new ethers.Contract(tokenAddress, tokenContractInterface, provider)

            // Retrieve the token balance for the wallet address
            const tokenBalance = await tokenContract.balanceOf(walletAddress)

            console.log('Token Balance:', ethers.utils.formatUnits(tokenBalance))
            return tokenBalance
        } catch (error) {
            console.error('Error:', error)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event)
        if (parseFloat(event.target.value) > parseFloat(balance)) {
            setIsOverflow(true)
        } else {
            setIsOverflow(false)
        }
    }

    useEffect(() => {
        if (currency == null || currency == undefined) return
        setBalance(currency.balance_formatted)
        console.log(currency)
    }, [currency])

    return (
        <div className="flex flex-col gap-2 panel">
            {header({
                currency,
                currencies,
                onSelect,
                disableCurrencySelect,
            })}
            {additionalHeaderContent}
            <div className="flex w-full h-12 gap-4 px-2 bg-white rounded-sm">
                <input
                    type="text"
                    className="w-[40%] h-full rounded-sm text-black text-2xl"
                    value={value}
                    onChange={handleChange}
                    onBlur={onBlur}
                    placeholder="0.00"
                />
                <div className="w-[25%] h-full flex items-center text-black">~${ }</div>
                <div className="w-[35%] h-full flex overflow-hidden text-nowrap text-ellipsis items-center text-black">
                    balance: {balance}
                </div>
            </div>
            {isOverflow && <div className="text-red">There are not enough tokens in your wallet.</div>}
            {/* other panel elements */}
        </div>
    )
}

const CustomSwapAssetPanelHeader: FC<
    Pick<CustomSwapAssetPanelProps, 'currency' | 'currencies' | 'onSelect' | 'disableCurrencySelect'>
> = ({ currency, currencies, onSelect, disableCurrencySelect }) => {
    const [showSearchModal, setShowSearchModal] = useState<boolean>(false)

    const handleClose = () => {
        setShowSearchModal(false)
    }

    const handleOpen = () => {
        setShowSearchModal(true)
        console.log('ssssssssssssssssssssssssssssssssssss')
        console.log(currencies)
    }

    const trigger = currency ? (
        <div
            onClick={handleOpen}
            className={classNames(
                showSearchModal ? '' : 'bg-blue-800 hover:bg-dark-700 cursor-pointer',
                'flex items-center gap-2 px-2 py-1 rounded-[5px] shadow-md text-high-emphesis'
            )}
        >
            <img src={currency.logo} className="!rounded-[5px] overflow-hidden" width={20} alt={currency.symbol} />
            <Typography variant="sm" className="!text-xl" weight={700}>
                {currency.symbol}
            </Typography>
        </div>
    ) : (
        <Button
            onClick={handleOpen}
            color="blue"
            variant="filled"
            size="sm"
            className="!rounded-[5px] !px-2 !py-0 !h-[32px] !pl-3"
        >
            {i18n._(t`Select a Token`)}
            <ChevronDownIcon width={18} />
        </Button>
    )

    return (
        <div className="flex items-center justify-between gap-2">
            <div className="flex items-center">
                <TokenListModal
                    selectedCurrency={currency}
                    trigger={trigger}
                    currencyList={currencies}
                    onSelect={(currency) => onSelect && onSelect(currency)}
                    isOpen={showSearchModal}
                    onClose={handleClose}
                />
                {trigger}
            </div>
            {/* {walletToggle && walletToggle({ spendFromWallet })} */}
        </div>
    )
}

interface TokenListModalProps {
    selectedCurrency: any
    trigger: any
    currencyList: Array<any>
    onSelect: (v: any) => void
    onClose: () => void
    isOpen: boolean
}

const TokenListModal: FC<TokenListModalProps> = ({
    selectedCurrency,
    trigger,
    currencyList,
    onSelect,
    onClose,
    isOpen,
}) => {
    const { chainId, account } = useActiveWeb3React()

    const handleCurrencySelect = (v: any) => {
        onSelect && onSelect(v)
        onClose()
    }
    if (!isOpen) return null
    return (
        <div className="fixed top-0 left-0 flex flex-col w-full h-full gap-5">
            <div className="absolute z-30 w-full h-full bg-black opacity-50 blur-sm" onClick={onClose} />
            <div className="w-[500px] h-[400px] overflow-auto relative mx-auto mt-[120px] z-50 px-6 py-6 flex flex-col gap-2 bg-blue-900 rounded-md border-cyan-400 border-solid border">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col justify-center gap-1">
                        <Typography weight={700} className="flex items-center gap-3 text-high-emphesis">
                            Select a Token
                        </Typography>
                    </div>
                    {onClose && (
                        <div className="flex items-center justify-center w-6 h-6 cursor-pointer" onClick={onClose}>
                            <XIcon width={24} height={24} className="text-high-emphesis" />
                        </div>
                    )}
                </div>
                <div className='flex flex-col gap-1'>
                    {currencyList.map((token) => {
                        return (
                            <div
                                key={token.address}
                                className="flex justify-between w-full gap-3 text-xl rounded-md h-7 bg-slate-800 hover:bg-slate-700 hover:cursor-pointer"
                                onClick={() => handleCurrencySelect(token)}
                            >
                                <div className="flex gap-2">
                                    <img src={token.logo} width={30} alt={token.symbol} />
                                    <div>{token.symbol}</div>
                                </div>
                                <div>${token.usd_price}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Object.assign(CustomSwapAssetPanel, { Header: CustomSwapAssetPanelHeader })
