import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../utils/globalStyle';

const PUBLIC_ROUTES = [
	'/test',
];

class MyApp extends App {
	state = {
		start: false,
		done: false,
		error: null,
	};

	render() {
		const { Component, pageProps } = this.props;
		return (
			<html>
				<GlobalStyle />
				<Head>
					<title>EasyExam</title>
				</Head>
				<body>
					<Component {...pageProps} />
				</body>
			</html>
		);
	}
}

export default MyApp;
