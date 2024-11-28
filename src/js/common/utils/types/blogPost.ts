import { Author } from "./author";
import { Tag } from "./tag";

export interface BlogPost {
    id: number;
    title: string;
    shortDescription: string;
    blogMd: string;
    author: Author;
    img: BlogPostImg;
    date: string;
    tags: Tag[];
    slug: string;
}


interface BlogPostImg {
    src: ImgSourceSizes;
    alt: string
}
interface ImgSourceSizes {
    xs: string;
    sm: string;
    md: string;
    lg: string;
}
