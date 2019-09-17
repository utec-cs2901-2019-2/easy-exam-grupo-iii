import React from "react";
import MediaQuery from "react-responsive";
import NotFound404 from "../components/molecules/NotFound404";

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  getErrorView = (statusCode, isMobile) => {
    switch (statusCode) {
      case 404:
        return <NotFound404 isMobile={isMobile}>404</NotFound404>;
    }
  };

  render() {
    return (
      <MediaQuery maxWidth={720}>
        {isMobile => {
          return (
            <div>{this.getErrorView(this.props.statusCode, isMobile)}</div>
          );
        }}
      </MediaQuery>
    );
  }
}
