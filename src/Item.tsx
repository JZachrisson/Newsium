import React from 'react';
import styles from './App.module.css';
import cs from 'classnames';
import moment from 'moment';
import { StyledItem, StyledButtonSmall } from './styles';
import { ReactComponent as Check } from './check.svg';

type ItemProps = {
  item: Story;
  onRemoveItem: (item: Story) => void;
};

const Item = ({ item, onRemoveItem }: ItemProps) => {
  const handleRemoveItem = () => {
    onRemoveItem(item);
  };

  return (
    <StyledItem>
      <span style={{ width: '40%' }}>
        <a href={item.url}>{item.title}</a>
      </span>

      <span style={{ width: '20%' }}>
        {' '}
        {moment.unix(item.created_at_i).format('DD-MM-YYYY')}
      </span>
      <span style={{ width: '10%' }}> {item.author}</span>
      <span style={{ width: '10%' }}> {item.num_comments}</span>
      <span style={{ width: '10%' }}> {item.points}</span>
      <span style={{ width: '10%' }}>
        <StyledButtonSmall
          type="button"
          onClick={handleRemoveItem}
          className={cs(styles.button, styles.buttonSmall)}
        >
          Dismiss
          <Check height="18px" width="18px" />
        </StyledButtonSmall>
      </span>
    </StyledItem>
  );
};

export default Item;
