import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? '#DADADE' : '#f3f2f7')};

  padding: 0px 10px;
  display: flex;
  vertical-align: middle;
  align-content: center;
  align-items: center;
  transition: 0.3s;
  ${(props) => {
    const colorA = props.hasError
      ? 'rgba(236, 85, 148, 1)'
      : 'rgba(107, 99, 255, 1)';
    const colorB = props.hasError
      ? 'rgba(236, 85, 148, 0.35)'
      : 'rgba(107, 99, 255, 0.35)';
    }
  }};

  ${(props) => {
    const colorA = props.hasError
      ? 'rgba(236, 85, 148, 1)'
      : 'rgba(107, 99, 255, 1)';
    const colorB = props.hasError
      ? 'rgba(236, 85, 148, 0.35)'
      : 'rgba(107, 99, 255, 0.35)';
  }};
`;
const IDInput = styled.input`
  background-color: ${props => (props.disabled ? '#DADADE' : '#f3f2f7')};
  border: none;
  padding: 8px;
  font-size: 1.5em;
	font-weight: bold;
	border-bottom-color: #67707D;
	border-bottom: solid;
	width: 100%;
	color: #67707D;
  :active {
		outline: none;
		border-bottom-color: #FD7576;
  }
	:focus {
		outline: none;
		border-bottom-color: #FD7576;

  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+  */
    opacity: 1; /* Firefox */
  }
`;
const ErrorMessage = styled.div`
  color: #ec5594;
  font-family: "SFProDisplay", sans-serif;
  font-size: 0.75em;
  font-weight: 300;
  margin: 2px 4px;
  width: 100%;
  text-align: left;
`;
const Label = styled.div`
  color: rgb(42, 40, 60);
  font-size: 0.75em;
  font-weight: 400;
  margin: 2px 4px;
  text-align: left;
`;

class Input extends React.Component {
	constructor(props) {
		super(props);

		const { defaultValue, withError } = this.props;

		this.state = {
			text: defaultValue,
			active: this.props.active,
			hover: false,
			hasError: withError,
			errorMessage: '',
		};
	}

  componentDidMount() {
		const { text } = this.state;

		if (text) {
      this.validate();
    }
  }

	onChange = async e => {
		const { value } = e.target;
		const { formatter, withError, validator } = this.props;
		const { text } = this.state;

    let value_ = value;

    if (value && value_ === value) {
      value_ = value;
    }

    if (formatter) {
      value_ = formatter(value_, text);
    }

    await this.setState({ text: value_ });

    if (!withError) {
      if (validator === undefined) {
        await this.setState(s => {
          return {
            ...s,
            hasError: false,
            errorMessage: this.props.errorMessage
          };
        });
      } else {
        this.validate();
      }
    } else {
      await this.setState(s => {
        return {
          ...s,
          hasError: true,
          errorMessage: this.props.errorMessage
        };
      });
    }
    let returnedValue = text;
    if (this.props.parser) {
      returnedValue = this.props.parser(returnedValue);
    }
    this.props.onChange(returnedValue);
  };

  onKeyPress = e => {
    if (e.key === "Enter") {
      this.props.onEnterPressed(this.state.text);
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errorMessage !== prevState.errorMessage) {
      return {
        errorMessage: nextProps.errorMessage,
        hasError: true,
      };
		}

		return null;
	}

	validate = () => {
    if (typeof this.props.validator === 'function') {
      const result = this.props.validator(this.state.text);
      if (typeof result === 'boolean') {
        this.setState(s => {
          return {
            ...s,
            hasError: result,
            errorMessage: this.props.errorMessage
          };
        });
      } else if (typeof result === 'object') {
        this.setState(s => {
          return {
            ...s,
            hasError: result.hasError,
            errorMessage: result.message || this.props.errorMessage
          };
        });
      }
    } else if (this.props.validator instanceof RegExp) {
      const result = this.props.validator.test(this.state.text);
      this.setState(s => {
        return {
          ...s,
          hasError: result,
          errorMessage: this.props.errorMessage
        };
      });
    }
  };


	render() {
		const {
			size,
			name,
			text,
			label,
			style,
			type,
			disabled,
			prefix,
			placeholder,
		} = this.props;
		const { active, hasError } = this.state;

    // TODO: Write below options
    if (size === 'default') {
    } else if (size === 'small') {
    } else if (size === 'large') {
    }

    return (
      <div css={css`width: 100%`}>
        {label ? <Label>{label}</Label> : null}
        <Wrapper
          active={active}
          style={style}
          disabled={disabled}
          hasError={hasError}
        >
          {prefix}
          <IDInput
            name={name}
            hasError={hasError}
            style={style}
            onChange={this.onChange}
            value={text || ''}
            type={type}
            placeholder={placeholder}
            ref={this.props.ref}
            disabled={disabled}
            // autoComplete={"off"}
            onFocus={() =>
              this.setState(s => {
                return { ...s, active: true };
              })
            }
            onBlur={() =>
              this.setState(
                s => {
                  return { ...s, active: false };
                },
                () => {
                  if (this.props.onBlur) {
                    this.props.onBlur();
                  }
                }
              )
            }
            onKeyPress={this.onKeyPress}
          />
          {this.props.suffix}
        </Wrapper>
        {this.state.hasError && (
          <ErrorMessage>{this.state.errorMessage}</ErrorMessage>
        )}
      </div>
    );
  }
}

Input.defaultProps = {
	onChange: () => {},
	onEnterPressed: () => {},
	size: 'default',
	type: 'text',
	text: '',
};


Input.propTypes = {
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  prefix: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  suffix: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  ref: PropTypes.any,
  active: PropTypes.bool,
  style: PropTypes.object,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  onEnterPressed: PropTypes.func,
  validator: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  errorMessage: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
  ]),
  withError: PropTypes.bool,
	text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  formatter: PropTypes.func,
  parser: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
