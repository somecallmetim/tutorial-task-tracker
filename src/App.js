import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
    return (
        <div className='container'>
            <Header title="I'm a title!!!" />
            <Tasks />
        </div>
    );
}

export default App;
