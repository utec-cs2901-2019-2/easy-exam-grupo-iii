import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Router from 'next/router';

import LogIn from './LogIn';

class Index extends Component {
	render () {
		return (
			<div>
				<LogIn />
			</div>
		)
	}
}

export default Index;
