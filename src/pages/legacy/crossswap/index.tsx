import { ArrowDownIcon } from '@heroicons/react/solid'
import { useLingui } from '@lingui/react'
import Button from 'app/components/Button'
import Typography from 'app/components/Typography'
import Web3Connect from 'app/components/Web3Connect'
import CustomSwapAssetPanel from 'app/features/trident/swap/CustomSwapAssetPanel'
import SwapAssetPanel from 'app/features/trident/swap/SwapAssetPanel'
import { SwapLayout, SwapLayoutCard } from 'app/layouts/SwapLayout'
import { useActiveWeb3React } from 'app/services/web3'
import { NextSeo } from 'next-seo'
import React, { useEffect, useState } from 'react'
import { Alchemy, Network } from 'alchemy-sdk'
import Moralis from 'moralis';
import { EvmChain, getTokenAllowanceOperation } from '@moralisweb3/common-evm-utils'
import { ethers } from 'ethers'
import { HyperlaneApp, HyperlaneCore, HyperlaneRouterChecker } from '@hyperlane-xyz/sdk'

const chains = [
    { id: 1, name: 'Ethereum' },
    { id: 137, name: 'Polygon' },
    { id: 56, name: 'BSC' },
    { id: 11155111, name: 'Sepolia' },
    { id: 24116, name: 'Rails Testnet' }
]

const CrossSwap = () => {
    const { i18n } = useLingui()
    const { account, chainId, library } = useActiveWeb3React()

    const [selectedChainId, setSelectedChainId] = useState<number>(chainId || 1)
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const [currency, setCurrency] = useState<any>();
    const [inputAmount, setInputAmount] = useState<string>("");
    const [currencyList, setCurrencyList] = useState<Array<any>>([]);
    const [forward, setForward] = useState<boolean>(true);
    const [isSwapping, setIsSwapping] = useState<boolean>(false);
    const [transactionHash, setTransactionHash] = useState<string>('');
    const [status, setStatus] = useState<any>();

    const contracts = {
        eth: '0x...',
        polygon: '0x...',
        bsc: '0x...',
        sepolia: '0x643445405c38294e1A182300D6076fcB126b32Af',
        rails: '0x4EB772A62CfE0a1E68efe8728d9842e887e166d1'
    };

    useEffect(() => {

    }, [inputAmount])

    const handleGetAllowance = async () => {
        if (!account || !library || !currency) return
        const signer = library.getSigner();

        const erc20Contract = new ethers.Contract(currency.token_address,
            ['function allowance(address owner, address spender) external view returns (uint256)'],
            signer
        )
        const address = chainId == 1 ? contracts.eth : (chainId == 56 ? contracts.bsc : (chainId == 137 ? contracts.polygon : chainId == 11155111 ? contracts.sepolia : contracts.eth));
        try {
            const allowance = await erc20Contract.allowance(account, address);
            return ethers.utils.formatUnits(allowance, 18);
        } catch (error) {
            console.error('Error getting token allowance:', error);
            return -1;
        }
    }

    const handleApprove = async () => {
        if (!account || !library || !currency) return
        const signer = library.getSigner();

        const erc20Contract = new ethers.Contract(currency.token_address,
            ['function approve(address spender, uint256 value)'],
            signer
        )
        const address = chainId == 1 ? contracts.eth : (chainId == 56 ? contracts.bsc : (chainId == 137 ? contracts.polygon : chainId == 11155111 ? contracts.sepolia : contracts.eth));
        const tx = await erc20Contract.approve(address, ethers.utils.parseUnits(inputAmount, 18));
        const receipt = await tx.wait();
        console.log('Transaction receipt:', receipt)
    }

    const handleSwap = async () => {
        if (!account || !library || !currency) return
        setIsSwapping(true);

        const signer = library.getSigner();

        const crossChainSwapContract = new ethers.Contract(forward ? chainId == 1 ? contracts.eth : (chainId == 56 ? contracts.bsc : (chainId == 137 ? contracts.polygon : chainId == 11155111 ? contracts.sepolia : contracts.rails)) : contracts.rails,
            ['function callRemote(uint32 _destination, address _walletAddress, address _token, uint256 _value)'],
            signer
        )

        try {
            let tx;
            if (forward) {
                tx = await crossChainSwapContract.callRemote(24116, account, currency.token_address, ethers.utils.parseUnits(inputAmount, 18))
            } else {
                tx = await crossChainSwapContract.callRemote(chainId, account, "0x0000000000000000000000000000000000627800", ethers.utils.parseUnits(inputAmount, 18))
            }
            setTransactionHash(tx.hash);

            const receipt = await tx.wait();
            console.log('Transaction receipt:', receipt)

            const status = HyperlaneCore.getDispatchedMessages(receipt);
            setStatus(status);
        } catch (error) {
            console.error('Error during swap:', error)
            setStatus('Error')
        } finally {
            setIsSwapping(false);
        }
    }

    const getTokenList = async () => {
        if (account == undefined || account == null) return;
        const chainbase_apikey = "2gZ8IzD8qdzwvhdtM9cQZ7Mq28H";
        const alchemy_apikey = "89JnUI6fpzSxLEnQ6GywqNoZfza7zZc9";
        const moralis_apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjdhZDI1MmZlLTc3MDctNGZjMi05MmQ5LTYxYzAzMzljOTI3ZCIsIm9yZ0lkIjoiMzkyNTczIiwidXNlcklkIjoiNDAzMzgzIiwidHlwZUlkIjoiMWZjZWNjMTYtZTVkNi00ZDkwLTlmODItNDUwNzc0Nzc0YjdlIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTU4OTUyNjgsImV4cCI6NDg3MTY1NTI2OH0.0JPgty4nRLXZ9q5JAEh9-38N-ZI30YrA5rDRGrq6bj0"

        const chain = chainId == 1 ? "eth" : chainId == 137 ? "polygon" : chainId == 56 ? "bsc" : chainId == 11155111 ? "sepolia" : "eth";
        fetch(`https://deep-index.moralis.io/api/v2.2/wallets/${account}/tokens?chain=${chain}`, {
            method: 'GET',
            headers: {
                'x-api-key': moralis_apikey,
                'accept': 'application/json'
            }
        }).then(response => response.json())
            .then(data => setCurrencyList(data.result))
            .catch(error => console.error(error));

        // const config = {
        //   apiKey: alchemy_apikey,
        //   network: chainId == 1 ? Network.ETH_MAINNET : chainId == 137 ? Network.MATIC_MAINNET : Network.ETH_MAINNET
        // }
        // const alchemy = new Alchemy(config);
        // let clist:Array<any> = [];

        // const balances = await alchemy.core.getTokenBalances(account).then((tokens) => {
        //   tokens.tokenBalances.forEach(token => {
        //     alchemy.core.getTokenMetadata(token.contractAddress).then((result)=>{
        //       clist.push({address:token.contractAddress, ...result});
        //     })
        //   });
        // })
        // setCurrencyList(clist)
    }

    useEffect(() => {
        getTokenList();
    }, [chainId, account])

    console.log(currencyList)

    useEffect(() => {
        if (!chains.some((chain) => chain.id === chainId)) {
            handleChainSelect(1) // default to Ethereum if the chain is not supported
        }
    }, [chainId])

    const handleInputAmount = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value.replace(/[^\d.]/g, '');
        setInputAmount(newValue);
    }

    const handleInputBlur = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const allowance = await handleGetAllowance();
        console.log(allowance)
    }

    const handleChainSelect = async (chainId: number) => {
        if (library?.provider?.request) {
            try {
                await library.provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x' + chainId.toString(16) }],
                })
                setSelectedChainId(chainId)
                setIsDropdownOpen(false)
            } catch (error) {
                console.error('Failed to switch network', error)
            }
        }
    }

    const handleTokenSelect = (token: any) => {
        setCurrency(token)
    }

    return (
        <>
            <NextSeo title="Rails Network® CrossRail" />
            <SwapLayoutCard>
                <div className="px-2">
                    <div className="flex items-center justify-between">
                        <Typography variant="h2">{i18n._('CrossRails')}</Typography>
                        <div className="relative">
                            <Button
                                color="blue"
                                className="px-3 py-1 text-sm rounded-md"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                {i18n._('Select Chain')}
                                <ArrowDownIcon className="w-4 h-4 ml-2" />
                            </Button>
                            {isDropdownOpen && (
                                <div
                                    style={{
                                        backgroundColor: '#031d31',
                                        color: '#FAFAFA',
                                        borderRadius: '0.375rem',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                        border: '2px solid #215f7b',
                                        position: 'absolute',
                                        marginTop: '0.5rem',
                                        zIndex: 1,
                                    }}
                                >
                                    {chains.map((chain) => (
                                        <button
                                            key={chain.id}
                                            style={{
                                                display: 'block',
                                                padding: '0.5rem 1rem',
                                                textAlign: 'left',
                                                width: '100%',
                                                backgroundColor: chain.id === selectedChainId ? '#053049' : 'transparent',
                                                borderRadius: '0.375rem',
                                                fontWeight: chain.id === selectedChainId ? 'bold' : 'normal',
                                                color: '#FAFAFA',
                                            }}
                                            onClick={() => handleChainSelect(chain.id)}
                                            onMouseOver={(e) => {
                                                e.currentTarget.style.backgroundColor = '#053049'
                                            }}
                                            onMouseOut={(e) => {
                                                e.currentTarget.style.backgroundColor = chain.id === selectedChainId ? '#053049' : 'transparent'
                                            }}
                                        >
                                            {chain.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <CustomSwapAssetPanel
                        spendFromWallet={true}
                        header={CustomSwapAssetPanel.Header}
                        currency={currency}
                        currencies={currencyList}
                        value={inputAmount}
                        onBlur={handleInputBlur}
                        onChange={handleInputAmount}
                        onSelect={handleTokenSelect}
                    />
                    <div className="flex justify-center mt-4 mb-4">
                        <div
                            role="button"
                            className="p-2.5 rounded-[5px] bg-blue-700 border shadow-md border-dark-700 hover:border-dark-600"
                            onClick={() => { }}
                        >
                            <ArrowDownIcon width={14} className="text-high-emphesis hover:text-white" />
                        </div>
                    </div>
                    <CustomSwapAssetPanel
                        spendFromWallet={true}
                        header={() => <div>{i18n._('STEAMX')}</div>}
                        currency={undefined}
                        currencies={[]}
                        value=""
                        onBlur={() => { }}
                        onChange={() => { }}
                        onSelect={() => { }}
                    />
                </div>
                <div className="flex justify-center mt-4">
                    {!account ? (
                        <Web3Connect color="blue" variant="filled" fullWidth className="rounded-2xl md:rounded" />
                    ) : (
                        <Button color="blue" fullWidth className="rounded-2xl md:rounded">
                            {i18n._('Swap')}
                        </Button>
                    )}
                </div>
            </SwapLayoutCard>
        </>
    )
}

CrossSwap.Layout = SwapLayout('swap-page')
export default CrossSwap
