import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 18px 40%;

  ${props => {
    if (!props.disabled) {
      if (props.color) {
        return css`
          background-color: ${props.color};
				`;
			}

      return css`
        background: transparent
          radial-gradient(
            circle at calc(var(--mouse-x, 0) * 100%) 50%,
            // #60cff9dd 30%,
            #5498f9ee 30%,
            #5565fb 100%
          )
          no-repeat 0 0;
      `;
    }
    return css`
      background-color: #bbb;
    `;
  }};

  border-radius: 11px;
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  transition: 0.3s;
  ${props => {
    if (!props.expanded) {
      return css`
        width: fit-content;
      `;
    }
  }}

  ${props => {
    if (!props.disabled) {
      if (props.color) {
				return css`
          :hover {
            cursor: pointer;
            transform: translateY(-1px);
          }
        `;
      }
      return css`
        :hover {
          cursor: pointer;
          transform: translateY(-1px);
        }
      `;
    }
  }};
`;

const InnerContent = styled.div`
	display: flex;
	font-weight: bold;
	font-size: 1.5em;
	letter-spacing: 0.6px;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
	user-select: none; /* Standard */
	${props => {
			if (props.fontColor) {
				return css`
					color: ${props.fontColor};
				`;
			}
		return css`
		color: #FFFFFF;
		`;
	}};
`;

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lastPosMouseX: 0,
			lastPosMouseY: 0,
		};
	}

	onMouseMove = (e) => {
		const { clientWidth, clientHeight } = this.iam;

    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    // console.log(x, y);
    x /= clientWidth;
    y /= clientHeight;

    if (this.iam) {
      this.iam.style.setProperty('--mouse-x', x);
			this.iam.style.setProperty('--mouse-y', y);
    }
  };

	render() {
		const {
			style, expanded, color, fontColor,
			disabled, children, onClick,
		} = this.props;
		const { lastPosMouseX, lastPosMouseY } = this.state;

    return (
      <Wrapper
        style={style}
        expanded={expanded}
        onMouseMove={color ? null : this.onMouseMove}
        posX={lastPosMouseX}
        posY={lastPosMouseY}
        ref={r => (this.iam = r)}
        onClick={disabled ? null : onClick}
        disabled={disabled}
				color={color}
				fontColor={fontColor}
      >
        <InnerContent>{children}</InnerContent>
      </Wrapper>
    );
  }
}

Button.defaultProps = {
	children: 'Button',
	expanded: false,
	disabled: false,
};

Button.propTypes = {
  children: PropTypes.any,
  expanded: PropTypes.bool,
  disabled: PropTypes.bool,
	color: PropTypes.string,
	fontColor: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Button;
