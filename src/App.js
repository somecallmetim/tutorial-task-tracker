function App() {
  const name = 'Brad'
  const bool = false
  return (
    <div className="container">
      <h1>Random and quirky String</h1>
      <h2>Hello {name}</h2>
      <h2>I am { bool ? 'Yes' : 'No' }</h2>
    </div>
  );
}

export default App;
