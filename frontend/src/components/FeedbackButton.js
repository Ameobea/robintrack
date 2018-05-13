/**
 * Displays a modal when the feedback button that hovers on the left side of the screen is clicked.  Sends inputted
 * information to the API endpoint on the backend.
 */

import React, { Component, Fragment } from 'react';
import {
  Button,
  Callout,
  Dialog,
  FormGroup,
  InputGroup,
  Intent,
  TextArea,
} from '@blueprintjs/core';

const buttonStyle = {
  display: 'flex',
  flex: 1,
  marginLeft: 5,
  marginRight: 5,
};

const DEFAULT_ERR_MSG =
  'There was an error submitting your feedback! Maybe try again later :/';

class FeedbackButton extends Component {
  state = {
    modalShown: false,
    confirmLoading: false,
    feedbackSuccess: false,
    feedbackError: false,
    email: '',
    message: '',
    emailIntent: Intent.NONE,
  };

  handleClick = () => this.setState({ modalShown: true });

  hideModal = () => this.setState({ modalShown: false });

  setFeedbackError = (errorMessage = DEFAULT_ERR_MSG) =>
    this.setState({
      feedbackSuccess: false,
      feedbackError: true,
      confirmLoading: false,
      errorMessage,
    });

  clearFeedbackError = () => this.setState({ feedbackError: false });

  setLoading = () =>
    this.setState({
      confirmLoading: true,
      feedbackSuccess: false,
      feedbackError: false,
    });

  setLoaded = () =>
    this.setState({
      confirmLoading: false,
      feedbackSuccess: true,
      feedbackError: false,
    });

  hide = () =>
    this.setState({
      modalShown: false,
      feedbackSuccess: false,
      feedbackError: false,
    });

  sendFeedback = () =>
    fetch('https://ameo.link/u/feedback', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email || 'Not Supplied',
        message: this.state.message,
        password: '1ML2NbebobgqcPUcW6Cl', // ayy lmao
        appName: 'RobinTrack',
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

  /**
   * Returns `true` if the input is valid and `false` if not.  Also sets the styles of
   * UI elements to indicate their validity status.
   */
  validateInput = () => {
    if (!this.state.message) {
      this.setState({ emailIntent: Intent.DANGER });
      this.setFeedbackError('You must supply a message to send!');
      return false;
    } else {
      this.setState({ emailIntent: Intent.NONE });
      this.clearFeedbackError();
      return true;
    }
  };

  handleSubmit = async () => {
    if (!this.validateInput()) {
      return;
    }

    this.setLoading();

    try {
      const resBody = await this.sendFeedback();

      if (!resBody.status === 200) {
        this.setFeedbackError();
        return;
      }

      this.setLoaded();

      // Hide the feedback modal after showing the user that their feedback was successfully sent
      setTimeout(this.hide, 1293);
    } catch (err) {
      console.error(err);
      this.setFeedbackError();
    }
  };

  renderModal = () => {
    const success = this.state.feedbackSuccess && (
      <Callout intent={Intent.SUCCESS}>Feedback successfully received!</Callout>
    );
    const error = this.state.feedbackError && (
      <Callout intent={Intent.DANGER}>{this.state.errorMessage}</Callout>
    );

    return (
      <Dialog
        confirmLoading={this.state.confirmLoading}
        onCancel={this.hideModal}
        isOpen={this.state.modalShown}
        className="pt-dark"
        style={{ padding: 15 }}
      >
        <h1>Send Issues or Feedback</h1>
        <span style={{ paddingBottom: 15 }}>
          {`If you've found a problem with the site, have an idea for a new
             feature, or have any other feedback you'd like to send in, feel free
             to use the form below to send it to me directly.`}
        </span>

        {success}
        {error}

        <FormGroup>
          <InputGroup
            leftIcon="envelope"
            placeholder="Your Email Address (optional)"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <TextArea
            onChange={e => this.setState({ message: e.target.value })}
            value={this.state.message}
            style={{ width: '100%' }}
            placeholder="Feedback, questions, issues, hate mail, etc."
            intent={this.state.emailIntent}
          />
        </FormGroup>

        <div style={{ display: 'flex' }}>
          <Button
            fill={false}
            text="Cancel"
            onClick={this.hideModal}
            style={buttonStyle}
            intent={Intent.NONE}
          />
          <Button
            fill={false}
            text="Submit"
            onClick={this.handleSubmit}
            style={buttonStyle}
            intent={Intent.PRIMARY}
          />
        </div>
      </Dialog>
    );
  };

  render = () => (
    <Fragment>
      <div className="feedbackButton" onClick={this.handleClick}>
        Issues + Feedback
      </div>

      {this.renderModal()}
    </Fragment>
  );
}

FeedbackButton.propTypes = {};

export default FeedbackButton;
