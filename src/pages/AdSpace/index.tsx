import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 75vh;
  padding-top: 105px;
  overflow: hidden;
`

const Ads = styled.div`
  max-width: 100%;
  height: auto;
  text-align: center;
`

const Image = styled.img`
  width: 70%; /* Default width for desktop */
  transition: box-shadow 500ms ease; /* Increase the transition duration for a slower effect */
  box-shadow: 0px 4px 8px rgba(31, 74, 125, 0.6); /* Set the box shadow color to #1f4a7d */

  &:hover {
    box-shadow: 0px 16px 24px rgba(31, 74, 125, 0.9); /* Adjust the hover box shadow color */
  }

  /* Media query for mobile screens */
  @media (max-width: 768px) {
    width: 75%;
  }
`

const ImageLink = styled.a`
  text-decoration: none;
`

function AdSpace() {
  return (
    <Container>
      <Ads>
        {/* Advertisement Links */}
        {/* Change the link for the image and the website link it targets */}
        <ImageLink href="https://depot.steamexchange.io" target="_blank" rel="noopener noreferrer">
          <Image src="https://github.com/divechan/brandkit/blob/main/depot%20ad.jpg?raw=true" alt="Ad 1" />
        </ImageLink>
      </Ads>
    </Container>
  )
}

export default AdSpace
