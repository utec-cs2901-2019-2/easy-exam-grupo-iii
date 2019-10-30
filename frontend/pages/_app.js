import React from 'react';
import App from 'next/app';
import { Provider, Subscribe } from 'unstated';
import MediaQuery from 'react-responsive';
import Head from 'next/head';
import GlobalStyle from '../utils/globalStyle';
import AuthContainer from '../containers/authContainer';

const PUBLIC_ROUTES = [
	'/',
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
				<Provider>
					<Subscribe to={[AuthContainer]}>
						{authState => {
							return (
								<div>
								{authState.isLoggedIn() || PUBLIC_ROUTES.includes(this.props.router.pathname) ? (
                    <div>
                      {authState.isLoggedIn() ? (
                        <MediaQuery maxWidth={720}>
                          {isMobile => {
                            return (
                             <div>
															hola
                             </div>
                            );
                          }}
                        </MediaQuery>
                      ) : null}
                      <Component {...pageProps} />
                      {console.log(authState.state.userData)}
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              );
            }}
					</Subscribe>
				</Provider>
			</html>
		);
	}
}

export default MyApp;
