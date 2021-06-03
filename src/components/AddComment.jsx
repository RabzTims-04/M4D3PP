import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component{

    state = {
        addComment:{
            comment:'',
            rate:'',
            elementId:this.props['bookId']
        }
    }

    inputChange =(e)=>{
        let id= e.target.id
        this.setState({
            addComment:{
                ...this.state.addComment,
                [id]:e.target.value
            }
        })
    }
   
    submitComment = async (e) =>{
        e.preventDefault()
        const url = 'https://striveschool-api.herokuapp.com/api/comments/'
        const key= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YTk5YzE2ZWY2MDAwMTVjZWQwNWUiLCJpYXQiOjE2MjI3MTQ3ODAsImV4cCI6MTYyMzkyNDM4MH0.-Wnp1TVPbpihQKGNhWBtiCGVL0J9wSxFlGgsbMfh4CA"

        try {
            let response =await fetch (url,{
                method : 'POST',
                body: JSON.stringify(this.state.addComment),
                headers:{
                    'Authorization' : key,
                    'Content-type' : 'application/json'
                }
            })
            if(response.ok){
                alert('yay saved')
                this.setState({
                    addComment:{
                        comment:'',
                        rate:'',
                        elementId:'' 
                    }
                })
            }else{
                alert('Oh No!! :(')
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    

render(){
    return (
        <>
        <h6>Add Comments</h6>
        <Form className="mb-5 text-center " onSubmit={(e) => this.submitComment(e)}>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={1}
                            value={this.state.addComment.comment}
                            id="comment"
                            onChange={this.inputChange}
                        />
                    </Form.Group>
                    <div className="d-flex">
                    <Form.Group>
                        <Form.Label>Ratng 1-5</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Rate"
                            value={this.state.addComment.rate}
                            id="rate"
                            onChange={e => this.inputChange(e)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>ElementId</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Book Id"
                            id="elementId"
                            value={this.state.addComment.elementId}
                            onChange={e => this.inputChange(e)}
                        />
                    </Form.Group>
                    </div>
                    
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
        </>

    )
}
}

export default AddComment