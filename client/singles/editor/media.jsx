import React from 'react';
import { Entity } from 'draft-js';

const Media = (props) => {
  const entity = Entity.get(props.block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();
  let media;

  if (type === 'image') {
    media = <img src={src} alt="" />;
  } else if (type === 'video') {
    media = <video controls src={src} />;
  } else if (type === 'audio') {
    media = <audio controls src={src} />;
  }

  return media;
};

export default Media;
