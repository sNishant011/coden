import Head from 'next/head'
const MetaHeading = ({ title }) => {
  return (
    <>
      <Head>
        <title>CodeN | {title}</title>
        <meta
          name='description'
          content='Best Learning Platfrom for self coders.'
        />
        <meta name='viewport' content='width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  )
}
export default MetaHeading
