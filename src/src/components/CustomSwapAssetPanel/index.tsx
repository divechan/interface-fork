import React, { FC } from 'react'

interface CustomSwapAssetPanelProps {
    spendFromWallet: boolean
    header?: FC
    currency: any
    value: string
    onChange: () => void
    onSelect: () => void
    additionalHeaderContent?: React.ReactNode
    disableCurrencySelect?: boolean
}

const CustomSwapAssetPanel: FC<CustomSwapAssetPanelProps> = ({
    spendFromWallet,
    header: Header,
    currency,
    value,
    onChange,
    onSelect,
    additionalHeaderContent,
    disableCurrencySelect
}) => {
    return (
        <div className="panel">
            {Header && <Header />}
            {additionalHeaderContent}
            {/* other panel elements */}
        </div>
    )
}

export default CustomSwapAssetPanel
