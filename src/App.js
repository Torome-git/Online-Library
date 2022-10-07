import './App.css';
import BooksContainer from './Components/books-container/BooksContainer';

function App() {
  return (
    <div>
      <div className='align-items-center'>
        <h3>
          WRITERS' HUB
          <small className="text-muted"> a community for all writers</small>
        </h3>
      </div>
      <BooksContainer />
    </div>
  );
}

export default App;
