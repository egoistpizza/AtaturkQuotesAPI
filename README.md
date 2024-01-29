# Ataturk Quotes API

## Overview

This project is an API that provides random quotes attributed to Mustafa Kemal Atatürk, the founder of the Republic of Turkey. It utilizes the AtaturkQuotesDB databases, available at [AtaturkQuotesDB](https://github.com/egoistpizza/AtaturkQuotesDB), to support quotes in 11 different languages. The supported languages include Turkish, Chinese, Korean, Japanese, German, English, Russian, Italian, French, Polish, and Spanish. The application is hosted on AWS Cloud, ensuring 24/7 accessibility.

## Purpose

The primary goal of this application is to leverage the rich and diverse AtaturkQuotesDB databases, offering an API that delivers random Atatürk quotes across various languages. The API aims to provide a seamless and efficient way to access inspirational quotes attributed to Mustafa Kemal Atatürk.

## Features

- Supports 11 languages, offering a diverse set of quotes.
- Utilizes AtaturkQuotesDB databases for a comprehensive collection of quotes.
- Hosted on AWS Cloud for constant availability.

## Usage

To access a random quote in your desired language, make a GET request to the following endpoint:

\bash
http://3.147.64.168/{language-code}

Replace `{language-code}` with the appropriate language code, such as `tr` for Turkish or `en` for English.

## Getting Started

1. Clone the [AtaturkQuotesAPI repository](https://github.com/egoistpizza/AtaturkQuotesAPI).
2. Install dependencies using `npm install`.
3. Start the server with `npm start`.

## Contributions

Contributions and feedback are welcome. Feel free to submit issues or pull requests on the [GitHub repository](https://github.com/egoistpizza/AtaturkQuotesAPI).

## License

This project is licensed under the GNU GPL v3. See the [LICENSE](LICENSE) file for details.

Copyright © 2024 Yusuf ÖZÇETİN