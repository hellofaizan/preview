const getMetaData = require("metadata-scraper");

export default async function getMetadata(url: string) {
  try {
    const data = await getMetaData(url);
    return {
      props: {
        title: data.title,
        description: data.description || null,
        url: data.url,
        provider: data.provider,
        section: data.section,
        author: data.author,
        twitter: data.twitter,
        facebook: data.facebook,
        image: data.image,
        icon: data.icon,
      },
    };
  } catch (error) {
    return null;
  }
}
