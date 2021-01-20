import React from 'react';
import { PeopleImg } from './style';

const People = (props: any) => {
	const { peopleUrl, style } = props;
	return <PeopleImg src={peopleUrl} style={style} />;
};

export default People;
