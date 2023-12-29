import { style } from '@vanilla-extract/css'
import { lightGrayOverlayOnHover } from 'nft/css/common.css'

import { sprinkles } from '../../nft/css/sprinkles.css'

export const ChainSelector = style([
  lightGrayOverlayOnHover,
  sprinkles({
    borderRadius: '4',
    height: '40',
    cursor: 'pointer',
    border: 'none',
    color: 'white',
    background: 'sxdblue',
  }),
])

export const Image = style([
  sprinkles({
    width: '32',
    height: '32',
  }),
])
