import React, {PureComponent} from 'react';

const withText = (Component) => {
  class WithText extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comment: ``,
        dignity: ``,
        limitations: ``,
      };

      this._handleCommentInput = this._handleCommentInput.bind(this);
      this._handleDignityInput = this._handleDignityInput.bind(this);
      this._handleLimitationsInput = this._handleLimitationsInput.bind(this);
    }

    _handleCommentInput(evt) {
      this.setState({
        comment: evt.target.value,
      });
    }

    _handleDignityInput(evt) {
      this.setState({
        dignity: evt.target.value,
      });
    }

    _handleLimitationsInput(evt) {
      this.setState({
        limitations: evt.target.value,
      });
    }

    render() {
      const {comment, dignity, limitations} = this.state;

      return <Component
        {...this.props}
        comment={comment}
        dignity={dignity}
        limitations={limitations}
        onCommentInput={this._handleCommentInput}
        onDignityInput={this._handleDignityInput}
        onLimitationsInput={this._handleLimitationsInput}
      />;
    }
  }

  WithText.propTypes = {};

  return WithText;
};

export default withText;
