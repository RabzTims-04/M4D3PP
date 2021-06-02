
import {Container, Row, Card, Button} from 'react-bootstrap'
import {Component} from 'react'

class SingleBook extends Component{

    state = {

        selected:false
    }

    render(){
        return(
            <Container>
            <Row className="justify-content-center mt-3"> 
             
             {this.props["name"].map ((book,index) => ( 
                <Card 
                id={"book.asin"}
                className="mt-3 mx-3" 
                key={index}  
                style={{ width: '14rem'}}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    <p>{book.category}</p> 
                    <span onMouseOver={(e)=>{
                        e.target.innerText = 'Discount 50%'
                    }}
                    onMouseOut={(e)=>{
                        e.target.innerText = book.price
                    }}>{book.price}</span>
                    </Card.Text>
                    <Button onClick={(e)=>{
                    e.target.innerText = 'Bought'
                    return this.setState({selected:true}) 
             }   
               } 
               variant="primary">Buy</Button>
                </Card.Body>
                </Card>))
                }
                </Row>
                </Container>
        )
    }
 
}

        



export default SingleBook