import React from 'react';
import { render } from 'react-dom';
import { Clock } from '../../components/Clock/index';
import moment from 'moment';
import styles from './styles.css';

export class TopContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        <header />
        <div className={styles['clocks-container']}>
          <div>
            <Clock datetime={moment().add(-2, 'h')} country="HCMC" />
          </div>
          <div>
            <Clock country="TYO" />
          </div>
          <div>
            <Clock datetime={moment().add(-17, 'h')} country="SF" />
          </div>
        </div>
      </div>
    );
  }
}
