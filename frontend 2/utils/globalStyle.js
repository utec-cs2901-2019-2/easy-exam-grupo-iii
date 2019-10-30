import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyle = props => (
	<Global
		{...props}
		styles={css`
			html, body {
				margin: 0;
				padding 0;
				border: 0;
				outline: 0;
				vertical-align: baseline;
				font-family: 'Helvetica', sans-serif;
				font-size: 12px;
				color: #67707D;
			}

			html {
				background-color: #F3F3F6;
			}
		`}
	/>
);

export default GlobalStyle;
