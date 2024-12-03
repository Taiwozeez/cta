import React from 'react';
import Head from 'next/head'; 
import Ctaside from '@/components/ctaside'; 


const Call = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>HTA PROJECT</title>
                <link rel="stylesheet" href="cta.css" />
            </Head>
            <Ctaside /> {}
        </div>
    );
}

export default Call;
