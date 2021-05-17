import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Submit from './components/Submit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Internship Signup Form</h1>
        <hr></hr>
        <p>Prepare for your career with a Project Management, Web-Development, Graphic Design, or Digital Marketing Internship at Northern.</p>
      </header>
      <div class = "submission">
      <Form inputType="Your Email Address"></Form>
      </div>
    </div>
  );
}

export default App;
