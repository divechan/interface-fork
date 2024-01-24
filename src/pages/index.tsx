import Container from 'app/components/Container'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Dashboard() {
  const router = useRouter()
  useEffect(() => {
    router.push("/swap")
    // @ts-ignore TYPE NEEDS FIXING
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container id="dashboard-page" className="py-4 mx-auto md:py-8 lg:py-12" maxWidth="2xl">
      <Head>
        <title>Dashboard | SteamX</title>
        <meta name="description" content="SteamX" />
        <meta key="twitter:description" name="twitter:description" content="SteamX" />
        <meta key="og:description" property="og:description" content="SteamX" />
      </Head>
    </Container>
  )
}
