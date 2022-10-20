import sanityClient from  '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

export default sanityClient({
    projectId: 'xwugabeq',
    dataset: 'production'
})

const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source);