
import {Container, Row, Card, Button} from 'react-bootstrap'
import {Component} from 'react'

class SingleBook extends Component{

    state = {
        
        selectId: '',
        selected:false,
        buttonselect:false
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
                onClick={(e)=> {
                    this.setState({ selectId: e.target.id}) 
                    console.log(e.target.id)
                }}
                style={{
                    height: (this.state.selectId === book['asin'])? '19rem':'20rem'
                }}
                variant="top" 
                src={book.img} 
                />
                <Card.Body style={{position: 'relative'}}>
                    <Card.Title
                    style={{fontSize:'15px'}}                    
                    >{book.title}</Card.Title>
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
                    variant="primary">{'Buy'}</Button>
                </Card.Body>
                </Card>))
                }
            </Row>
            </Container>
        )
    }
 
}

        



export default SingleBook