import { PostCard } from '@common/components/PostCard'
import { Label } from '@common/components/PostCard/components/Tags/Tags'
import { ArrowRightIcon } from '@common/icons'
import React from 'react'

export type BlogPost = {
    imgUrl: string
    title: string
    labels: Label[]
    description: string
    path: string
}
interface SearchResultProps {
    results: BlogPost[]
}
const SearchResult: React.FC<SearchResultProps> = ({ results }) => {
    return (
        <React.Fragment>
            {results.map((blogPost, index) => {
                return (
                <PostCard key={index}>
                    <PostCard.Image
                    src='https://images.pexels.com/photos/6803545/pexels-photo-6803545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='Chilling'
                    position='bottom right'
                    />
                    <PostCard.Tags
                    labels={blogPost.labels}
                    />
                    <PostCard.Author>John Doe • 19 Jan 2022</PostCard.Author>
                    <PostCard.Title headerType={'h3'}>
                    A small business is only as good as its tools and it is totally
                    true.
                    </PostCard.Title>
                    <PostCard.Description>
                    We've all experienced the chaos of multiple spreadsheets, tracking
                    and insight tools, and scrambling for the right data at the right
                    time.
                    </PostCard.Description>
                    <PostCard.CTA to={'/home'}>
                    {'Read post'}
                    <ArrowRightIcon />
                    </PostCard.CTA>
                </PostCard>
                )
            })}
        </React.Fragment>
    )
}
export default SearchResult
