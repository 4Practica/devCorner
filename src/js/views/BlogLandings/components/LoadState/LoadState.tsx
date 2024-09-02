import { PostCardSkeleton } from "@common/components/PostCardSkeleton"
import { RESPONSIVE_SIZE } from "@common/utils/enums"
import { useScreenSize } from "@common/utils/hooks"
import React from "react"

const LoadState = () => {
    const {width} = useScreenSize()
    if (width <= RESPONSIVE_SIZE.SM) {
        return (
            <React.Fragment>
                <PostCardSkeleton />
                <PostCardSkeleton opacity="0.5"/>
            </React.Fragment>
        )
    }
    if (width <= RESPONSIVE_SIZE.MD) {
        return (
            <React.Fragment>
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton opacity="0.5"/>
                <PostCardSkeleton opacity="0.5"/>
            </React.Fragment>
        )
    }
    if (width >= RESPONSIVE_SIZE.LG) {
        return (
            <React.Fragment>
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton opacity="0.5"/>
                <PostCardSkeleton opacity="0.5"/>
                <PostCardSkeleton opacity="0.5"/>
            </React.Fragment>
        )
    }
}

export default LoadState