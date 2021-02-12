import React from 'react';
import styles from './App.module.css';
import cs from 'classnames';
import { StyledItem, StyledColumn, StyledButtonSmall } from './styles';
import { ReactComponent as Check } from './check.svg';

const Item = ({ item, onRemoveItem }) => {
  const handleRemoveItem = () => {
    onRemoveItem(item);
  };

  return (
    <StyledItem>
      <StyledColumn width="40%">
        <a href={item.url}>{item.title}</a>
      </StyledColumn>
      <StyledColumn width="30%"> {item.author}</StyledColumn>
      <StyledColumn width="10%"> {item.num_comments}</StyledColumn>
      <StyledColumn width="10%"> {item.points}</StyledColumn>
      <StyledColumn width="10%">
        <StyledButtonSmall
          type="button"
          onClick={handleRemoveItem}
          className={cs(styles.button, styles.buttonSmall)}
        >
          Dismiss
          <Check height="18px" width="18px" />
        </StyledButtonSmall>
      </StyledColumn>
    </StyledItem>
  );
};

export default Item;
