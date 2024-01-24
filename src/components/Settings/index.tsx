import { CheckIcon, CogIcon } from '@heroicons/react/outline'
import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { Percent } from '@sushiswap/core-sdk'
import Button from 'app/components/Button'
import CloseIcon from 'app/components/CloseIcon'
import HeadlessUiModal from 'app/components/Modal/HeadlessUIModal'
import Popover from 'app/components/Popover'
import QuestionHelper from 'app/components/QuestionHelper'
import Switch from 'app/components/Switch'
import TransactionSettings from 'app/components/TransactionSettings'
import Typography from 'app/components/Typography'
import { Feature } from 'app/enums'
import { classNames, featureEnabled } from 'app/functions'
import useWalletSupportsSushiGuard from 'app/hooks/useWalletSupportsSushiGuard'
import { useActiveWeb3React } from 'app/services/web3'
import { useToggleSettingsMenu } from 'app/state/application/hooks'
import { useExpertModeManager, useUserSingleHopOnly, useUserSushiGuard } from 'app/state/user/hooks'
import React, { FC, useState } from 'react'

interface SettingsTabProps {
  placeholderSlippage?: Percent
  trident?: boolean
  className?: string
}

const SettingsTab: FC<SettingsTabProps> = ({ placeholderSlippage, className, trident = false }) => {
  const { i18n } = useLingui()
  const { chainId } = useActiveWeb3React()

  const toggle = useToggleSettingsMenu()
  const [expertMode, toggleExpertMode] = useExpertModeManager()
  const [singleHopOnly, setSingleHopOnly] = useUserSingleHopOnly()
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [userUseSushiGuard, setUserUseSushiGuard] = useUserSushiGuard()
  const walletSupportsSushiGuard = useWalletSupportsSushiGuard()

  return (
    <>
      <Popover
        placement="bottom-end"
        content={
          <div className="flex flex-col gap-3 p-3 w-80" style={{
            background: '#0c1d31', // Background color
            borderRadius: '5px',   // Border radius
            boxShadow: '0px 0px 20px 5px #1f4a7d', // Box shadow
            border: '2px solid #1f4a7d', // Border
          }}>
            <div className="flex flex-col gap-4 p-3 border rounded border-dark-800/60">
              <Typography variant="xs" weight={700} className="text-secondary">
                {i18n._(t`Transaction Settings`)}
              </Typography>
              <TransactionSettings placeholderSlippage={placeholderSlippage} trident={trident} />
            </div>
            <div className="flex flex-col gap-3 p-3 border rounded border-dark-800/60">
              <Typography variant="xs" weight={700} className="text-secondary">
                {i18n._(t`Interface Settings`)}
              </Typography>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Typography variant="xs" className="text-high-emphesis" weight={700}>
                    {i18n._(t`Wizard Mode + Proxy Swap`)}
                  </Typography>
                  <QuestionHelper
                    text={i18n._(
                      t`Wizard Mode and Proxy Swap is for experienced investors only! Use at your own risk.`
                    )}
                  />
                </div>
                <Switch
                  size="sm"
                  id="toggle-expert-mode-button"
                  checked={expertMode}
                  onChange={
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
                  checkedIcon={<CheckIcon className="text-white" />}
                  uncheckedIcon={<CloseIcon />}
                  color="gradient"
                />
              </div>
              {!trident && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Typography variant="xs" className="text-high-emphesis" weight={700}>
                      {i18n._(t`Disable multihops`)}
                    </Typography>
                    <QuestionHelper text={i18n._(t`Restricts swaps to direct pairs only.`)} />
                  </div>
                  <Switch
                    size="sm"
                    id="toggle-disable-multihop-button"
                    checked={singleHopOnly}
                    onChange={() => (singleHopOnly ? setSingleHopOnly(false) : setSingleHopOnly(true))}
                    checkedIcon={<CheckIcon className="text-dark-700" />}
                    uncheckedIcon={<CloseIcon />}
                    color="gradient"
                  />
                </div>
              )}
              {/* // @ts-ignore TYPE NEEDS FIXING*/}

            </div>
          </div>
        }
      >
        <div
          className={classNames(className, 'flex items-center justify-center w-10 h-10 rounded-full cursor-pointer')}
        >
          <CogIcon className="w-[26px] h-[26px] transform rotate-90 hover:text-blue-400" />
        </div>
      </Popover>
      <HeadlessUiModal.Controlled isOpen={showConfirmation} onDismiss={() => setShowConfirmation(false)} maxWidth="md">
        <div className="flex flex-col gap-4">
          <HeadlessUiModal.Header header={i18n._(t`Confirm`)} onClose={() => setShowConfirmation(false)} />
          <HeadlessUiModal.BorderedContent className="flex flex-col gap-3 !border-yellow/40">
            <Typography variant="xs" weight={700} className="text-white">
              {i18n._(t`Only use this mode if you know what you are doing.`)}
            </Typography>
            <Typography variant="sm" weight={700} className="text-red">
              {i18n._(t`Enabling wizard mode disables the confirmation prompt for transactions and permits high slippage
                  trades, which can often lead to unfavorable exchange rates and potential loss of funds. Wizard mode also enables Proxy Swap.`)}
            </Typography>
          </HeadlessUiModal.BorderedContent>
          <Button
            id="confirm-expert-mode"
            color="blue"
            variant="filled"
            onClick={() => {
              toggleExpertMode()
              setShowConfirmation(false)
            }}
          >
            {i18n._(t`Enable Wizard Mode`)}
          </Button>
        </div>
      </HeadlessUiModal.Controlled>
    </>
  )
}

export default SettingsTab
