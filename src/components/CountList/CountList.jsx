import React from 'react';
import PropTypes from 'prop-types';
import {
  CountListBox,
  CountListItem,
  CountListItemText,
} from './CountList.styled';

const CountList = () => {
  return (
    <CountListBox>
      <CountListItem>
        <CountListItemText>Good:</CountListItemText>
      </CountListItem>
      <CountListItem>
        <CountListItemText>Neutral:</CountListItemText>
      </CountListItem>
      <CountListItem>
        <CountListItemText>Bad:</CountListItemText>
      </CountListItem>
    </CountListBox>
  );
};

export default CountList;
