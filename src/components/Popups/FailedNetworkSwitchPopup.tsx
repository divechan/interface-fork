import { Trans } from '@lingui/macro'
import { getChainInfo } from 'constants/chainInfo'
import { SupportedChainId } from 'constants/chains'
import { AlertTriangle } from 'react-feather'
import styled, { useTheme } from 'styled-components/macro'

import { ThemedText } from '../../theme'
import { AutoColumn } from '../Column'
import { AutoRow } from '../Row'

const RowNoFlex = styled(AutoRow)`
  flex-wrap: nowrap;
`

export default function FailedNetworkSwitchPopup({ chainId }: { chainId: SupportedChainId }) {
  const chainInfo = getChainInfo(chainId)
  const theme = useTheme()

  return (
    <RowNoFlex>
      <AutoColumn gap="sm">
        <RowNoFlex style={{ alignItems: 'center' }}>
          <div style={{ paddingRight: 13 }}>
            <AlertTriangle color="#d28a1e" size={24} display="flex" />
          </div>
          <ThemedText.SubHeader color="#FAFAFA">
            <Trans>Network change failed</Trans>
          </ThemedText.SubHeader>
        </RowNoFlex>

        <ThemedText.BodySmall color="#FAFAFA">
          <Trans>
            To use Rails Network&reg; Swap on {chainInfo.label}, use your wallet's settings to change to the correct
            network.
          </Trans>
        </ThemedText.BodySmall>
      </AutoColumn>
    </RowNoFlex>
  )
}
