 import { Component } from 'react'
 import { ListGroup } from 'react-bootstrap'

class CommentArea extends Component{

    state = {
        commentArr : []
    }

    
    componentDidMount = async () =>{
        const url = 'https://striveschool-api.herokuapp.com/api/comments/' + this.props['elementId']
      /*   console.log(url); */
        console.log(this.props['elementId']);
        const key= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YTk5YzE2ZWY2MDAwMTVjZWQwNWUiLCJpYXQiOjE2MjI3MTQ3ODAsImV4cCI6MTYyMzkyNDM4MH0.-Wnp1TVPbpihQKGNhWBtiCGVL0J9wSxFlGgsbMfh4CA"

        try {
            let response =await fetch (url,{
                headers:{
                    'Authorization' : key
                }
            })
            /* console.log(response); */
            const comments = await response.json()
            console.log(comments);
            this.setState({
                commentArr : comments
            })
         
        } catch (error) {
            console.log(error);
        }
            
    }

   refresh =()=>{
         window.location.reload();
    }

    render(){
        return (
            <>
          {/*   <Button onClick={this.refresh}>Hide</Button> */}
            {
            (this.state.commentArr.length === 0)
                 ?<p>No Comments</p>
                 :this.state.commentArr.map((comment, i) =>
                <>
                    <ListGroup
                    onClick={this.refresh}
                     key={i}>
                       <ListGroup.Item >
                          {comment.comment}
                       </ListGroup.Item>
                       <ListGroup.Item >
                       rate = {comment.rate}
                       </ListGroup.Item>
                    </ListGroup>
                    <hr /> 
                    </>
                 )
                 }
           
        </>
        )
    }
}

export default CommentArea 