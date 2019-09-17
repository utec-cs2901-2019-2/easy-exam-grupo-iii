import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  border-radius: 4px;
  background-color: ${props => (props.disabled ? "#DADADE" : "#f3f2f7")};

  padding: 0px 10px;
  display: flex;
  vertical-align: middle;
  align-content: center;
  align-items: center;
  transition: 0.3s;
  ${props => {
    const colorA = props.hasError
      ? "rgba(236, 85, 148, 1)"
      : "rgba(107, 99, 255, 1)";
    const colorB = props.hasError
      ? "rgba(236, 85, 148, 0.35)"
      : "rgba(107, 99, 255, 0.35)";
    if (props.active) {
      return css`
        /* border: solid red 5px; */
        -webkit-box-shadow: 0px 0px 0px 1.5px ${colorA},
          0px 0px 0px 3px ${colorB};
        -moz-box-shadow: 0px 0px 0px 1.5px ${colorA}, 0px 0px 0px 3px ${colorB};
        box-shadow: 0px 0px 0px 1.5px ${colorA}, 0px 0px 0px 3px ${colorB};
      `;
    }
  }};

  ${props => {
    const colorA = props.hasError
      ? "rgba(236, 85, 148, 1)"
      : "rgba(107, 99, 255, 1)";
    const colorB = props.hasError
      ? "rgba(236, 85, 148, 0.35)"
      : "rgba(107, 99, 255, 0.35)";

    if (!props.disabled) {
      return css`
        :hover {
          -webkit-box-shadow: 0px 0px 0px 1.5px ${colorA};
          -moz-box-shadow: 0px 0px 0px 1.5px ${colorA};
          box-shadow: 0px 0px 0px 1.5px ${colorA};
          ${props => {
            if (props.active) {
              return css`
                /* border: solid red 5px; */
                -webkit-box-shadow: 0px 0px 0px 1.5px ${colorA},
                  0px 0px 0px 3px ${colorB};
                -moz-box-shadow: 0px 0px 0px 1.5px ${colorA},
                  0px 0px 0px 3px ${colorB};
                box-shadow: 0px 0px 0px 1.5px ${colorA},
                  0px 0px 0px 3px ${colorB};
              `;
            }
          }};
        }
      `;
    }
  }};
`;
const IDInput = styled.input`
  background-color: ${props => (props.disabled ? "#DADADE" : "#f3f2f7")};
  border: none;
  padding: 8px;
  font-family: "SFProDisplay", sans-serif;
  font-size: 0.96em;
  font-weight: 400;
  border-radius: 4px;
  color: #48444e;
  width: 100%;
  :active {
    outline: none;
  }
  :focus {
    outline: none;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+  */
    color: #aaa;
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
  /* animation: ${InAnimation} ease-in 0.6s; */
`;
const Label = styled.div`
  color: rgb(42, 40, 60);
  font-family: "SFProDisplay", sans-serif;
  font-size: 0.75em;
  font-weight: 400;
  margin: 2px 4px;
  text-align: left;
`;

class Input extends React.Component {
  state = {
    text: this.props.defaultValue,
    active: this.props.active,
    hover: false,
    hasError: this.props.withError,
    errorMessage: ""
  };

  static defaultProps = {
    onChange: () => {},
    onEnterPressed: () => {},
    size: "default",
    type: "text",
    required: false,
    text: ""
  };

  componentDidMount() {
    if (this.state.text) {
      this.validate();
    }
  }

  onChange = async e => {
    let value = e.target.value;

    if (this.props.value && value === this.props.value) {
      value = this.props.value;
    }

    if (this.props.formatter) {
      value = this.props.formatter(value, this.state.text);
    }

    await this.setState({ text: value });

    if (!this.props.withError) {
      if (this.props.validator === undefined) {
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
    let returnedValue = this.state.text;
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

  validate = () => {
    if (typeof this.props.validator === "function") {
      const result = this.props.validator(this.state.text);
      if (typeof result === "boolean") {
        this.setState(s => {
          return {
            ...s,
            hasError: result,
            errorMessage: this.props.errorMessage
          };
        });
      } else if (typeof result === "object") {
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errorMessage !== prevState.errorMessage) {
      return {
        errorMessage: nextProps.errorMessage,
        hasError: true
      };
    } else return null;
  }

  render() {
    // TODO: Write below options
    if (this.props.size === "default") {
    } else if (this.props.size === "small") {
    } else if (this.props.size === "large") {
    }

    return (
      <div style={{ width: "100%" }}>
        {this.props.label ? <Label>{this.props.label}</Label> : null}
        <Wrapper
          active={this.state.active}
          style={this.props.style}
          disabled={this.props.disabled}
          hasError={this.state.hasError}
        >
          {this.props.prefix}
          <IDInput
            name={this.props.name}
            hasError={this.state.hasError}
            style={this.props.style}
            onChange={this.onChange}
            value={this.state.text || ""}
            type={this.props.type}
            placeholder={this.props.placeholder}
            ref={this.props.ref}
            disabled={this.props.disabled}
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
    PropTypes.func
  ]),
  withError: PropTypes.bool,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  formatter: PropTypes.func,
  parser: PropTypes.func,
  onBlur: PropTypes.func
};

export default Input;

