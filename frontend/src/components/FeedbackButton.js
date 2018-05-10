/**
 * Displays a modal when the feedback button that hovers on the left side of the screen is clicked.  Sends inputted
 * information to the API endpoint on the backend.
 */

import React from 'react';
import { Alert, Modal, Form, Icon, Input } from 'antd';
const FormItem = Form.Item;

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
    };
  }

  handleClick() {
    this.setState({ modalShown: true });
  }

  hideModal() {
    this.setState({ modalShown: false });
  }

  handleSubmit = () => {
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        return;
      }

      this.setState({
        confirmLoading: true,
        feedbackSuccess: false,
        feedbackError: false,
      });

      try {
        const resBody = await fetch('https://ameo.link/u/feedback', {
          method: 'POST',
          body: JSON.stringify({
            email: values.email || 'Not Supplied',
            message: values.message,
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }).then(res => res.json());

        if (!resBody.success) {
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
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const success = this.state.feedbackSuccess ? (
      <Alert message="Feedback successfully received!" type="success" />
    ) : (
      <div />
    );
    const error = this.state.feedbackError ? (
      <Alert
        message="There was an error submitting your feedback!  Maybe try again later :/"
        type="error"
      />
    ) : (
      <span />
    );

    return (
      <div>
        <div className="feedbackButton" onClick={this.handleClick}>
          Issues + Feedback
        </div>
        <Modal
          confirmLoading={this.state.confirmLoading}
          onCancel={this.hideModal}
          onOk={this.handleSubmit}
          visible={this.state.modalShown}
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

          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: false }],
              })(
                <Input
                  prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
                  placeholder="Your Email (optional)"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('message', {
                rules: [
                  {
                    required: true,
                    message: 'You have to supply a message to send in!',
                  },
                ],
              })(
                <Input
                  placeholder="Feedback"
                  prefix={<Icon type="message" style={{ fontSize: 13 }} />}
                  type="textarea"
                />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

FeedbackButton.propTypes = {};

export default Form.create()(FeedbackButton);
