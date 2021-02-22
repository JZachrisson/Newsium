import React from 'react';
import styles from './App.module.css';
import cs from 'classnames';
import moment from 'moment';
import { StyledItem, StyledButtonSmall, StyledColumn } from './styles';
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
      <StyledColumn className="show" width="40%">
        <a href={item.url}>{item.title}</a>
      </StyledColumn>

      <StyledColumn width="20%">
        {' '}
        {moment.unix(item.created_at_i).format('DD-MM-YYYY')}
      </StyledColumn>
      <StyledColumn width="10%"> {item.author}</StyledColumn>
      <StyledColumn className="hide" width="10%">
        {' '}
        {item.num_comments}
      </StyledColumn>
      <StyledColumn className="hide" width="10%">
        {' '}
        {item.points}
      </StyledColumn>
      <StyledColumn className="hide" width="10%">
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
