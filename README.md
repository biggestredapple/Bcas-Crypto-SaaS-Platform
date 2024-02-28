# Crypto Assets Reports SaaS Platform

## Overview

This task is to develop a simplified web application for a SaaS platform dedicated to providing comprehensive reports on cryptocurrency assets like Bitcoin, Ethereum, and others. \
These reports will encompass detailed narratives, data visualizations (charts), images, and hyperlinks to external resources. \
Goal is to enable users to effortlessly search for and access extensive information on their cryptocurrency of interest.

## Tech stack

- React
- Redux toolkit
- Json-server(for mock data server in the development phase)
- TailwindCSS
- React Spring(for UI animation)

## Features

1. Dashboard Page

    In the Dashboard page, users can view informations of crypto currencies. \
    And users can search currencies based on their name and price. \

2. Report Page

    In the page, users can view the description, external links, news and trending data of the specific currency. \
    Trending data table are mocked by random value and updated in real time.

3. Data reference

    JSON mock data was collected from <https://www.coinmarketcap.com>.

## Run and navigate

### Run the app on local

1. Clone the repository and naviagte to the project directory.
2. Open a terminal and run the following command.

  ```bash
    npm install
    npm run dev
  ```

### Deploy

Live net <https://bcas-crypto-saa-s-platform.vercel.app>
