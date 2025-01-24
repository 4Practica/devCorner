import { MetaData, OpenGraph, TwitterCards, ViewMetaData } from "@common/layout/MetaData/MetaData.types"
import { StrapiMetaData } from "../types/metaData"

export const metaDataAdapter = (data: StrapiMetaData | null):ViewMetaData => {
    if (data === null) {
        return null
    }
    const { attributes } = data
    const meta: MetaData = {
        title: attributes.MetaTitle,
        description: attributes.MetaDescription,
        author: ""
    }
    const og: OpenGraph = {
        title: attributes.OgTitle,
        description: attributes.OgDescription,
        type: attributes.OgType,
        url: attributes.OgUrl,
        image: attributes.OgImage,
        siteName: attributes.OgSiteName,
        locale: attributes.OgLocale,
        imageAlt: attributes.OgImageAlt
    }
    const tw: TwitterCards = {
        card: attributes.TwitterCard,
        title: attributes.TwitterTitle,
        description: attributes.TwitterDescription,
        image: attributes.TwitterImage,
        imageAlt: attributes.TwitterImageAlt,
        site: attributes.TwitterSite,
        siteId: attributes.TwitterSiteId,
        creator: attributes.TwitterCreator
    }
    const viewMetaData: ViewMetaData = { meta, og, tw }
    return viewMetaData 
}