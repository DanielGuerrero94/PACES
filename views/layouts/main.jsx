var React = require('react');
var HeaderLayout = require('./header');
var Head = require('./head');

class MainLayout extends React.Component {
  render() {
    return (
      <html>
        <Head>
	</Head>
        <body>
	    <HeaderLayout></HeaderLayout>
	    <div id="container">
	    {this.props.children}
	    </div>
	</body>
      </html>
    );
  }
}

module.exports = MainLayout;
