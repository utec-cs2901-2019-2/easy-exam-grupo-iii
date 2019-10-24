import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
	background: transparent;
	font-family: 'Helvetica Neue', sans-serif;
}
*, *:before, *:after{
    -ms-box-sizing:border-box;
    -moz-box-sizing:border-box;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
}

b {
	font-weight: 500;
}

html {
	background-color: #F3F3F6;
}

body, html{
    width: 100%;
    height: auto;
    font-size: 16px;
}

body{
  overflow-x: hidden;
	font-family: 'SFProDisplay', sans-serif;
	color: #4a4a4a;
  font-weight:normal;
	font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a{
  text-decoration: none;
}
figure{
  margin:0px;
}
input[type="text"], input[type="number"], input {
  outline: none;
  font-size: 16px;
}

input, textarea, select, button {
  font-weight: 400;
  font-size: 16px;
  font-family: 'Helvetica Nue', sans-serif;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-Ultralight.otf') format('opentype');
	font-weight: 100;
	font-style: normal;
}

/* raleway-100 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 100;
  src: url('/static/fonts/raleway-v14-latin-100.eot'); /* IE9 Compat Modes */
  src: local('Raleway Thin'), local('Raleway-Thin'),
       url('/static/fonts/raleway-v14-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-100.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-100.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-100italic - latin */
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 100;
  src: url('/static/fonts/raleway-v14-latin-100italic.eot'); /* IE9 Compat Modes */
  src: local('Raleway Thin Italic'), local('Raleway-ThinItalic'),
       url('/static/fonts/raleway-v14-latin-100italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-100italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-100italic.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-100italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-100italic.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-200 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 200;
  src: url('/static/fonts/raleway-v14-latin-200.eot'); /* IE9 Compat Modes */
  src: local('Raleway ExtraLight'), local('Raleway-ExtraLight'),
       url('/static/fonts/raleway-v14-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-200.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-200.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-200italic - latin */
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 200;
  src: url('/static/fonts/raleway-v14-latin-200italic.eot'); /* IE9 Compat Modes */
  src: local('Raleway ExtraLight Italic'), local('Raleway-ExtraLightItalic'),
       url('/static/fonts/raleway-v14-latin-200italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-200italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-200italic.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-200italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-200italic.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-300 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 300;
  src: url('/static/fonts/raleway-v14-latin-300.eot'); /* IE9 Compat Modes */
  src: local('Raleway Light'), local('Raleway-Light'),
       url('/static/fonts/raleway-v14-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-300.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-300.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-300italic - latin */
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 300;
  src: url('/static/fonts/raleway-v14-latin-300italic.eot'); /* IE9 Compat Modes */
  src: local('Raleway Light Italic'), local('Raleway-LightItalic'),
       url('/static/fonts/raleway-v14-latin-300italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-300italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-300italic.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-300italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-300italic.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-regular - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: url('/static/fonts/raleway-v14-latin-regular.eot'); /* IE9 Compat Modes */
  src: local('Raleway'), local('Raleway-Regular'),
       url('/static/fonts/raleway-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-regular.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-500 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: url('/static/fonts/raleway-v14-latin-500.eot'); /* IE9 Compat Modes */
  src: local('Raleway Medium'), local('Raleway-Medium'),
       url('/static/fonts/raleway-v14-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-500.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-500.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-italic - latin */
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 400;
  src: url('/static/fonts/raleway-v14-latin-italic.eot'); /* IE9 Compat Modes */
  src: local('Raleway Italic'), local('Raleway-Italic'),
       url('/static/fonts/raleway-v14-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-italic.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-italic.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-500italic - latin */
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 500;
  src: url('/static/fonts/raleway-v14-latin-500italic.eot'); /* IE9 Compat Modes */
  src: local('Raleway Medium Italic'), local('Raleway-MediumItalic'),
       url('/static/fonts/raleway-v14-latin-500italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-500italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-500italic.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-500italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-500italic.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-600 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 600;
  src: url('/static/fonts/raleway-v14-latin-600.eot'); /* IE9 Compat Modes */
  src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
       url('/static/fonts/raleway-v14-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-600.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-600.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-600italic - latin */
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 600;
  src: url('/static/fonts/raleway-v14-latin-600italic.eot'); /* IE9 Compat Modes */
  src: local('Raleway SemiBold Italic'), local('Raleway-SemiBoldItalic'),
       url('/static/fonts/raleway-v14-latin-600italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-600italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-600italic.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-600italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-600italic.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-700 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: url('/static/fonts/raleway-v14-latin-700.eot'); /* IE9 Compat Modes */
  src: local('Raleway Bold'), local('Raleway-Bold'),
       url('/static/fonts/raleway-v14-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-700.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-700italic - latin */
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 700;
  src: url('/static/fonts/raleway-v14-latin-700italic.eot'); /* IE9 Compat Modes */
  src: local('Raleway Bold Italic'), local('Raleway-BoldItalic'),
       url('/static/fonts/raleway-v14-latin-700italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-700italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-700italic.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-700italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-700italic.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-800 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 800;
  src: url('/static/fonts/raleway-v14-latin-800.eot'); /* IE9 Compat Modes */
  src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'),
       url('/static/fonts/raleway-v14-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-800.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-800.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-800italic - latin */
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 800;
  src: url('/static/fonts/raleway-v14-latin-800italic.eot'); /* IE9 Compat Modes */
  src: local('Raleway ExtraBold Italic'), local('Raleway-ExtraBoldItalic'),
       url('/static/fonts/raleway-v14-latin-800italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-800italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-800italic.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-800italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-800italic.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-900 - latin */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 900;
  src: url('/static/fonts/raleway-v14-latin-900.eot'); /* IE9 Compat Modes */
  src: local('Raleway Black'), local('Raleway-Black'),
       url('/static/fonts/raleway-v14-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-900.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-900.svg#Raleway') format('svg'); /* Legacy iOS */
}
/* raleway-900italic - latin */
@font-face {
  font-family: 'Raleway';
  font-style: italic;
  font-weight: 900;
  src: url('/static/fonts/raleway-v14-latin-900italic.eot'); /* IE9 Compat Modes */
  src: local('Raleway Black Italic'), local('Raleway-BlackItalic'),
       url('/static/fonts/raleway-v14-latin-900italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/static/fonts/raleway-v14-latin-900italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/static/fonts/raleway-v14-latin-900italic.woff') format('woff'), /* Modern Browsers */
       url('/static/fonts/raleway-v14-latin-900italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/static/fonts/raleway-v14-latin-900italic.svg#Raleway') format('svg'); /* Legacy iOS */
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-UltralightItalic.otf') format('opentype');
	font-weight: 100;
	font-style: italic;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-Thin.otf') format('opentype');
	font-weight: 200;
	font-style: normal;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-ThinItalic.otf') format('opentype');
	font-weight: 200;
	font-style: italic;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-Light.otf') format('opentype');
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-LightItalic.otf') format('opentype');
	font-weight: 300;
	font-style: italic;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-Regular.otf') format('opentype');
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-RegularItalic.otf') format('opentype');
	font-weight: 400;
	font-style: italic;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-Medium.otf') format('opentype');
	font-weight: 500;
	font-style: normal;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-MediumItalic.otf') format('opentype');
	font-weight: 500;
	font-style: italic;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-Semibold.otf') format('opentype');
	font-weight: 600;
	font-style: normal;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-SemiboldItalic.otf') format('opentype');
	font-weight: 600;
	font-style: italic;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-Bold.otf') format('opentype');
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-BoldItalic.otf') format('opentype');
	font-weight: 700;
	font-style: italic;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-Heavy.otf') format('opentype');
	font-weight: 800;
	font-style: normal;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-HeavyItalic.otf') format('opentype');
	font-weight: 800;
	font-style: italic;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-Black.otf') format('opentype');
	font-weight: 900;
	font-style: normal;
}

@font-face {
	font-family: 'SFProDisplay';
  font-display: swap;
	src: local('SFProDisplay'), url('/static/fonts/SF-Pro-Display/SF-Pro-Display-BlackItalic.otf') format('opentype');
	font-weight: 900;
	font-style: italic;
}

.Toastify__toast-container {
  z-index: 9999;
  position: fixed;
  padding: 4px;
  width: 320px;
  box-sizing: border-box;
  color: #fff; }
  .Toastify__toast-container--top-left {
    top: 1em;
    left: 1em; }
  .Toastify__toast-container--top-center {
    top: 1em;
    left: 50%;
    margin-left: -160px; }
  .Toastify__toast-container--top-right {
    top: 1em;
    right: 1em; }
  .Toastify__toast-container--bottom-left {
    bottom: 1em;
    left: 1em; }
  .Toastify__toast-container--bottom-center {
    bottom: 1em;
    left: 50%;
    margin-left: -160px; }
  .Toastify__toast-container--bottom-right {
    bottom: 1em;
    right: 1em; }

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    padding: 0;
    left: 0;
    margin: 0; }
    .Toastify__toast-container--top-left, .Toastify__toast-container--top-center, .Toastify__toast-container--top-right {
      top: 0; }
    .Toastify__toast-container--bottom-left, .Toastify__toast-container--bottom-center, .Toastify__toast-container--bottom-right {
      bottom: 0; }
    .Toastify__toast-container--rtl {
      right: 0;
      left: initial; } }

.Toastify__toast {
  position: relative;
  min-height: 64px;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 8px;
  border-radius: 1px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
      justify-content: space-between;
  max-height: 800px;
  overflow: hidden;
  font-family: sans-serif;
  cursor: pointer;
  direction: ltr; }
  .Toastify__toast--rtl {
    direction: rtl; }
  .Toastify__toast--default {
    background: #fff;
    color: #aaa; }
  .Toastify__toast--info {
    background: #5498F9; }
  .Toastify__toast--success {
    background: #07bc0c; }
  .Toastify__toast--warning {
    background: #f1c40f; }
  .Toastify__toast--error {
    background: #e74c3c; }
  .Toastify__toast-body {
    margin: auto 0;
    -ms-flex: 1;
        flex: 1; }

@media only screen and (max-width: 480px) {
  .Toastify__toast {
    margin-bottom: 0; } }

.Toastify__close-button {
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  -ms-flex-item-align: start;
      align-self: flex-start; }
  .Toastify__close-button--default {
    color: #000;
    opacity: 0.3; }
  .Toastify__close-button:hover, .Toastify__close-button:focus {
    opacity: 1; }

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1); }
  100% {
    transform: scaleX(0); } }

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  z-index: 9999;
  opacity: 0.7;
  background-color: rgba(255, 255, 255, 0.7);
  transform-origin: left; }
  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards; }
  .Toastify__progress-bar--controlled {
    transition: transform .2s; }
  .Toastify__progress-bar--rtl {
    right: 0;
    left: initial;
    transform-origin: right; }
  .Toastify__progress-bar--default {
    background: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55); }

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0); }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0); }
  75% {
    transform: translate3d(10px, 0, 0); }
  90% {
    transform: translate3d(-5px, 0, 0); }
  to {
    transform: none; } }

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0); }
  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0); } }

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0); }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0); }
  75% {
    transform: translate3d(-10px, 0, 0); }
  90% {
    transform: translate3d(5px, 0, 0); }
  to {
    transform: none; } }

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0); }
  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0); } }

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0); }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0); }
  75% {
    transform: translate3d(0, 10px, 0); }
  90% {
    transform: translate3d(0, -5px, 0); }
  to {
    transform: translate3d(0, 0, 0); } }

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, -10px, 0); }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0); }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0); } }

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0); }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0); }
  75% {
    transform: translate3d(0, -10px, 0); }
  90% {
    transform: translate3d(0, 5px, 0); }
  to {
    transform: none; } }

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, 10px, 0); }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0); }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0); } }

.Toastify__bounce-enter--top-left, .Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft; }

.Toastify__bounce-enter--top-right, .Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight; }

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown; }

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp; }

.Toastify__bounce-exit--top-left, .Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft; }

.Toastify__bounce-exit--top-right, .Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight; }

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp; }

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown; }

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3); }
  50% {
    opacity: 1; } }

@keyframes Toastify__zoomOut {
  from {
    opacity: 1; }
  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3); }
  to {
    opacity: 0; } }

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn; }

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut; }

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0; }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in; }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1; }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg); }
  to {
    transform: perspective(400px); } }

@keyframes Toastify__flipOut {
  from {
    transform: perspective(400px); }
  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1; }
  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0; } }

.Toastify__flip-enter {
  animation-name: Toastify__flipIn; }

.Toastify__flip-exit {
  animation-name: Toastify__flipOut; }

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible; }
  to {
    transform: translate3d(0, 0, 0); } }

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible; }
  to {
    transform: translate3d(0, 0, 0); } }

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible; }
  to {
    transform: translate3d(0, 0, 0); } }

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible; }
  to {
    transform: translate3d(0, 0, 0); } }

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, 0, 0); }
  to {
    visibility: hidden;
    transform: translate3d(110%, 0, 0); } }

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, 0, 0); }
  to {
    visibility: hidden;
    transform: translate3d(-110%, 0, 0); } }

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, 0, 0); }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0); } }

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, 0, 0); }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0); } }

.Toastify__slide-enter--top-left, .Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft; }

.Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight; }

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown; }

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp; }

.Toastify__slide-exit--top-left, .Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft; }

.Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight; }

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp; }

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown; }


.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow {
  margin-left: -8px;
  position: absolute;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  box-sizing: content-box;
  position: absolute;
  border: 8px solid transparent;
  height: 0;
  width: 1px;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  content: "";
  z-index: -1;
  border-width: 8px;
  left: -8px;
  border-bottom-color: #aeaeae;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle {
  top: 0;
  margin-top: -8px;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle, .react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
  border-top: none;
  border-bottom-color: #f0f0f0;
}

.react-datepicker-popper[data-placement^="bottom"] .react-datepicker__triangle::before {
  top: -1px;
  border-bottom-color: #aeaeae;
}

.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow {
  bottom: 0;
  margin-bottom: -8px;
}

.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle, .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  border-bottom: none;
  border-top-color: #fff;
}

.react-datepicker-popper[data-placement^="top"] .react-datepicker__triangle::before, .react-datepicker__year-read-view--down-arrow::before,
.react-datepicker__month-read-view--down-arrow::before,
.react-datepicker__month-year-read-view--down-arrow::before {
  bottom: -1px;
  border-top-color: #aeaeae;
}

.react-datepicker-wrapper {
  display: inline-block;
  width: 100%;
}

.react-datepicker {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 0.8rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  display: inline-block;
  position: relative;
}

.react-datepicker--time-only .react-datepicker__triangle {
  left: 35px;
}

.react-datepicker--time-only .react-datepicker__time-container {
  border-left: 0;
}

.react-datepicker--time-only .react-datepicker__time {
  border-radius: 0.3rem;
}

.react-datepicker--time-only .react-datepicker__time-box {
  border-radius: 0.3rem;
}

.react-datepicker__triangle {
  position: absolute;
  left: 50px;
}

.react-datepicker-popper {
  z-index: 121;
}

.react-datepicker-popper[data-placement^="bottom"] {
  margin-top: 10px;
}

.react-datepicker-popper[data-placement^="top"] {
  margin-bottom: 10px;
}

.react-datepicker-popper[data-placement^="right"] {
  margin-left: 8px;
}

.react-datepicker-popper[data-placement^="right"] .react-datepicker__triangle {
  left: auto;
  right: 42px;
}

.react-datepicker-popper[data-placement^="left"] {
  margin-right: 8px;
}

.react-datepicker-popper[data-placement^="left"] .react-datepicker__triangle {
  left: 42px;
  right: auto;
}

.react-datepicker__header {
  text-align: center;
  background-color: #f0f0f0;
  border-bottom: 1px solid #aeaeae;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  padding-top: 8px;
  position: relative;
}

.react-datepicker__header--time {
  padding-bottom: 8px;
  padding-left: 5px;
  padding-right: 5px;
}

.react-datepicker__year-dropdown-container--select,
.react-datepicker__month-dropdown-container--select,
.react-datepicker__month-year-dropdown-container--select,
.react-datepicker__year-dropdown-container--scroll,
.react-datepicker__month-dropdown-container--scroll,
.react-datepicker__month-year-dropdown-container--scroll {
  display: inline-block;
  margin: 0 2px;
}

.react-datepicker__current-month,
.react-datepicker-time__header {
  margin-top: 0;
  color: #000;
  font-weight: bold;
  font-size: 0.944rem;
}

.react-datepicker-time__header {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.react-datepicker__navigation {
  background: none;
  line-height: 1.7rem;
  text-align: center;
  cursor: pointer;
  position: absolute;
  top: 10px;
  width: 0;
  padding: 0;
  border: 0.45rem solid transparent;
  z-index: 1;
  height: 10px;
  width: 10px;
  text-indent: -999em;
  overflow: hidden;
}

.react-datepicker__navigation--previous {
  left: 10px;
  border-right-color: #ccc;
}

.react-datepicker__navigation--previous:hover {
  border-right-color: #b3b3b3;
}

.react-datepicker__navigation--previous--disabled, .react-datepicker__navigation--previous--disabled:hover {
  border-right-color: #e6e6e6;
  cursor: default;
}

.react-datepicker__navigation--next {
  right: 10px;
  border-left-color: #ccc;
}

.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button) {
  right: 80px;
}

.react-datepicker__navigation--next:hover {
  border-left-color: #b3b3b3;
}

.react-datepicker__navigation--next--disabled, .react-datepicker__navigation--next--disabled:hover {
  border-left-color: #e6e6e6;
  cursor: default;
}

.react-datepicker__navigation--years {
  position: relative;
  top: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.react-datepicker__navigation--years-previous {
  top: 4px;
  border-top-color: #ccc;
}

.react-datepicker__navigation--years-previous:hover {
  border-top-color: #b3b3b3;
}

.react-datepicker__navigation--years-upcoming {
  top: -4px;
  border-bottom-color: #ccc;
}

.react-datepicker__navigation--years-upcoming:hover {
  border-bottom-color: #b3b3b3;
}

.react-datepicker__month-container {
  float: left;
}

.react-datepicker__month {
  margin: 0.4rem;
  text-align: center;
}

.react-datepicker__time-container {
  float: right;
  border-left: 1px solid #aeaeae;
  width: 70px;
}

.react-datepicker__time-container--with-today-button {
  display: inline;
  border: 1px solid #aeaeae;
  border-radius: 0.3rem;
  position: absolute;
  right: -72px;
  top: 0;
}

.react-datepicker__time-container .react-datepicker__time {
  position: relative;
  background: white;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
  width: 70px;
  overflow-x: hidden;
  margin: 0 auto;
  text-align: center;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list {
  list-style: none;
  margin: 0;
  height: calc(195px + (1.7rem / 2));
  overflow-y: scroll;
  padding-right: 0px;
  padding-left: 0px;
  width: 100%;
  box-sizing: content-box;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item {
  height: 30px;
  padding: 5px 10px;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item:hover {
  cursor: pointer;
  background-color: #f0f0f0;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected {
  background-color: #216ba5;
  color: white;
  font-weight: bold;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover {
  background-color: #216ba5;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled {
  color: #ccc;
}

.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--disabled:hover {
  cursor: default;
  background-color: transparent;
}

.react-datepicker__week-number {
  color: #ccc;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}

.react-datepicker__week-number.react-datepicker__week-number--clickable {
  cursor: pointer;
}

.react-datepicker__week-number.react-datepicker__week-number--clickable:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}

.react-datepicker__day-names,
.react-datepicker__week {
  white-space: nowrap;
}

.react-datepicker__day-name,
.react-datepicker__day,
.react-datepicker__time-name {
  color: #000;
  display: inline-block;
  width: 1.7rem;
  line-height: 1.7rem;
  text-align: center;
  margin: 0.166rem;
}

.react-datepicker__day {
  cursor: pointer;
}

.react-datepicker__day:hover {
  border-radius: 0.3rem;
  background-color: #f0f0f0;
}

.react-datepicker__day--today {
  font-weight: bold;
}

.react-datepicker__day--highlighted {
  border-radius: 0.3rem;
  background-color: #3dcc4a;
  color: #fff;
}

.react-datepicker__day--highlighted:hover {
  background-color: #32be3f;
}

.react-datepicker__day--highlighted-custom-1 {
  color: magenta;
}

.react-datepicker__day--highlighted-custom-2 {
  color: green;
}

.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range {
  border-radius: 0.3rem;
  background-color: #216ba5;
  color: #fff;
}

.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover {
  background-color: #1d5d90;
}

.react-datepicker__day--keyboard-selected {
  border-radius: 0.3rem;
  background-color: #2a87d0;
  color: #fff;
}

.react-datepicker__day--keyboard-selected:hover {
  background-color: #1d5d90;
}

.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range) {
  background-color: rgba(33, 107, 165, 0.5);
}

.react-datepicker__month--selecting-range .react-datepicker__day--in-range:not(.react-datepicker__day--in-selecting-range) {
  background-color: #f0f0f0;
  color: #000;
}

.react-datepicker__day--disabled {
  cursor: default;
  color: #ccc;
}

.react-datepicker__day--disabled:hover {
  background-color: transparent;
}

.react-datepicker__input-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.react-datepicker__year-read-view,
.react-datepicker__month-read-view,
.react-datepicker__month-year-read-view {
  border: 1px solid transparent;
  border-radius: 0.3rem;
}

.react-datepicker__year-read-view:hover,
.react-datepicker__month-read-view:hover,
.react-datepicker__month-year-read-view:hover {
  cursor: pointer;
}

.react-datepicker__year-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__year-read-view:hover .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view:hover .react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover .react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-year-read-view:hover .react-datepicker__month-read-view--down-arrow {
  border-top-color: #b3b3b3;
}

.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow {
  border-top-color: #ccc;
  float: right;
  margin-left: 20px;
  top: 8px;
  position: relative;
  border-width: 0.45rem;
}

.react-datepicker__year-dropdown,
.react-datepicker__month-dropdown,
.react-datepicker__month-year-dropdown {
  background-color: #f0f0f0;
  position: absolute;
  width: 50%;
  left: 25%;
  top: 30px;
  z-index: 1;
  text-align: center;
  border-radius: 0.3rem;
  border: 1px solid #aeaeae;
}

.react-datepicker__year-dropdown:hover,
.react-datepicker__month-dropdown:hover,
.react-datepicker__month-year-dropdown:hover {
  cursor: pointer;
}

.react-datepicker__year-dropdown--scrollable,
.react-datepicker__month-dropdown--scrollable,
.react-datepicker__month-year-dropdown--scrollable {
  height: 150px;
  overflow-y: scroll;
}

.react-datepicker__year-option,
.react-datepicker__month-option,
.react-datepicker__month-year-option {
  line-height: 20px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.react-datepicker__year-option:first-of-type,
.react-datepicker__month-option:first-of-type,
.react-datepicker__month-year-option:first-of-type {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.react-datepicker__year-option:last-of-type,
.react-datepicker__month-option:last-of-type,
.react-datepicker__month-year-option:last-of-type {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.react-datepicker__year-option:hover,
.react-datepicker__month-option:hover,
.react-datepicker__month-year-option:hover {
  background-color: #ccc;
}

.react-datepicker__year-option:hover .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-option:hover .react-datepicker__navigation--years-upcoming,
.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-upcoming {
  border-bottom-color: #b3b3b3;
}

.react-datepicker__year-option:hover .react-datepicker__navigation--years-previous,
.react-datepicker__month-option:hover .react-datepicker__navigation--years-previous,
.react-datepicker__month-year-option:hover .react-datepicker__navigation--years-previous {
  border-top-color: #b3b3b3;
}

.react-datepicker__year-option--selected,
.react-datepicker__month-option--selected,
.react-datepicker__month-year-option--selected {
  position: absolute;
  left: 15px;
}

.react-datepicker__close-icon {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: 0;
  padding: 0;
  vertical-align: middle;
  position: absolute;
  height: 16px;
  width: 16px;
  top: 25%;
  right: 7px;
}

.react-datepicker__close-icon::after {
  background-color: #216ba5;
  border-radius: 50%;
  bottom: 0;
  box-sizing: border-box;
  color: #fff;
  content: "\00d7";
  cursor: pointer;
  font-size: 12px;
  height: 16px;
  width: 16px;
  line-height: 1;
  margin: -8px auto 0;
  padding: 2px;
  position: absolute;
  right: 0px;
  text-align: center;
}

.react-datepicker__today-button {
  background: #f0f0f0;
  border-top: 1px solid #aeaeae;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  padding: 5px 0;
  clear: left;
}

.react-datepicker__portal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 2147483647;
}

.react-datepicker__portal .react-datepicker__day-name,
.react-datepicker__portal .react-datepicker__day,
.react-datepicker__portal .react-datepicker__time-name {
  width: 3rem;
  line-height: 3rem;
}

@media (max-width: 400px), (max-height: 550px) {
  .react-datepicker__portal .react-datepicker__day-name,
  .react-datepicker__portal .react-datepicker__day,
  .react-datepicker__portal .react-datepicker__time-name {
    width: 2rem;
    line-height: 2rem;
  }
}

.react-datepicker__portal .react-datepicker__current-month,
.react-datepicker__portal .react-datepicker-time__header {
  font-size: 1.44rem;
}

.react-datepicker__portal .react-datepicker__navigation {
  border: 0.81rem solid transparent;
}

.react-datepicker__portal .react-datepicker__navigation--previous {
  border-right-color: #ccc;
}

.react-datepicker__portal .react-datepicker__navigation--previous:hover {
  border-right-color: #b3b3b3;
}

.react-datepicker__portal .react-datepicker__navigation--previous--disabled, .react-datepicker__portal .react-datepicker__navigation--previous--disabled:hover {
  border-right-color: #e6e6e6;
  cursor: default;
}

.react-datepicker__portal .react-datepicker__navigation--next {
  border-left-color: #ccc;
}

.react-datepicker__portal .react-datepicker__navigation--next:hover {
  border-left-color: #b3b3b3;
}

.react-datepicker__portal .react-datepicker__navigation--next--disabled, .react-datepicker__portal .react-datepicker__navigation--next--disabled:hover {
  border-left-color: #e6e6e6;
  cursor: default;
}
`;

export default GlobalStyle;

