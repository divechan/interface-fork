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
<<<<<<< HEAD
        // textAlign: 'center',
=======
        textAlign: 'center',
>>>>>>> 765f29248995a2f8273500ee7a463fa6f73de47e
    };

    const imageStyles = {
        width: '100%', // Default width for desktop
    };

    const imageLinkStyles = {
        textDecoration: 'none',
    };

    return (
<<<<<<< HEAD
    //@ts-ignore
        <div style={containerStyles}>
            {/* //@ts-ignore */}
=======
        <div style={containerStyles}>
>>>>>>> 765f29248995a2f8273500ee7a463fa6f73de47e
            <div style={adsStyles}>
                {/* Advertisement Links */}
                {/* Change the link for the image and the website link it targets */}
                <a href="https://depot.steamexchange.io" target="_blank" rel="noopener noreferrer" style={imageLinkStyles}>
<<<<<<< HEAD
                    <image
                        href="https://github.com/divechan/brandkit/blob/main/depot%20ad.jpg?raw=true"
=======
                    <img
                        src="https://github.com/divechan/brandkit/blob/main/depot%20ad.jpg?raw=true"
                        alt="Ad 1"
>>>>>>> 765f29248995a2f8273500ee7a463fa6f73de47e
                        style={imageStyles}
                    />
                </a>
            </div>
        </div>
    );
}

export default AdSpace;