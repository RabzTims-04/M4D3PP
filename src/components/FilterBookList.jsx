import {Form, FormControl, Button, Container} from 'react-bootstrap'
import {Component} from 'react'
import SingleBook from './SingleBook'

class FilterBooklist extends Component {

    state = {
        search: "",
        books: [],
    }

    inputChange = (e) => {

        this.setState({

                search: e.target.value.toLowerCase()

        })
    }

    searchBooks =(e)=>{
        e.preventDefault()
        console.log(this.props['book'].filter(book => book["title"].toLowerCase().includes(this.state.search)).map(filterBook => (<SingleBook name={filterBook}/> )))
        console.log(this.state.search.length);        
        let filterBooks = this.props['book'].filter(book => book["title"].toLowerCase().includes(this.state.search))
        console.log(filterBooks)
        if(this.state.search.length>2){
            this.setState({
                books:filterBooks
            })
        }else{
            this.setState({
                books:[]
            })
        }
        
    }

    render() {
      return (<>  <Form inline onSubmit={(e) => this.searchBooks(e)}>
                    <FormControl id="search" 
                        type="text" 
                        value={this.state.search} 
                        placeholder="Search" 
                        className="mr-sm-2 my-3 ml-5"  
                        onChange={e => this.inputChange(e)}/>
                    <Button variant="outline-success" type="submit">Search</Button>
                  </Form>
                  <Container fluid className="search-books">
                        {this.state.books && <SingleBook name ={this.state.books}/>}
                  </Container>
           
            </>)
    }
}

export default FilterBooklist