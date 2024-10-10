/// <reference types="vite/client" />
declare module '@views'
declare module '@services'
declare module '@common'
declare module '@assets'
declare module '@styles'

interface ImportMetaEnv {
  readonly VITE_CMS_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
