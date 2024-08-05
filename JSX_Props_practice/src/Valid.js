import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Valid extends Component {
  render() {
    // console.log(this.props);
    const { text, valid } = this.props;
    const onClickConsole = () => {
      console.log(valid);
    };

    return (
      <>
        <h1>App 컴포넌트에서 넘겨준 {text} 입니다.</h1>
        <button onClick={onClickConsole}>콘솔 메세지</button>
      </>
    );
  }

  static defaultProps = {
    text: "이건 기본 text props",
  };

  static propTypes = {
    text: PropTypes.string,
  };
}
