import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = props => {
  const {btnStyle} = styles;
  const {onPress} = props;
  return (
    <TouchableOpacity onPress={() => onPress()} style={btnStyle}>
      <Text style={styles.textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};
export {Button};

const styles = {
  btnStyle: {
    flex: 1,

    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadus: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
  },
};
