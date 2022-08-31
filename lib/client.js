import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


// connect to santiy client
export const client = sanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: '2022-08-31',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
  return builder.image(source)
}