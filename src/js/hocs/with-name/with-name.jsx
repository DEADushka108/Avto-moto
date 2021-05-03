import React, {PureComponent} from 'react';

const withName = (Component) => {
  class WithName extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        author: ``,
      };

      this._handleNameInput = this._handleNameInput.bind(this);
    }

    _handleNameInput(evt) {
      this.setState({
        author: evt.target.value,
      });
    }

    render() {
      const {author} = this.state;

      return <Component
        {...this.props}
        author={author}
        onNameInput={this._handleNameInput}
      />;
    }
  }

  WithName.propTypes = {};

  return WithName;
};

export default withName;
