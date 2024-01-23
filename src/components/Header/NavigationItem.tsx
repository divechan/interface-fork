import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { MenuItem, MenuItemLeaf, MenuItemNode } from 'app/components/Header/useMenu'
import Typography from 'app/components/Typography'
import { classNames } from 'app/functions'
import useDesktopMediaQuery, { useTouchDeviceMediaQuery } from 'app/hooks/useDesktopMediaQuery'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, Fragment, useCallback, useRef } from 'react'

interface NavigationItem {
  node: MenuItem
}

export const NavigationItem: FC<NavigationItem> = ({ node }) => {
  const router = useRouter()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const isDesktop = useDesktopMediaQuery()
  const touchDevice = useTouchDeviceMediaQuery()

  const handleToggle = useCallback((open, type) => {
    if (!open && type === 'enter') {
      buttonRef?.current?.click()
    } else if (open && type === 'leave') {
      buttonRef?.current?.click()
    }
  }, [])

  if (node && node.hasOwnProperty('link')) {
    const { link } = node as MenuItemLeaf
    return (
      <Typography
        onClick={() => router.push(link)}
        weight={700}
        variant="sm"
        className={classNames(
          router.asPath === link ? 'text-white' : '',
          'hover:text-white font-bold py-5 px-2 rounded flex gap-3'
        )}
      >
        {!isDesktop && node.icon}
        {node.title}
      </Typography>
    )
  }

  return (
    <Popover key={node.key} className="relative flex">
      {({ open }) => (
        <div
          {...(!touchDevice && {
            onMouseEnter: () => handleToggle(open, 'enter'),
            onMouseLeave: () => handleToggle(open, 'leave'),
          })}
        >
          <Popover.Button ref={buttonRef}>
            <Typography
              weight={700}
              variant="sm"
              className={classNames(open ? 'text-white' : '', 'font-bold py-5 px-2 rounded flex gap-3 items-center')}
            >
              {!isDesktop && node.icon}
              {node.title}
              <ChevronDownIcon strokeWidth={5} width={12} />
            </Typography>
          </Popover.Button>
          {node.hasOwnProperty('items') && (
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Popover.Panel className="z-10 w-full absolute w-40 translate-y-[-8px] translate-x-[-8px]">
                <div
                  className={classNames(
<<<<<<< HEAD
                    'shadow-md shadow-black/40 border border-dark-700 rounded overflow-hidden',
                    !touchDevice
                      ? "backdrop-blur-fallback before:z-[-1] before:rounded before:absolute before:w-full before:h-full before:content-[''] before:backdrop-blur-[20px] bg-white bg-opacity-[0.02]"
                      : 'bg-dark-800 inset-0'
=======
                    'shadow-md shadow-blue-700 border border-blue-600 rounded-[5px] overflow-hidden',
                    !touchDevice
                      ? "backdrop-blur-fallback before:z-[-1] before:rounded before:absolute before:w-full before:h-full before:content-[''] before:backdrop-blur-[20px] bg-white bg-opacity-[0.02]"
                      : 'bg-blue-700 inset-0'
>>>>>>> 765f29248995a2f8273500ee7a463fa6f73de47e
                  )}
                >
                  {(node as MenuItemNode).items.map((leaf) => (
                    <a
                      key={leaf.key}
                      href={leaf.link}
<<<<<<< HEAD
                      target={leaf.title === "Mainnet" || leaf.title === "Testnet" || leaf.title === "Buy Crypto" ? "_blank" : '_self'}
                      rel={leaf.title === "Mainnet" || leaf.title === "Testnet" || leaf.title === "Buy Crypto" ? "noopener noreferrer" : ''}
=======
                      target={leaf.title === "Mainnet" || leaf.title === "Testnet" || leaf.title === "Onramper" ? "_blank" : '_self'}
                      rel={leaf.title === "Mainnet" || leaf.title === "Testnet" || leaf.title === "Onramper" ? "noopener noreferrer" : ''}
>>>>>>> 765f29248995a2f8273500ee7a463fa6f73de47e
                    >
                      <Typography
                        variant="sm"
                        weight={700}
                        onClick={(e) => {
<<<<<<< HEAD
                          if (leaf.title !== "Mainnet" && leaf.title !== "Testnet" && leaf.title !== "Buy Crypto") {
=======
                          if (leaf.title !== "Mainnet" && leaf.title !== "Testnet" && leaf.title !== "Onramper") {
>>>>>>> 765f29248995a2f8273500ee7a463fa6f73de47e
                            e.preventDefault(); // Prevent the default navigation behavior for other links
                            router.push(leaf.link).then(() => buttonRef?.current?.click());
                          }
                        }}
<<<<<<< HEAD
                        className="relative px-3 py-2 m-1 rounded-lg hover:cursor-pointer hover:text-white hover:bg-white/10"
=======
                        className="relative px-3 py-2 m-1 rounded-[5px] hover:cursor-pointer hover:text-white hover:bg-blue-700"
>>>>>>> 765f29248995a2f8273500ee7a463fa6f73de47e
                      >
                        {leaf.title}
                      </Typography>
                    </a>
                  ))}

                </div>
              </Popover.Panel>
            </Transition>
          )}
        </div>
      )}
    </Popover>
  )
}
