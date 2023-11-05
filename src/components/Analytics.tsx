import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { AnalyticTitles } from '../const';
import { TiAnalyticsProps } from '../types';
import { useCallback } from 'react';

const CounterBasic = ({
  title,
  basic,
  advantageList,
  disadvantageList,
}: TiAnalyticsProps) => {
  const capitalizeFirstLetter = useCallback((sentence: string) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }, []);

  return (
    <ListGroup>
      <ListGroupItem variant="primary">
        <b>{AnalyticTitles.BASIC + title} </b>
      </ListGroupItem>
      <ListGroupItem>{capitalizeFirstLetter(basic)}</ListGroupItem>

      <ListGroupItem variant="success">
        <b>{AnalyticTitles.ADV}</b>
      </ListGroupItem>

      {advantageList.map((item, index) => (
        <ListGroupItem key={index}>{capitalizeFirstLetter(item)}</ListGroupItem>
      ))}

      <ListGroupItem variant="danger">
        <b>{AnalyticTitles.DIS}</b>
      </ListGroupItem>

      {disadvantageList.map((item, index) => (
        <ListGroupItem key={index}>{capitalizeFirstLetter(item)}</ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default CounterBasic;
