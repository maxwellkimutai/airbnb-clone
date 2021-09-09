import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
              href="https://a0.muscache.com/airbnb/static/packages/dls/dls-lite_cereal-d9f6fdb2a0dd4a18c37f8ee01de8ec3d.css"
              rel="stylesheet"
              type="text/css"
              media="all"
            />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument