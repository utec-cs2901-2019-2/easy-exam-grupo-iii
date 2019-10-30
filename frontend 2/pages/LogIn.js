import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import styled from '@emotion/styled';

import WaveOne from '../components/atoms/WaveOne';
import LoginCard from '../components/molecules/LoginCard';

const Wrapper = styled.div`
	@media (max-width: 1200px) {
			color: white;
		}
`;

class LogIn extends Component {
	render() {
		return (
			<Wrapper>
				<WaveOne />
				<LoginCard />
			</Wrapper>
		);
	}
}

export default LogIn;
