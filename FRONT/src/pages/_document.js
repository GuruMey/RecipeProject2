import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* Other head elements like stylesheet links, scripts, etc. */}

                    {/* Viewport meta tag */}
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
