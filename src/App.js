import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import fantasybooks from './data/fantasy.json'
import historybooks from './data/history.json'
import horrorbooks from './data/horror.json'
import romancebooks from './data/romance.json'
import scifibooks from './data/scifi.json'
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge'
import BookList from './components/BookList'

function App() {
  return (
    <div>
      <WarningSign title="bookstore"/>
      <MyBadge text="Badge" color="danger"/>
      <BookList fantasy={fantasybooks} history={historybooks} horror={horrorbooks} romance={romancebooks} scifi={scifibooks}/>           
    </div>
  );
}

export default App;
