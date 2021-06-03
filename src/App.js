import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Row, Col} from 'react-bootstrap'
import fantasybooks from './data/fantasy.json'
import historybooks from './data/history.json'
import horrorbooks from './data/horror.json'
import romancebooks from './data/romance.json'
import scifibooks from './data/scifi.json'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge'
import BookList from './components/BookList'
import AddComment from './components/AddComment';


function App() {
  return (
    <div>
       <Row className="justify-content-center mt-3">
                    <Col xs={12} md={6}>
                    <AddComment/>
                    </Col>
                </Row>
    
      <WarningSign title="bookstore"/>
      <MyBadge text="Badge" color="danger"/>
      <BookList fantasy={fantasybooks} history={historybooks} horror={horrorbooks} romance={romancebooks} scifi={scifibooks}/>           
    </div>
  );
}

export default App;
