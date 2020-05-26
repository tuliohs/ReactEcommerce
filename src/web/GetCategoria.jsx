import React, { useState } from 'react'
import getUrls from 'get-urls';
import fetch from 'node-fetch';
import scrape from 'website-scraper';

export default function GetCategoria() {

    const options = {
        urls: ['https://best.aliexpress.com/?lan=pt']
    };

    // with async/await
    const result = scrape(options);

    // with promise
    scrape(options).then((result) => {
        console.log(result.values)
    });

    // or with callback
    scrape(options, (error, result) => { });
}