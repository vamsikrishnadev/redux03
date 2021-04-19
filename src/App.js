import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import react from 'react';

class App extends react.Component {
  state={
    newPost:""
  }
  txtChange=(e)=>{
    this.setState({newPost:e.target.value})
    console.log(this.state)
  }
  addPost=()=>{
    let post={
      id:this.state.newPost,
      name:this.state.newPost
    }
    this.props.addPosts(post)
    this.setState({newPost:''})
  }
  deletePost=(e)=>{
    console.log(e.target.id)
    this.props.delPosts(e.target.id)
  }
  render(){
  return (
    <div className="App">
     {this.props.posts.map(post=>(
       <div key={post.id} id={post.id} onClick={this.deletePost}>{post.name}</div>
     ))}
     <div>
       <input type='text' value={this.state.newPost} onChange={this.txtChange}></input>
       <button onClick={this.addPost}>Add Posts</button>
       </div>
    </div>
  )
     }
}

const mapStateToProps=(state)=>{
  return{
    posts:state.posts
  }  
}

const mapDispatchToProps=(dispatch)=>{
  return {
    addPosts:(post)=>dispatch({type:'Add',payload:post}),
    delPosts:(id)=>dispatch({type:'Remove',payload:id})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
