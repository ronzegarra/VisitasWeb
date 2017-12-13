import React, {Component} from 'react';
//import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const placeholder = this.props.attributes.placeholder;
    delete this.props.attributes.placeholder;
    const isRequired = this.props.attributes.isRequired;
    delete this.props.attributes.isRequired;
    let textPlaceHolder;
    if(placeholder !== undefined && placeholder !== ""){
      //textPlaceHolder=this.props.intl.formatMessage({id:placeholder});
    } else {
      textPlaceHolder="";
    }
    if (isRequired){
      return (
        <input
          /*{...this.props.attributes}
          {...this.props.events}*/
          placeholder={textPlaceHolder}
          required
        />
      );
    } else{
      return (
        <input
          /*{...this.props.attributes}
          {...this.props.events}*/
          placeholder={textPlaceHolder}
        />
      );
    }
  }
}

Input.PropTypes ={
  attributes : PropTypes.object.isRequired,
  events : PropTypes.object.isRequired,
};

export default Input;
