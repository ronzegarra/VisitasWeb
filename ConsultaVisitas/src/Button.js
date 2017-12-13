import React from 'react';
//import { FormattedMessage } from 'react-intl';

class Button extends React.Component {
  render() {
    const text = this.props.attributes.text || "LOADING";
    delete this.props.attributes.text;
    if (this.props.attributes.iconClass){
      const iconClass = this.props.attributes.iconClass;
      delete this.props.attributes.iconClass;
      return (
        <button {...this.props.attributes} {...this.props.events}>
          {/*<FormattedMessage
            id={text}
          />*/}
          {text}
          <i className={`fa ${iconClass}`}></i>
        </button>
      );
    } else{
      return (
        <button {...this.props.attributes} {...this.props.events}>
          {/*<FormattedMessage
            id={text}
          />*/}
          {text}
        </button>
      );
    }
  }
}

export default Button;
