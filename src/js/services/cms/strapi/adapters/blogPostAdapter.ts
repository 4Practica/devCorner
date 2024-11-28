import { formatDate } from "@common/utils/tools/formatDate";
import { StrapiBlogPost } from "../types/blogPost";
import { BlogPost } from "@common/utils/types/blogPost";

export function blogPostAdapter(data: StrapiBlogPost): BlogPost {
    const { attributes } = data
    const { blogData, imageAlt, imageUrl, shortDescription, title, slug, publishedAt, author, tags } = attributes
    const {name: authorName, webAddress} = author.data.attributes
    
    const tagsData = tags.data.map(tagBase => {
        return {id: tagBase.id, name: tagBase.attributes.name, slug: tagBase.attributes.slug}
    })

    return {
        id: data.id,
        title: title,
        shortDescription: shortDescription,
        author: {
            id: author.data.id,
            name: authorName,
            webAddress: webAddress
        },
        blogMd: blogData,
        img: {
            src: {
                xs: imageUrl,
                sm: imageUrl,
                md: imageUrl,
                lg: imageUrl,
            },
            alt: imageAlt
        },
        date: formatDate(publishedAt),
        tags: tagsData,
        slug: slug
    }
}