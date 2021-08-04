import Head from 'next/head'
const MetaHeading = ({ title, thumbnail }) => {
  return (
    <Head>
      <meta
        name='description'
        content='Best Learning Platfrom for self coders.'
      />
      <meta name='viewport' content='width, initial-scale=1.0' />
      <title>CodeN | {title}</title>
      <meta name='title' content={`CodeN | ${title}`} />
      <meta
        name='description'
        content='This is my self project built by using nextjs'
      />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={`CodeN | ${title}`} />
      <meta
        property='og:description'
        content='This is my self project built by using nextjs'
      />
      <meta property='og:image' content={thumbnail} />

      <meta property='twitter:card' content={thumbnail} />
      <meta property='twitter:title' content={`CodeN | ${title}`} />
      <meta
        property='twitter:description'
        content='This is my self project built by using nextjs'
      />
      <meta property='twitter:image' content={thumbnail} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
export default MetaHeading
