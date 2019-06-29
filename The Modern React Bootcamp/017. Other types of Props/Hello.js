class Hello extends React.Component {
  render() {
    let bangs = '!'.repeat(this.props.bangs);
    return (
      <div>
        <h1>
          Hello {this.props.to} from {this.props.from}
          {bangs}
        </h1>
        <img
          src="https://source.unsplash.com/assets/grid-erondu-1d1407af0d578ecaa04ef86a84f1906172c2140513fced96b99dfc2a169d0e89.png"
          alt=""
        />
      </div>
    );
  }
}
