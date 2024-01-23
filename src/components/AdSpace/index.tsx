import React from 'react';

function AdSpace() {
    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxHeight: '75vh',
        paddingTop: '25px',
        overflow: 'hidden',
    };

    const adsStyles = {
        maxWidth: '100%',
        height: 'auto',
        // textAlign: 'center',
    };

    const imageStyles = {
        width: '100%', // Default width for desktop
    };

    const imageLinkStyles = {
        textDecoration: 'none',
    };

    return (
    //@ts-ignore
        <div style={containerStyles}>
            {/* //@ts-ignore */}
            <div style={adsStyles}>
                {/* Advertisement Links */}
                {/* Change the link for the image and the website link it targets */}
                <a href="https://depot.steamexchange.io" target="_blank" rel="noopener noreferrer" style={imageLinkStyles}>
                    <image
                        href="https://github.com/divechan/brandkit/blob/main/depot%20ad.jpg?raw=true"
                        style={imageStyles}
                    />
                </a>
            </div>
        </div>
    );
}

export default AdSpace;