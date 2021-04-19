
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
            return state
        case 'Remove':
            console.log("remove a post")
            return state
        default:
            return state
    }
}

export default PostsReducer