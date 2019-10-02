var React = require('react');

  const grayStyle = {
	  backgroundColor: 'gray',
	  height: '850px',
	  borderRadius: '.8rem',
  };

  const titleStyle = {
	  paddingLeft: '50px',
	paddingTop: '20px',
	  color: 'white',
  };


class GrayContainer extends React.Component {
  render() {
    return (
      <div style={grayStyle}>
	    <h3 style={titleStyle}>{this.props.title}</h3>
	    {this.props.children}
      </div>
    );
  }
}

module.exports = GrayContainer;
