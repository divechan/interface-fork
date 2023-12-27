import React, { useState } from 'react'

interface OnramperWidgetModalProps {
  className: string
  href: string
  id: string
  children?: React.ReactNode
}

const OnramperWidgetModal = ({ className, href, id, children }: OnramperWidgetModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const openOnramperWidget = () => {
    window.open(
      'https://buy.onramper.com/?apiKey=pk_prod_01H5AXWF5H767QV1SA4Z3RRPWE',
      'onramper-widget',
      'width=420,height=630,scrollbars=yes,resizable=yes'
    )
  }

  const modalStyle: React.CSSProperties = {
    display: isModalOpen ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 9999,
    overflow: 'auto',
  }

  const modalContentStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    borderRadius: '4px',
    padding: '20px',
    width: '420px',
    height: '630px',
  }

  const closeStyle: React.CSSProperties = {
    position: 'absolute',
    top: '10px',
    right: '20px',
    fontSize: '24px',
    cursor: 'pointer',
  }

  const iframeStyle: React.CSSProperties = {
    border: 'none',
    width: '100%',
    height: '100%',
  }

  return (
    <>
      {/* Apply the same className, href, and id as your other menu items */}
      <a href={href} onClick={openModal} className={className} id={id}>
        {children}
      </a>

      <div style={modalStyle}>
        <div style={modalContentStyle}>
          <span style={closeStyle} onClick={closeModal}>
            &times;
          </span>
          <iframe
            src="https://buy.onramper.com/?apiKey=pk_prod_01H5AXWF5H767QV1SA4Z3RRPWE"
            width="100%"
            height="100%"
            title="Onramper Widget"
            allow="accelerometer; autoplay; camera; gyroscope; payment"
            style={iframeStyle}
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default OnramperWidgetModal
