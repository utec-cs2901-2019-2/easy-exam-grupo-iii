import React from "react";
import { Provider, Subscribe } from "unstated";
import App, { Container } from "next/app";

import Head from "next/head";
import Router from "next/router";
import withGA from "next-ga";

import dynamic from "next/dynamic";
import MediaQuery from "react-responsive";

const PUBLIC_ROUTES = [
  "/",
	"/auth"
];

class MyApp extends App {
  state = {
    start: false,
    done: false,
    error: null
  };

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Easy Exam</title>
        </Head>
				
				<Provider>
					<Subscribe to={[AuthContainer]}>
            {authState => {
              // TODO: I think
              if (process.browser) {
                if (
                  !authState.isLoggedIn() &&
                  !PUBLIC_ROUTES.includes(this.props.router.pathname)
                ) {
                  saveLastLocation(this.props.router.pathname);
                  Router.push("/auth");
                }
              }

              return (
                <div>
                  {authState.isLoggedIn() ||
                  PUBLIC_ROUTES.includes(this.props.router.pathname) ? (
                    <div>
                      {/* {console.log(
                        "reload app",
                        authState.state.reloadMissingFields
                      )}
                      {authState.state.reloadMissingFields && (
                        <MissingFieldsOfPersonCard
                          userData={authState.state.userData}
                          token={authState.state.token}
                          isComplete={authState.state.userData.is_complete}
                          missingFields={
                            authState.state.userData.missing_fields
                          }
                          isMobile={isMobile}
                        />
                      )} */}
                      {authState.isLoggedIn() ? (
                        <MediaQuery maxWidth={720}>
                          {isMobile => {
                            return (
                              <div>
                                <MissingFieldsOfPersonCard
                                  userData={authState.state.userData}
                                  token={authState.state.token}
                                  isComplete={
                                    authState.state.userData.is_complete
                                  }
                                  missingFields={
                                    authState.state.userData.missing_fields
                                  }
                                  isMobile={isMobile}
                                />
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
      </Container>
    )
  }
}
