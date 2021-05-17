import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import ThankYou from './components/ThankYou';
import Submit from './components/Submit';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Internship Signup Form</h1>
        <hr></hr>
      </header> 
      <div className = "submission">
      <Form></Form>
      </div>
      {/* <ThankYou></ThankYou> */}
    </div>
  );
}

export default App;
