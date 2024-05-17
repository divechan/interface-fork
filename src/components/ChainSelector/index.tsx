import React, { FC } from 'react'

interface ChainSelectorProps {
    chains: { id: number, name: string }[]
    selectedChainId: number | undefined
    onChange: (chainId: number) => void
}

const ChainSelector: FC<ChainSelectorProps> = ({ chains, selectedChainId, onChange }) => {
    return (
        <select value={selectedChainId ?? ''} onChange={(e) => onChange(Number(e.target.value))}>
            <option value="" disabled>Select a chain</option>
            {chains.map((chain) => (
                <option key={chain.id} value={chain.id}>
                    {chain.name}
                </option>
            ))}
        </select>
    )
}

export default ChainSelector
