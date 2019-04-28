// A basic class component that shows a picture
//
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Scooter Picture</h1>
        <img
          src="https://images.unsplash.com/45/aXpQLs4AQ5e1EtmeYkz3_20140524_124026.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Building with scooter"
        />
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
