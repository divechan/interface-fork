import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import { TablePageToggler } from 'app/features/transactions/TablePageToggler'
import {
  TABLE_TABLE_CLASSNAME,
  TABLE_TBODY_TD_CLASSNAME,
  TABLE_TBODY_TR_CLASSNAME,
  TABLE_TR_TH_CLASSNAME,
  TABLE_WRAPPER_DIV_CLASSNAME,
} from 'app/features/trident/constants'
import Link from 'next/link'
import React, { FC } from 'react'
// @ts-ignore TYPE NEEDS FIXING
import { useFilters, useFlexLayout, usePagination, useSortBy, useTable } from 'react-table'

import { SearchCategoryLabel } from './SearchCategoryLabel'
import { useInstantiateTableFeatures } from './useInstantiateTableFeatures'
import { useTableConfig } from './useTableConfig'

const TokenTable: FC<{ chainId: number }> = ({ chainId }) => {
  const { config } = useTableConfig(chainId)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    // @ts-ignore TYPE NEEDS FIXING
    page,
    // @ts-ignore TYPE NEEDS FIXING
    gotoPage,
    // @ts-ignore TYPE NEEDS FIXING
    canPreviousPage,
    // @ts-ignore TYPE NEEDS FIXING
    canNextPage,
    // @ts-ignore TYPE NEEDS FIXING
    prepareRow,
    // @ts-ignore TYPE NEEDS FIXING
    setFilter,
    // @ts-ignore TYPE NEEDS FIXING
    toggleSortBy,
    // @ts-ignore TYPE NEEDS FIXING
    state: { pageIndex, pageSize },
    // @ts-ignore TYPE NEEDS FIXING
  } = useTable(config, useFlexLayout, useFilters, useSortBy, useFlexLayout, usePagination)
  useInstantiateTableFeatures(setFilter)
  return (
    <div className="flex flex-col gap-2">
      <SearchCategoryLabel />
    
    </div>
  )
}

export default TokenTable
