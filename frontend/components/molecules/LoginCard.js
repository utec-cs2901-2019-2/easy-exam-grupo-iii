import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Wrapper = styled.div`
	position: absolute;
	right: 15%;
	top: 29%;

	@media (max-width: 1200px) {
		left: 33%;
		right: auto;
		color: white;
  }
`;

const InputWrapper = styled.div`
	 padding: 0 0 45px 0;
	 font-weight: bold;
`;

const ButtonWrapper = styled.div`
	padding: 10px 0 0 0;
`;

const Title = styled.div`
	font-size: 45px;
	font-weight: bold;
	padding: 0 0 50px 0;

	@media (max-width: 1200px) {
		font-size: 25px;
	}
`;

const ForgotPassword = styled.div`
	color: #969696;
	text-align: right;
	padding: 7px 11px 0 0;

	@media (max-width: 1200px) {
			color: white;
		}
`;

const SignUp = styled.div`
	color: #969696;
	text-align: left;
	padding: 11px 0 0 5px;
	font-weight: bold;
	font-size: 14px;
	
	@media (max-width: 1200px) {
			color: white;
		}
`;

class LoginCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	render() {
		const {
			isMobile, onChangeFields, onLogIn,
			onForgotPassword, onSignUp,
		} = this.props;
		const { email, password } = this.state;

		return (
			<Wrapper isMobile={isMobile}>
				<Title>Welcome back</Title>
				<InputWrapper>
					<Input
						name="email"
						type="email"
						value={email}
						placeholder="email"
						onChange={async v => {
										await this.setState(s => {
											return { ...s, email: v };
										});
										onChangeFields({
											email: { email },
											password: { password },
										});
						}}
					/>
				</InputWrapper>
				<InputWrapper>
					<Input
						name="pasword"
						type="password"
						value={password}
						placeholder="password"
						onChange={async v => {
										await this.setState(s => {
											return { ...s, password: v };
										});
										onChangeFields({
											email: { email },
											password: { password },
										});
						}}
					/>
					<ForgotPassword onClick={onForgotPassword}>
							Forgot your password?
					</ForgotPassword>
				</InputWrapper>
				<ButtonWrapper>
					<Button
						onClick={onLogIn}
						color="#FD7576"
						fontColor="#FFFFFF"
					>
						LOGIN
					</Button>
					<SignUp onClick={onSignUp}>
							Don’t have an account?
						<span css={css`color: #FD7576`}> Sign Up </span>
					</SignUp>
				</ButtonWrapper>
			</Wrapper>
		);
	}
}

LoginCard.defaultProps = {
	onChangeFields: () => {},
	isMobile: false,
};

LoginCard.propTypes = {
	isMobile: PropTypes.bool,
	onChangeFields: PropTypes.func,
	onForgotPassword: PropTypes.func,
	onLogIn: PropTypes.func,
	onSignUp: PropTypes.func,
};

export default LoginCard;
