import React from 'react';
import { connect } from 'react-redux';
import { setText } from '../redux/actions';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  changeInput = (e) => {
    this.setState((prev) => ({ ...prev, ...{ [e.target.name]: e.target.value } }));
  };

  submitButton = (e) => {
    e.preventDefault();
    if (!this.state.text) return;
    this.props.setText(this.state.text);

    this.setState({ text: '' });
  };

  render() {
    return (
      <form onSubmit={this.submitButton}>
        <label htmlFor='text' className='form-label'>
          Текст:
        </label>
        <input
          onChange={this.changeInput}
          type='text'
          id='text'
          name='text'
          className='form-control'
          value={this.state.text}
        />
        <button type='submit' className='btn btn-primary mt-3'>
          Post local
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  setText,
};

export default connect(null, mapDispatchToProps)(PostForm);
