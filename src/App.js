import logo from './logo.svg';
import './App.css';

// import FormikContainer from './components/formik/FormikContainer';
// import LoginForm from './components/scenarios/LoginForm';
// import RegistrationForm from './components/scenarios/RegistrationForm';
import EnrollmentForm from './components/scenarios/EnrollmentForm';

function App() {
  return (
    <div className="App">
			{/* <FormikContainer />
			<LoginForm />
			<RegistrationForm /> */}
			<EnrollmentForm />
    </div>
  );
}

export default App;
