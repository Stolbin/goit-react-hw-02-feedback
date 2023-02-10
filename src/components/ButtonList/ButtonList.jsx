import React from 'react';
import PropTypes from 'prop-types';
import { Section, ListItem, Button } from './ButtonList.styled';

const ButtonList = ({ elemets }) => {
  return (
    <Section>
      {elemets.map(element => (
        <ListItem key={element.id}>
          <Button
            onClick={() => {
              console.log('Clik');
            }}
          >
            {element.name}
          </Button>
        </ListItem>
      ))}
    </Section>
  );
};

export default ButtonList;
