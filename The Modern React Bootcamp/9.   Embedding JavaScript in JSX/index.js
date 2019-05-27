// A React compotent used to generate a random mood 

function myMood() {
  const moods = ['sleepy', 'happy', 'angry', 'silly', 'quiet'];
  return moods[Math.floor(Math.random() * moods.length)];
}

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>My current mood is: {myMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
