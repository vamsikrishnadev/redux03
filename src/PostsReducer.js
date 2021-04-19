
const initState={
posts:[
    {id:"ab",name:"ab"},
    {id:"abc",name:"abc"},
    {id:"abcd",name:"abcd"}
]}

const PostsReducer=(state=initState,action)=>{

    switch(action.type)
    {
        case 'Add':
            console.log("add new post")
            console.log(action.payload)
            return {
                ...state,
                posts:[...state.posts,action.payload]
            }
            
           
        case 'Remove':
            console.log("remove a post")
            console.log(action.payload)
            return {
                ...state,posts:state.posts.filter(post=>{
                    return post.id!==action.payload
                })
            }
        default:
            return state
    }
    
}

export default PostsReducer