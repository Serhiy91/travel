import React, { PropTypes } from 'react';
import { Entity } from 'draft-js';

const Link = (props) => {
  const { url } = Entity.get(props.entityKey).getData();
  return <a href={url}>{props.children}</a>;
};

Link.propTypes = {
  entityKey: PropTypes.string,
  children: PropTypes.array,
};

export default Link;
