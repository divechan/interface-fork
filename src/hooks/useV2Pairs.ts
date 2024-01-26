import { Interface } from '@ethersproject/abi'
import IUniswapV2PairABI from '@sushiswap/core/abi/IUniswapV2Pair.json'
import { Currency, CurrencyAmount, FACTORY_ADDRESS, Token } from '@sushiswap/core-sdk'
import { useMultipleContractSingleData } from 'app/lib/hooks/multicall'
import { useMemo } from 'react'
import { computePairAddress } from 'app/state/user/hooks'
import { Pair } from './Pair'

const PAIR_INTERFACE = new Interface(IUniswapV2PairABI)

export enum PairState {
  LOADING,
  NOT_EXISTS,
  EXISTS,
  INVALID,
}

export function useV2Pairs(currencies: [Currency | undefined, Currency | undefined][]): [PairState, Pair | null][] {
  const tokens = useMemo(
    () => currencies.map(([currencyA, currencyB]) => [currencyA?.wrapped, currencyB?.wrapped]),
    [currencies]
  )

  const pairAddresses = useMemo(
    () =>
      tokens.reduce<(string | undefined)[]>((acc, [tokenA, tokenB]) => {
        const address =
          tokenA &&
          tokenB &&
          tokenA.chainId === tokenB.chainId &&
          !tokenA.equals(tokenB) &&
          FACTORY_ADDRESS[tokenA.chainId]
            ? computePairAddress({
                factoryAddress:
                  tokenA.chainId == 1
                    ? '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
                    : tokenA.chainId == 137
                    ? '0xAdD2FC2189dA02E4122E6D734094bF1474516AD0'
                    : tokenA.chainId == 24116
                    ? '0x3Be077BBCaF5a518C6E12E5bCa6fdF8d7A36dc27'
                    : tokenA.chainId == 6278
                    ? '0xAdD2FC2189dA02E4122E6D734094bF1474516AD0'
                    : tokenA.chainId == 56
                    ? '0x20522019a3c2F35537561E75C519F19bd5Ae0d4A'
                    : FACTORY_ADDRESS[tokenA.chainId],
                tokenA,
                tokenB,
              })
            : undefined

        acc.push(address && !acc.includes(address) ? address : undefined)
        return acc
      }, []),
    [tokens]
  )
  const results = useMultipleContractSingleData(pairAddresses, PAIR_INTERFACE, 'getReserves')
  return useMemo(() => {
    return results.map((result, i) => {
      const { result: reserves, loading } = result
      const tokenA = tokens[i][0]
      const tokenB = tokens[i][1]
      if (loading) return [PairState.LOADING, null]
      if (!tokenA || !tokenB || tokenA.equals(tokenB)) return [PairState.INVALID, null]
      if (!reserves) return [PairState.NOT_EXISTS, null]
      const { reserve0, reserve1 } = reserves
      const [token0, token1] = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
      return [
        PairState.EXISTS,
        new Pair(
          CurrencyAmount.fromRawAmount(token0, reserve0.toString()),
          CurrencyAmount.fromRawAmount(token1, reserve1.toString())
        ),
      ]
    })
  }, [results, tokens])
}

export function useV2Pair(tokenA?: Currency, tokenB?: Currency): [PairState, Pair | null] {
  const inputs: [[Currency | undefined, Currency | undefined]] = useMemo(() => [[tokenA, tokenB]], [tokenA, tokenB])
  return useV2Pairs(inputs)[0]
}
