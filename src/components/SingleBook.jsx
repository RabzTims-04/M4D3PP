
import {Container, Row, Card, Button} from 'react-bootstrap'
import {Component} from 'react'
import CommentArea from './CommentArea'


class SingleBook extends Component{

    state = {
        
        selectId: '',
        selected:false,
        buttonselect:false,
        elementId:'',
        deleteId:''
    }

    deleteComment = async (id)=>{
        const url = 'https://striveschool-api.herokuapp.com/api/comments/' + id
        const key= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YTk5YzE2ZWY2MDAwMTVjZWQwNWUiLCJpYXQiOjE2MjI3MTQ3ODAsImV4cCI6MTYyMzkyNDM4MH0.-Wnp1TVPbpihQKGNhWBtiCGVL0J9wSxFlGgsbMfh4CA"

        if(window.confirm('are u sure')){
            const response = await fetch (url,{
                method : 'DELETE',
                headers :{
                    'Authorization' : key  
                }
            })
            console.log(response);
        }
    }

    render(){
        return(
            <Container>

                    
            <Row className="justify-content-center mt-3"> 

             {this.props["name"].map ((book,index) => ( 
                <Card
                id= {book["asin"]}
                className="mt-3 mx-3" 
                key={index}
                style={{width:'14rem', height:'35rem'}}  
                >
            
                <Card.Img 
                id= {book["asin"]}
                onClick={ (e)=> {
                     this.setState({ selectId: e.target.id},()=>{
                        console.log(e.target.id)
                    }) 
                }}
                style={{
                    height: (this.state.selectId === book['asin'])? '19rem':'20rem'
                }}
                variant="top" 
                src={book.img} 
                />
                <Card.Body
                id= {book['asin']}  
                onClick={(e)=>{
                    this.setState({elementId: e.target.id},()=>{
                    })
                }} 
                style={{position: 'relative'}}>

                    {this.state.elementId === book['asin'] && <CommentArea elementId={this.state.elementId}/>}
                

                    <Card.Title
                    style={{fontSize:'15px'}}                    
                    >{book.title}
                    </Card.Title>

                    <Card.Text>
                    <p className="text-center">{book.category}</p> 
                    <span
                    className="text-center"
                    style={{position:'absolute', bottom:'65px', left:'40%'}} 
                    onMouseOver={(e)=>{
                        e.target.innerText = 'Discount 50%'
                    }}
                    onMouseOut={(e)=>{
                        e.target.innerText = book.price  + ' $'
                    }}>{book.price} $</span>
                    </Card.Text>

                    <Button
                    style={{position:'absolute', bottom:'10px', left:'35%'}}
                    variant="primary"
                    id= {book['asin']} 
                    onClick={()=>this.deleteComment(book['asin'])}/* {(e)=>{
                        this.setState({deleteId: e.target.id}, ()=>{
                            /* this.state.deleteId === book['asin'] && <DeleteComment elementId={this.*/
                    >{'Delete'}
                    </Button>

                    {/* {this.state.deleteId === book['asin'] && <DeleteComment elementId={this.state.deleteId}/>
                        } */}

                   {/*  <Button
                    style={{position:'absolute', bottom:'10px', left:'35%'}}
                    id= {book['asin']} 
                    onClick={(e)=>{
                        this.setState({selected: !this.state.selected})
                        if(!this.state.selected){
                            e.target.innerText = 'Bought'
                        }
                        else{
                            e.target.innerText = 'Buy'
                        }
                    }
                    }
                    variant="primary">{'Buy'}
                    </Button> */}

                </Card.Body>
                </Card>))
                
                }
            </Row>
            </Container>
        )
    }
 
}

        



export default SingleBook