import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon.js";

const AddIcon = props => {
	const { color, size } = props;
	return (
		<Icon color = { color } size = { size }>
			<path d = "M39.248,17.856h-15.6V2.253A2.8,2.8,0,0,0,20.75,0a2.8,2.8,0,0,0-2.9,2.252v15.6H2.252A2.8,2.8,0,0,0,0,20.751a2.8,2.8,0,0,0,2.252,2.9h15.6v15.6a2.8,2.8,0,0,0,2.9,2.252,2.8,2.8,0,0,0,2.9-2.252v-15.6h15.6a2.8,2.8,0,0,0,2.252-2.9A2.8,2.8,0,0,0,39.248,17.856Z" />
		</Icon>
	);
};

AddIcon.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number
};

export default AddIcon;
