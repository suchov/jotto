import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  rener() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter guessed"
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps)(Input);
