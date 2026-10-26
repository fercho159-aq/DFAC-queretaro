import type { MetadataRoute } from 'next'
import { promises as fs } from 'fs'
import path from 'path'

const BASE_URL = 'https://dfacparacimbra.com.mx'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/faq`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/viga-h20`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/construccion-con-puntales`, changeFrequency: 'monthly', priority: 0.7 },
  ]

  const productsFile = await fs.readFile(
    path.join(process.cwd(), 'public', 'data', 'products.json'),
    'utf-8'
  )
  const products: { slug: string }[] = JSON.parse(productsFile)

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...productPages]
}
