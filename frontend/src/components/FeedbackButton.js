/**
 * Displays a modal when the feedback button that hovers on the left side of the screen is clicked.  Sends inputted
 * information to the API endpoint on the backend.
 */

import React from 'react';
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

class FeedbackButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      modalShown: false,
      confirmLoading: false,
      feedbackSuccess: false,
      feedbackError: false,
      email: '',
      message: '',
    };
  }

  handleClick() {
    this.setState({ modalShown: true });
  }

  hideModal() {
    this.setState({ modalShown: false });
  }

  handleSubmit = async () => {
    // TODO: Manually validate

    this.setState({
      confirmLoading: true,
      feedbackSuccess: false,
      feedbackError: false,
    });

    try {
      const resBody = await fetch('https://ameo.link/u/feedback', {
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

      if (!resBody.status === 200) {
        this.setState({
          confirmLoading: false,
          feedbackSuccess: false,
          feedbackError: true,
        });
        return;
      }

      this.setState({
        confirmLoading: false,
        feedbackSuccess: true,
        feedbackError: false,
      });

      setTimeout(() => {
        // hide the feedback modal after showing the user that their feedback was successfully sent
        this.setState({
          modalShown: false,
          feedbackSuccess: false,
          feedbackError: false,
        });
      }, 1293);
    } catch (err) {
      console.error(err);
      this.setState({
        feedbackSuccess: false,
        feedbackError: true,
        confirmLoading: false,
      });
    }
  };

  render() {
    const success = this.state.feedbackSuccess && (
      <Callout intent={Intent.SUCCESS}>Feedback successfully received!</Callout>
    );
    const error = this.state.feedbackError && (
      <Callout intent={Intent.DANGER}>
        There was an error submitting your feedback! Maybe try again later :/
      </Callout>
    );

    return (
      <div>
        <div className="feedbackButton" onClick={this.handleClick}>
          Issues + Feedback
        </div>

        <Dialog
          icon="mailbox"
          confirmLoading={this.state.confirmLoading}
          onCancel={this.hideModal}
          isOpen={this.state.modalShown}
          className="pt-dark"
          style={{ padding: 15 }}
        >
          <h1>Send Issues or Feedback</h1>
          <p>
            {`If you've found a problem with the site, have an idea for a new
            feature, or have any other feedback you'd like to send in, feel free
            to use the form below to send it to me directly.`}
          </p>
          <br />

          {success}
          {error}

          <FormGroup>
            <InputGroup
              leftIcon="mail"
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
      </div>
    );
  }
}

FeedbackButton.propTypes = {};

export default FeedbackButton;
