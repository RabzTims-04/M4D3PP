
import {Container, Row, Card} from 'react-bootstrap'
import {Component} from 'react'
import CommentArea from './CommentArea'
import ModalTemplate from './ModalTemplate'


class SingleBook extends Component{

    state = {
        
        selectId: '',
        selected:false,
        buttonselect:false,
        elementId:''
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

                </Card.Body>
                <div id={book['asin']} /* onClick={(e)=>{const bookId = e.target.id }} */>
                < ModalTemplate bookId={book['asin']}/>
                </div>
                
                </Card>))
                
                }
            </Row>
            </Container>
        )
    }
 
}

        



export default SingleBook