import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import styled from '@emotion/styled';

import WaveOne from '../components/atoms/WaveOne';
import LoginCard from '../components/molecules/LoginCard';

class LogIn extends Component {
	render() {
		return (
			<div>
				<WaveOne />
				<LoginCard />
			</div>
		);
	}
}

export default LogIn;
