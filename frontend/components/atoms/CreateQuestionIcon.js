import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon.js";

const CreateQuestionIcon = props => {
	const { color, size } = props;
	return (
		<Icon color = { color } size = { size }>
			<path d = "/M15.255,0c5.424,0,10.764,2.498,10.764,8.473c0,5.51-6.314,7.629-7.67,9.62c-1.018,1.481-0.678,3.562-3.475,3.562 c-1.822,0-2.712-1.482-2.712-2.838c0-5.046,7.414-6.188,7.414-10.343c0-2.287-1.522-3.643-4.066-3.643 c-5.424,0-3.306,5.592-7.414,5.592c-1.483,0-2.756-0.89-2.756-2.584C5.339,3.683,10.084,0,15.255,0z M15.044,24.406 c1.904,0,3.475,1.566,3.475,3.476c0,1.91-1.568,3.476-3.475,3.476c-1.907,0-3.476-1.564-3.476-3.476 C11.568,25.973,13.137,24.406,15.044,24.406z"/>
		</Icon>
	);
};

CreateQuestionIcon.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number
};

export default CreateQuestionIcon;
