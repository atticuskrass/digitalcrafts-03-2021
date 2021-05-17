import "./App.css";
import Nav from "./components/Nav";
import AboutContainer from "./components/AboutContainer";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="App">
			<Nav />
			<AboutContainer />
			<Sidebar />
		</div>
	);
}
export default App;
