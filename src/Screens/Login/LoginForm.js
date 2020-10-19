import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Button, Input, Spinner} from './common/index';
import * as Actions from '../action/index';
class LoginForm extends Component {
  state = {text: '', password: '', error: '', loading: false};
  onButtonPress = () => {
    const {email, password, onUserLogin} = this.props;
    onUserLogin({email, password});
  };
  onLoginFail = () => {
    const {error} = this.props;
    if (error) {
      return (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{background: 'white'}}>
          <Text style={style.error}>{error}</Text>
        </View>
      );
    }
  };
  onLoginSuccess = () => {
    this.setState({text: '', password: '', error: '', loading: false});
  };
  renderButton = () => {
    const {loading} = this.props;
    if (loading) {
      return <Spinner size="small" />;
    } else {
      return <Button onPress={() => this.onButtonPress()}>Log in</Button>;
    }
  };
  onEmailChange = text => {
    const {emailChanged} = this.props;
    emailChanged(text);
  };
  onPasswordChanged = text => {
    const {passwordChanged} = this.props;
    passwordChanged(text);
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmal.com"
            label="Email"
            onChangeText={text => this.onEmailChange(text)}
            text={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="Password"
            label="Passowrd"
            secure
            onChangeText={text => this.onPasswordChanged(text)}
            text={this.props.password}
          />
        </CardSection>
        {this.onLoginFail()}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}
const style = {
  error: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center',
  },
};
const mapStateToProps = state => {
  return {
    email: state.GlobalReducer.email,
    password: state.GlobalReducer.password,
    error: state.GlobalReducer.error,
    loading: state.GlobalReducer.loading,
  };
};

const mapDispatchToProps = dispatchEvent => ({
  emailChanged: data => dispatchEvent(Actions.emailChanged(data)),
  passwordChanged: data => dispatchEvent(Actions.passwordChanged(data)),
  onUserLogin: data => dispatchEvent(Actions.authenticateUser(data)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);
