import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon.js";

const HomeIcon = props => {
	const { color, size } = props;
	return (
		<Icon color = { color } size = { size }>
			<path d = "M82.578,128.007a1.153,1.153,0,0,0-1.456,0L68.929,138.472a.828.828,0,0,0-.3.626v7.633a3.541,3.541,0,0,0,3.778,3.243h6.037v-8.026h6.815v8.026h6.037a3.541,3.541,0,0,0,3.778-3.243V139.1a.824.824,0,0,0-.3-.626Z" />
		</Icon>
	);
};

HomeIcon.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number
};

export default HomeIcon;
