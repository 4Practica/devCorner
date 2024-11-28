import { BlogPost } from "@common/utils/types/blogPost";
import { cmsClient } from "@services/cms/cmsService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useBlogPost (path: string) {
    const [ blogPost, setBlogPost ] = useState<BlogPost>()
    const navigate = useNavigate()
    
    const handleRequest = async (slug: string): Promise<void> => {
        console.log(slug)
        /* 
            Once created, this function needs to be replaced with getBlogPost (not getBlogPosts)
        */
        const response = await cmsClient.getBlogPosts(/* slug */)
        if (response.success === false) {
            console.log("Error en la solicitud")
            navigate("/blog")
            return;
        }
        console.log()
        const blogPostIndex = 0;
        /* This setter should be replaced too. Just with response.data */
        setBlogPost(response.data[blogPostIndex])
    }

    useEffect(() => {
        handleRequest(path)
    }, [path])
    return {blogPost}
}