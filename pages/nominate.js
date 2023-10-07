import Head from 'next/head'
import Link from 'next/link'
import MetaTags from '../components/Metatags.js'
import Analytics from '../components/Analytics.js'
import Script from 'next/script'
import { useRouter } from 'next/router'

export default function Nominate({ designers }) {
  const randomId = function () {
    return Math.random().toString(36).substring(2, 8)
  }
  const scriptId = randomId()

  return (
    <div className="container">
      <Head>
        <title>Nigerians Who Design | Nominate</title>
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      <div style={{ width: '100%', position: 'relative', height: '100vh' }}>
        <iframe
          data-tally-src="https://tally.so/r/w8Ldzz?transparentBackground=1"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Nigerians Who Design"
        ></iframe>{' '}
        <Analytics />
      </div>

      <Link href="/" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          height: 100%;
          overflow: hidden;
        }
        .container {
          min-height: 100vh;
        }
        iframe {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          border: 0;
        }
      `}</style>

      <Script
        id={scriptId}
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          console.log('klkel')
          Tally.loadEmbeds()
          console.log(Tally.loadEmbeds())
        }}
      />
    </div>
  )
}
