import React from 'react'
import {
  MetaData as IMetaData,
  OpenGraph,
  TwitterCards,
} from './MetaData.types'

interface MetaDataProps {
  meta: IMetaData
  og: OpenGraph
  tw: TwitterCards
}
export const MetaData: React.FC<MetaDataProps> = ({
  meta,
  og,
  tw,
}: MetaDataProps) => {
  return (
    <React.Fragment>
      <meta charSet='utf-8' />
      {meta.title && <title>{meta.title}</title>}
      {meta.description && (
        <meta name='description' content={meta.description} />
      )}
      {meta.author && <meta name='author' content={meta.author} />}

      {og.title && <meta property='og:title' content={og.title} />}
      {og.type && <meta property='og:type' content={og.type} />}
      {og.url && <meta property='og:url' content={og.url} />}
      {og.image && <meta property='og:image' content={og.image} />}
      {og.description && (
        <meta property='og:description' content={og.description} />
      )}
      {og.imageAlt && <meta property='og:image:alt' content={og.imageAlt} />}
      {og.siteName && <meta property='og:site_name' content={og.siteName} />}
      {og.locale && <meta property='og:locale' content={og.locale} />}

      {tw.card && <meta property='twitter:card' content={tw.card} />}
      {tw.title && <meta property='twitter:title' content={tw.title} />}
      {tw.description && (
        <meta property='twitter:description' content={tw.description} />
      )}
      {tw.image && <meta property='twitter:image' content={tw.image} />}
      {tw.imageAlt && (
        <meta property='twitter:image:alt' content={tw.imageAlt} />
      )}
      {tw.site && <meta property='twitter:site' content={tw.site} />}
      {tw.siteId && <meta property='twitter:site:id' content={tw.siteId} />}
      {tw.creator && <meta property='twitter:creator' content={tw.creator} />}
    </React.Fragment>
  )
}
