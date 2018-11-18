import React from 'react';
//import volume from './volume-muted.svg';
import Icon from './icon';

const VolumeMute = (props) => (
  	<Icon {...props}>
	  <path d="M29.61,19.55v2.82H26.79l-3.55-3.56-3.55,3.56H16.88V19.55L20.43,16l-3.55-3.55V9.64h2.81l3.55,3.55,3.55-3.55h2.82v2.81L26.06,16Z" transform="translate(0 4)"/>
	  <path d="M13,30a1,1,0,0,1-.71-.29L4.59,22H1a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H4.59l7.7-7.71a1,1,0,0,1,1.09-.21A1,1,0,0,1,14,3V29a1,1,0,0,1-.62.92A.84.84,0,0,1,13,30Z" transform="translate(0 4)"/>
	</Icon>
)

export default VolumeMute;