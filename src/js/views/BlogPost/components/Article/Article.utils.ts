/* REvisar libreria de MD */
/* https://www.npmjs.com/package/markdown-to-jsx */
/* Schema and markup for blogs  */

export interface ArticleImageSizingSrc {
  xs: string
  sm: string
  md: string
  lg: string
}
export interface ArticleImg {
  src: ArticleImageSizingSrc
  alt: string
}

export interface ArticleAuthor {
  name: string
  webAddress: string
}
export interface BlogPostArticle {
  title: string
  shortDescription: string
  author: ArticleAuthor
  date: string
  img: ArticleImg
  tags: string[]
}

export const dummyData: BlogPostArticle = {
  title: 'Essential TypeScript Best Practices for Clean Code',
  shortDescription:
    "Learn how to leverage TypeScript's features to improve your development workflow.",
  author: {
    name: 'Bryan García',
    webAddress: 'https://bryanstgarcia.com',
  },
  date: '19 Jan 2022',
  img: {
    src: {
      xs: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      sm: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      md: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      lg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    alt: 'Descripción de la imagen',
  },
  tags: ['Frontend', 'Backend'],
}
