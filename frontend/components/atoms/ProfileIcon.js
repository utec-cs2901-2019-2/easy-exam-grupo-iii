import React from "react";
import PropTypes from "prop-types";
import Icon from "./Icon.js";

const ProfileIcon = props => {
	const { color, size } = props;
	return (
		<Icon color = { color } size = { size }>
			<path d="M110.546,14.6c3.32,0,6.011-3.269,6.011-7.3S115.674,0,110.546,0s-6.011,3.269-6.011,7.3S107.226,14.6,110.546,14.6Z" transform="translate(-57.296)" fill= 
		{ color }/>
        <path d="M41.9,300.5c0-.246,0-.069,0,0Z" transform="translate(0 -274.748)" fill= { color }/>
        <path d="M308.085,301.709c0-.067,0-.467,0,0Z" fill= { color }/>
        <path d="M64.6,188.033c-.111-7.024-1.029-9.026-8.049-10.293A4.208,4.208,0,0,1,53.262,179a4.209,4.209,0,0,1-3.292-1.259c-6.944,1.253-7.917,3.225-8.045,10.065-.01.559-.015.588-.017.523,0,.121,0,.346,0,.738,0,0,1.671,3.369,11.353,3.369s11.353-3.369,11.353-3.369c0-.252,0-.427,0-.546A4.523,4.523,0,0,1,64.6,188.033Z" transform="translate(-0.012 -162.578)" fill= { color }/>
 </Icon>
	);
};

ProfileIcon.propTypes = {
	color: PropTypes.string,
	size: PropTypes.number
};

export default ProfileIcon;
