import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import Global from "../utils/global_style";
import React from "react";


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          sheet.collectStyles(
            <React.Fragment>
              <App {...props} /> <Global />
            </React.Fragment>
          )
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()]
    };
  }
}

