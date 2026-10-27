
import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.shiulitech.in'

function SEO({
  title,
  description,
  path = '/',
}) {
  const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Shiuli Technology" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
    </Helmet>
  )
}

export default SEO
