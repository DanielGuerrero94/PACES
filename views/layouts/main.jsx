var React = require('react');
var HeaderLayout = require('./header');
var Head = require('./head');
const background = {
  backgroundImage: "url('/public/images/trama.jpg')"
};


class MainLayout extends React.Component {
  render() {
    return (
      <html>
        <Head>
        </Head>
        <body style={background}>
          <HeaderLayout></HeaderLayout>
          <div id="container">
            {this.props.children}
          </div>
        </body>
        <script src="/public/javascripts/croppie.min.js"></script>
        <script src="/public/javascripts/utils.js"></script>

      </html>

    );
  }
}

module.exports = MainLayout;
