import './App.css';
import BooksContainer from './Components/books-container/BooksContainer';

function App() {
  return (
    <div>
      <div className="App">
        <h2 className="App-header">
          WRITERS' HUB
          <small className="text-muted"> a community for all writers</small>
        </h2>
      </div>
      <BooksContainer />
    </div>
  );
}

export default App;
