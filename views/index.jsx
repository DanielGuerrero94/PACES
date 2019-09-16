var React = require('react');
var MainLayout = require('./layouts/main');

class HelloMessage extends React.Component {
  render() {
    return (
	   <MainLayout>
	    <div>Hello {this.props.title}</div>
	    </MainLayout>
    );
  }
}

module.exports = HelloMessage;
