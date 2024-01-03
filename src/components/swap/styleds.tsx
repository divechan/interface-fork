import { TooltipContainer } from 'components/Tooltip'
import { transparentize } from 'polished'
import { ReactNode } from 'react'
import { AlertTriangle } from 'react-feather'
import { Text } from 'rebass'
import styled, { css } from 'styled-components/macro'
import { Z_INDEX } from 'theme/zIndex'

import { AutoColumn } from '../Column'

export const PageWrapper = styled.div`
  padding: 68px 8px 0px;
  max-width: 480px;
  width: 100%;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    padding-top: 48px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`
export const SwapWrapper = styled.main`
  position: relative;
  background: rgba(31, 74, 125, 0.6); /* Adjust the alpha (0.6) for the desired opacity */
  border-radius: 5px;
  padding: 25px;
  z-index: ${Z_INDEX.deprecated_content};
  transition: box-shadow 500ms ease; /* Increase the transition duration for a slower effect */
  box-shadow: 0px 4px 8px rgba(31, 74, 125, 0.6); /* Set the box shadow color to #1f4a7d */

  &:hover {
    box-shadow: 0px 16px 24px rgba(31, 74, 125, 0.9); /* Adjust the hover box shadow color */
  }
`

// Create a new styled component for the larger wrapper with a background image
export const LargerWrapperWithBackground = styled(SwapWrapper)`
  background-image: url('https://github.com/divechan/brandkit/blob/main/10.jpg?raw=true');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 25px;
  box-shadow: none;
  z-index: ${Z_INDEX.deprecated_content - 1};

  @media screen and (min-width: 768px) {
    /* Apply these styles for screens with a width of 768px or larger */
    transform: scale(1.25);
  }

  @media screen and (max-width: 767px) {
    /* Apply these styles for screens with a width of 767px or smaller */
    /* Adjust properties for smaller screens if needed */
    transform: none; /* Reset the transformation for smaller screens */
    padding: 15px; /* Adjust padding for smaller screens */
  }
`

export const ArrowWrapper = styled.div<{ clickable: boolean }>`
  border-radius: 20px;
  height: 40px;
  width: 40px;
  position: relative;
  margin-top: -18px;
  margin-bottom: -18px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fafafa;
  border: 4px solid;
  border-color: #1f4a7d;
  z-index: 2;

  transition: all 0.3s ease; /* Add a smooth transition for the hover effect */

  ${({ clickable }) =>
    clickable
      ? css`
          :hover {
            cursor: pointer;
            background-color: #fafafa;
            transform: rotate(180deg); /* Rotate 180 degrees on hover */
            border: 4px solid;
            border-color: #d28a1e;
            box-shadow: 0px 4px 8px rgba(210, 138, 30, 0.5); /* Use the glow color for box-shadow */
            color: #fff;
          }
        `
      : null}
`

export const ErrorText = styled(Text)<{ severity?: 0 | 1 | 2 | 3 | 4 }>`
  color: ${({ theme, severity }) =>
    severity === 3 || severity === 4
      ? theme.accentFailure
      : severity === 2
      ? theme.deprecated_yellow2
      : severity === 1
      ? theme.textPrimary
      : theme.textSecondary};
`

export const TruncatedText = styled(Text)`
  text-overflow: ellipsis;
  max-width: 220px;
  overflow: hidden;
  text-align: right;
`

// styles
export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`

const SwapCallbackErrorInner = styled.div`
  background-color: ${({ theme }) => transparentize(0.9, theme.accentFailure)};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  width: 100%;
  padding: 3rem 1.25rem 1rem 1rem;
  margin-top: -2rem;
  color: ${({ theme }) => theme.accentFailure};
  z-index: -1;
  p {
    padding: 0;
    margin: 0;
    font-weight: 500;
  }
`

const SwapCallbackErrorInnerAlertTriangle = styled.div`
  background-color: ${({ theme }) => transparentize(0.9, theme.accentFailure)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 5px;
  min-width: 48px;
  height: 48px;
`

export function SwapCallbackError({ error }: { error: ReactNode }) {
  return (
    <SwapCallbackErrorInner>
      <SwapCallbackErrorInnerAlertTriangle>
        <AlertTriangle size={24} />
      </SwapCallbackErrorInnerAlertTriangle>
      <p style={{ wordBreak: 'break-word' }}>{error}</p>
    </SwapCallbackErrorInner>
  )
}

export const SwapShowAcceptChanges = styled(AutoColumn)`
  background-color: ${({ theme }) => transparentize(0.95, theme.deprecated_primary3)};
  color: ${({ theme }) => theme.accentAction};
  padding: 0.5rem;
  border-radius: 5px;
  margin-top: 8px;
`

export const ResponsiveTooltipContainer = styled(TooltipContainer)<{ origin?: string; width?: string }>`
  background-color: ${({ theme }) => theme.backgroundSurface};
  border: 1px solid ${({ theme }) => theme.backgroundInteractive};
  padding: 1rem;
  width: ${({ width }) => width ?? 'auto'};

  ${({ theme, origin }) => theme.deprecated_mediaWidth.deprecated_upToExtraSmall`
    transform: scale(0.8);
    transform-origin: ${origin ?? 'top left'};
  `}
`
