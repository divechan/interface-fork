import { Token } from '@sushiswap/core-sdk'
import { useAtomValue, useUpdateAtom } from 'jotai/utils'
import { Transaction, TransactionInfo, transactionsAtom, TransactionType } from 'lib/state/transactions'
import ms from 'ms.macro'
import { useCallback } from 'react'
import { useActiveWeb3React } from 'services/web3'
import invariant from 'tiny-invariant'

import useBlockNumber from '../useBlockNumber'
import Updater from './updater'

function isTransactionRecent(transaction: Transaction) {
  return Date.now() - transaction.addedTime < ms`1d`
}

export function usePendingTransactions() {
  const { chainId } = useActiveWeb3React()
  const txs = useAtomValue(transactionsAtom)
  //@ts-ignore
  return (chainId ? txs[chainId] : null) ?? {}
}

export function useAddTransaction() {
  const { chainId } = useActiveWeb3React()
  const blockNumber = useBlockNumber()
  const updateTxs = useUpdateAtom(transactionsAtom)

  return useCallback(
    (info: TransactionInfo) => {
      invariant(chainId)
      const txChainId = chainId
      const { hash } = info.response
  //@ts-ignore

      updateTxs((chainTxs) => {
        const txs = chainTxs[txChainId] || {}
        txs[hash] = { addedTime: new Date().getTime(), lastCheckedBlockNumber: blockNumber, info }
        chainTxs[chainId] = txs
      })
    },
    [blockNumber, chainId, updateTxs]
  )
}

/** Returns the hash of a pending approval transaction, if it exists. */
export function usePendingApproval(token?: Token, spender?: string): string | undefined {
  const { chainId } = useActiveWeb3React()
  const txs = useAtomValue(transactionsAtom)
  if (!chainId || !token || !spender) return undefined
  //@ts-ignore

  const chainTxs = txs[chainId]
  if (!chainTxs) return undefined

  return Object.values(chainTxs).find(
    (tx) =>
      tx &&
  //@ts-ignore

      tx.receipt === undefined &&
  //@ts-ignore

      tx.info.type === TransactionType.APPROVAL &&
  //@ts-ignore

      tx.info.tokenAddress === token.address &&
  //@ts-ignore

      tx.info.spenderAddress === spender &&
  //@ts-ignore

      isTransactionRecent(tx)
  //@ts-ignore

      )?.info.response.hash
}

export function TransactionsUpdater() {
  const pendingTransactions = usePendingTransactions()

  const updateTxs = useUpdateAtom(transactionsAtom)
  const onCheck = useCallback(
    ({ chainId, hash, blockNumber }) => {
  //@ts-ignore
      
      updateTxs((txs) => {
        const tx = txs[chainId]?.[hash]
        if (tx) {
          tx.lastCheckedBlockNumber = tx.lastCheckedBlockNumber
            ? Math.max(tx.lastCheckedBlockNumber, blockNumber)
            : blockNumber
        }
      })
    },
    [updateTxs]
  )
  const onPrivateTxStatusCheck = useCallback(
    ({ chainId, hash, blockNumber, status }) => {
  //@ts-ignore
      
      updateTxs((txs) => {
        const tx = txs[chainId]?.[hash]
        if (tx) {
          tx.lastCheckedBlockNumber = tx.lastCheckedBlockNumber
            ? Math.max(tx.lastCheckedBlockNumber, blockNumber)
            : blockNumber
          tx.privateTx = status
        }
      })
    },
    [updateTxs]
  )
  const onReceipt = useCallback(
    ({ chainId, hash, receipt }) => {
  //@ts-ignore
      
      updateTxs((txs) => {
        const tx = txs[chainId]?.[hash]
        if (tx) {
          tx.receipt = receipt
        }
      })
    },
    [updateTxs]
  )

  return (
    <Updater
      pendingTransactions={pendingTransactions}
      onCheck={onCheck}
      onPrivateTxStatusCheck={onPrivateTxStatusCheck}
      onReceipt={onReceipt}
    />
  )
}
