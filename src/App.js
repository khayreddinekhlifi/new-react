import "./App.css";

function App() {
  return (
    <header className="App-header">
      <h1>welcome in my word</h1>
      <form>
        <label htmlFor="name">your first Name</label>
        <input type="text" id="name" placeholder="first name" />
        <label htmlFor=" seconde name">your seconde Name</label>
        <input type="text" id="seconde name" placeholder="seconde name" />

        <label htmlFor="email">your Email</label>
        <input type="text" id="email" placeholder="your email" />
      </form>
      <button>submit</button>
    </header>
  );
}

export default App;
