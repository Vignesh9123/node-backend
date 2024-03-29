import Posts from "../models/postSchema";
export async function getPostbyId(req,res){
    try{const id = req.params.id
    let post = await Posts.findOne({id})
    if(!post){
        return res.json({"message":"No post was found"})
    }
    return res.json(post)}
    catch(e){
        res.json({"message":e.message})
    }
}
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