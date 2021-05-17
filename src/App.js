import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ThankYou from './components/ThankYou';
import Submit from './components/Submit';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>INTERNSHIP SIGNUP FORM</h1>
        <hr align="left"></hr>
      </header> 
      <div className = "submission">
      <Form></Form>
      </div>
    </div>
  );
}

export default App;
