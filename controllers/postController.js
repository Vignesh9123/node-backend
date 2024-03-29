import Posts from "../models/postSchema";
export default async function getPosts(req,res){
    try {
        const post = await Posts.find({})
        if(!post){
           return res.status(404).json({"message":"Error fetching posts"})
        }
       return res.status(200).json(post)
    } catch (e) {
        res.status(404).json({"message":e.message})
    }
}