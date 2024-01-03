import React from 'react'; 

function ReactComponent(props){
  const Tag = props.tagName;
  const { tagName, ...otherProps } = props;
  return <Tag {...otherProps} />;
}

export default ReactComponent;