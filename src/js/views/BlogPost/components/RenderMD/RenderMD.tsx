import Markdown from 'markdown-to-jsx'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/esm/styles/prism/night-owl'

import React from 'react'
import styles from './RenderMD.module.css'
import { CodeBlockProps, languages, registerPrismLanguajes, RenderMDProps } from './RenderMD.utils'



/*** 
 Docs:
 Renders code properly highlight: https://www.npmjs.com/package/react-syntax-highlighter
 Renders markdown: 
 */
registerPrismLanguajes({PrismInstance: SyntaxHighlighter, languages: languages})

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const language = className ? className.replace(/lang-/, '') : 'javascript';
  const code = children
  const codeIsInline = !code.includes('\n')
  return (
    <SyntaxHighlighter
      wrapLongLines={true}
      language={language}
      style={nightOwl}
      customStyle={
        codeIsInline ? { padding: '0.2rem 0.3rem', borderRadius: '0.3rem' } : {}
      }
      PreTag={codeIsInline ? 'span' : 'pre'}
    >
      {code}
    </SyntaxHighlighter>
  )
}
export const RenderMD: React.FC<RenderMDProps> = ({ MD }) => {
  return (
    <div className={styles[`render-md-box`]}>
      <Markdown
        options={{
          overrides: {
            code: {
              component: CodeBlock,
            },
            pre: {
              component: 'div',
            },
            img: {
              props: {
                loading: "lazy"
              }
            }
          },
        }}
      >
        {MD}
      </Markdown>
    </div>
  )
}
