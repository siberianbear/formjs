/** @jsx React.DOM */
 
var blogSection = React.createClass({displayName: 'blogSection',
  getInitialState: function(){
    return{ title: 'hi'};

  },
  handleClick: function(){
    var prompt = prompt('whos blog is this?');
    console.log(prompt);
  this.setState({title: 'you clicked!'});
  },
  render: function() {
    return(
      React.DOM.div( {className:"blogSection"}, 
            React.DOM.h3( {onClick:this.handleClick}, this.state.title)
      )
    );
  }
});

React.renderComponent(
  blogSection(null),
  document.body
  );