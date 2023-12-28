// eslint-disable-next-line no-restricted-imports
import { t, Trans } from '@lingui/macro'
import { Percent } from '@uniswap/sdk-core'
import { useWeb3React } from '@web3-react/core'
import { sendEvent } from 'components/analytics'
import { isSupportedChainId } from 'lib/hooks/routing/clientSideSmartOrderRouter'
import { useRef, useState } from 'react'
import { Settings, X } from 'react-feather'
import { Text } from 'rebass'
import styled, { useTheme } from 'styled-components/macro'

import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { useModalIsOpen, useToggleSettingsMenu } from '../../state/application/hooks'
import { ApplicationModal } from '../../state/application/reducer'
import { useClientSideRouter, useExpertModeManager } from '../../state/user/hooks'
import { ThemedText } from '../../theme'
import { ButtonError } from '../Button'
import { AutoColumn } from '../Column'
import Modal from '../Modal'
import QuestionHelper from '../QuestionHelper'
import { RowBetween, RowFixed } from '../Row'
import Toggle from '../Toggle'
import TransactionSettings from '../TransactionSettings'

const StyledMenuIcon = styled(Settings)`
  path {
    stroke: ${({ theme }) => theme.textSecondary}; /* Default color (white) */
    transition: stroke 0.2s ease; /* Smooth transition for color change */
  }

  &:hover {
    path {
      stroke: #d28a1e; /* Color on hover */
      box-shadow: 0 0 10px rgba(209, 138, 30, 0.7); /* Glow effect */
      transition: stroke 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
    }

    transform: rotate(360deg); /* Rotate 360 degrees on hover */
    transition: transform 0.8s ease; /* Smooth rotation transition */
  }
`

const StyledCloseIcon = styled(X)`
  height: 20px;
  width: 20px;
  :hover {
    cursor: pointer;
  }

  > * {
    stroke: ${({ theme }) => theme.textSecondary};
  }
`

const StyledMenuButton = styled.button<{ disabled: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  border-radius: 0.5rem;
  height: 20px;

  ${({ disabled }) =>
    !disabled &&
    `
    :hover,
    :focus {
      cursor: pointer;
      outline: none;
      opacity: 0.7;
    }
  `}
`
const EmojiWrapper = styled.div`
  position: absolute;
  bottom: -6px;
  right: 0px;
  font-size: 14px;
`

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 20.125rem;
  background-color: ${({ theme }) => theme.backgroundSurface};
  border: 1px solid ${({ theme }) => theme.backgroundOutline};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 2rem;
  right: 0rem;
  z-index: 100;

  ${({ theme }) => theme.deprecated_mediaWidth.deprecated_upToMedium`
    min-width: 18.125rem;
  `};

  user-select: none;
`

const Break = styled.div`
  width: 100%;
  height: 1px;
  background-color: #1f4a7d;
`

const ModalContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: #0c1d31;
  color: #fafafa;
  border-radius: 20px;
`

export default function SettingsTab({ placeholderSlippage }: { placeholderSlippage: Percent }) {
  const { chainId } = useWeb3React()

  const node = useRef<HTMLDivElement | null>(null)
  const open = useModalIsOpen(ApplicationModal.SETTINGS)
  const toggle = useToggleSettingsMenu()

  const theme = useTheme()

  const [expertMode, toggleExpertMode] = useExpertModeManager()

  const [clientSideRouter, setClientSideRouter] = useClientSideRouter()

  // show confirmation view before turning on
  const [showConfirmation, setShowConfirmation] = useState(false)

  useOnClickOutside(node, open ? toggle : undefined)

  return (
    <StyledMenu ref={node}>
      <Modal isOpen={showConfirmation} onDismiss={() => setShowConfirmation(false)} maxHeight={100}>
        <ModalContentWrapper>
          <AutoColumn gap="lg">
            <RowBetween style={{ padding: '0 2rem' }}>
              <div />
              <Text fontWeight={500} fontSize={20}>
                <Trans>Are you a Wizard?</Trans>
              </Text>
              <StyledCloseIcon onClick={() => setShowConfirmation(false)} />
            </RowBetween>
            <Break />
            <AutoColumn gap="lg" style={{ padding: '0 2rem' }}>
              <Text fontWeight={500} fontSize={20}>
                <Trans>
                  Enabling wizard mode disables the confirmation prompt for transactions and permits high slippage
                  trades, which can often lead to unfavorable exchange rates and potential loss of funds.
                </Trans>
              </Text>
              <Text fontWeight={600} fontSize={20}>
                <Trans>THIS FEATURE IS FOR ADVANCED TRADERS. USE WITH CAUTION!</Trans>
              </Text>
              <ButtonError
                error={true}
                padding="5px"
                onClick={() => {
                  const confirmWord = t`wizard`
                  if (
                    window.prompt(
                      t`You are about to enter a new world. Please type the word "${confirmWord}" to initialize Wizard mode.`
                    ) === confirmWord
                  ) {
                    toggleExpertMode()
                    setShowConfirmation(false)
                  }
                }}
              >
                <Text fontSize={20} fontWeight={500} id="confirm-expert-mode">
                  <Trans>Turn On Wizard Mode</Trans>
                </Text>
              </ButtonError>
            </AutoColumn>
          </AutoColumn>
        </ModalContentWrapper>
      </Modal>
      <StyledMenuButton
        disabled={!isSupportedChainId(chainId)}
        onClick={toggle}
        id="open-settings-dialog-button"
        aria-label={t`Transaction Settings`}
      >
        <StyledMenuIcon />
        {expertMode ? (
          <EmojiWrapper>
            <span role="img" aria-label="wizard-icon">
              🧙
            </span>
          </EmojiWrapper>
        ) : null}
      </StyledMenuButton>
      {open && (
        <MenuFlyout>
          <AutoColumn gap="md" style={{ padding: '1rem' }}>
            <Text fontWeight={600} fontSize={14} color="#FAFAFA">
              <Trans>Settings</Trans>
            </Text>
            <TransactionSettings placeholderSlippage={placeholderSlippage} />
            <Text fontWeight={600} fontSize={14} color="#FAFAFA">
              <Trans>Interface Settings</Trans>
            </Text>
            {isSupportedChainId(chainId) && (
              <RowBetween>
                <RowFixed>
                  <ThemedText.DeprecatedBlack fontWeight={400} fontSize={14} color={theme.textSecondary}>
                    <Trans>API Router</Trans>
                  </ThemedText.DeprecatedBlack>
                  <QuestionHelper
                    text={<Trans>Utilize the Rails Network&reg; API for obtaining quicker quotes.</Trans>}
                  />
                </RowFixed>
                <Toggle
                  id="toggle-optimized-router-button"
                  isActive={!clientSideRouter}
                  toggle={() => {
                    sendEvent({
                      category: 'Routing',
                      action: clientSideRouter ? 'enable routing API' : 'disable routing API',
                    })
                    setClientSideRouter(!clientSideRouter)
                  }}
                />
              </RowBetween>
            )}
            <RowBetween>
              <RowFixed>
                <ThemedText.DeprecatedBlack fontWeight={400} fontSize={14} color={theme.textSecondary}>
                  <Trans>Wizard Mode</Trans>
                </ThemedText.DeprecatedBlack>
                <QuestionHelper
                  text={
                    <Trans>
                      Enable high-price impact trades and bypass the confirmation screen. Proceed with caution; this
                      feature is meant for wizards!
                    </Trans>
                  }
                />
              </RowFixed>
              <Toggle
                id="toggle-expert-mode-button"
                isActive={expertMode}
                toggle={
                  expertMode
                    ? () => {
                        toggleExpertMode()
                        setShowConfirmation(false)
                      }
                    : () => {
                        toggle()
                        setShowConfirmation(true)
                      }
                }
              />
            </RowBetween>
            <RowBetween>
              <RowFixed>
                <ThemedText.DeprecatedBlack fontWeight={400} fontSize={14} color={theme.textSecondary}>
                  <Trans>Limit Orders - Coming Soon</Trans>
                </ThemedText.DeprecatedBlack>
                <QuestionHelper
                  text={
                    <Trans>
                      Set limit orders to execute at specific prices. Exercise caution and ensure accuracy when
                      configuring.
                    </Trans>
                  }
                />
              </RowFixed>
              <div style={{ pointerEvents: 'none', opacity: 0.2, cursor: 'not-allowed' }}>
                <Toggle id="toggle-limit-orders" isActive={false} toggle={() => {}} />
              </div>
            </RowBetween>
          </AutoColumn>
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
