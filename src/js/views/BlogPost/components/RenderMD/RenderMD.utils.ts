import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import docker from 'react-syntax-highlighter/dist/esm/languages/prism/docker'
import nginx from 'react-syntax-highlighter/dist/esm/languages/prism/nginx'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import git from 'react-syntax-highlighter/dist/esm/languages/prism/git'
import graphql from 'react-syntax-highlighter/dist/esm/languages/prism/graphql'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown'
import sql from 'react-syntax-highlighter/dist/esm/languages/prism/sql'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'

type TLanguages = {
  [key: string]: unknown
}
export const languages: TLanguages = {
  jsx: jsx,
  javascript: javascript,
  typescript: typescript,
  python: python,
  css: css,
  docker: docker,
  nginx: nginx,
  bash: bash,
  git: git,
  graphql: graphql,
  json: json,
  markdown: markdown,
  scss: scss,
  sql: sql,
  yaml: yaml,
}

interface PrismLanguajes {
  languages: TLanguages
  PrismInstance: typeof SyntaxHighlighter
}
export const registerPrismLanguajes = ({
  PrismInstance,
  languages,
}: PrismLanguajes) => {
  for (const language in languages) {
    PrismInstance.registerLanguage(language, languages[language])
  }
}
export interface RenderMDProps {
  MD: string
}
export interface CodeBlockProps {
  children: string
  className?: string
}
