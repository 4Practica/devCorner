import React from "react"
import { MetaData as IMetaData, OpenGraph, TwitterCards } from "./MetaData.types"

interface MetaDataProps {
    meta: IMetaData
    og: OpenGraph
    tw: TwitterCards
}
export const MetaData: React.FC<MetaDataProps> = ({meta, og, tw}: MetaDataProps) => {
    return (
        <React.Fragment>
            <meta charSet="utf-8"/>
            {meta.title && <title>{meta.title}</title>}
            {meta.description && <meta name="description" content={meta.description} />}
            {meta.author && <meta name="author" content={meta.author} />}
            {meta.keywords && <meta name="keywords" content={meta.keywords.join(", ")} />}
            
            {og.title && <meta name="og:title" content={og.title} />}
            {og.type && <meta name="og:type" content={og.type} />}
            {og.url && <meta name="og:url" content={og.url} />}
            {og.image && <meta name="og:image" content={og.image} />}
            {og.description && <meta name="og:description" content={og.description} />}
            {og.imageAlt &&  <meta name="og:image:alt" content={og.imageAlt} />}
            {og.siteName &&  <meta name="og:site_name" content={og.siteName} />}
            {og.locale &&  <meta name="og:locale" content={og.locale} />}
            
            {tw.card && <meta name="twitter:card" content={tw.card} />}
            {tw.title && <meta name="twitter:title" content={tw.title} />}
            {tw.description && <meta name="twitter:description" content={tw.description} />}
            {tw.image && <meta name="twitter:image" content={tw.image} />}
            {tw.imageAlt && <meta name="twitter:image:alt" content={tw.imageAlt} />}
            {tw.site && <meta name="twitter:site" content={tw.site} />}
            {tw.siteId && <meta name="twitter:site:id" content={tw.siteId} />}
            {tw.creator && <meta name="twitter:creator" content={tw.creator} />}
        </React.Fragment>
    )
}