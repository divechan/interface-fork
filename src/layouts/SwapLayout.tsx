import Container from 'app/components/Container'
import DoubleGlowShadow from 'app/components/DoubleGlowShadow'
import { classNames } from 'app/functions'
import React, { FC } from 'react'
import AdSpace from 'app/components/AdSpace'
import DefaultLayout from './Default'
import Background from 'app/features/analytics/Background'

export interface Layout {
  id: string
}

export const BackgroundImage: FC<BackgroundImageProps> = ({ imageUrl }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.50, // Adjust the opacity of the background image
        zIndex: 0,    // Ensure the background is behind the card
      }}
      aria-hidden="true" // Mark the background as decorative and not focusable
    ></div>
  );
};

export const SwapLayoutCard: FC<{ className?: string }> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'flex flex-col gap-3 p-2 md:p-4 pt-4',
        className
      )}
      style={{
        background: 'rgba(12, 29, 49, 0.1)',  // Background color with 70% opacity
        borderRadius: '5px',                  // Border radius
        boxShadow: '0px 0px 20px 5px #1f4a7d',  // Box shadow
        border: '2px solid #1f4a7d',
      }}
    >
      {children}
    </div>
  )
}

export const Layout: FC<Layout> = ({ children, id }) => {
  return (
    <DefaultLayout>

      <Container id={id} className="py-4 md:py-12 lg:py-[120px] px-2 mx-auto" maxWidth="md">
        <div style={{ position: 'relative' }}>
          <BackgroundImage imageUrl="https://github.com/divechan/brandkit/blob/main/10.jpg?raw=true" />
          <DoubleGlowShadow>{children}</DoubleGlowShadow>
        </div>
        <AdSpace />
      </Container>
    </DefaultLayout>
  )
}

type SwapLayout = (id: string) => FC

export const SwapLayout: SwapLayout = (id: string) => {
  return (props) => <Layout id={id} {...props} />
}
