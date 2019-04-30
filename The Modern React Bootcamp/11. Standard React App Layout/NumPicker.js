// A React component that generates a random number from 1 to 10.
// If the number is 7, then the component displays "Congrats!'.
// If the number is not a 7, then the component displays "unlucky".

function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1>Your Number is: {num}</h1>
        <h2>
          <p>{num === 7 ? 'Congrats!' : 'Unlucky'}</p>
        </h2>
        {num === 7 && (
          <img
            src="https://media3.giphy.com/media/7kn27lnYSAE9O/200.webp?cid=790b76115cc344136b73767463edc80e&rid=200.webp"
            alt="Show picture"
          />
        )}
      </div>
    );
  }
}
