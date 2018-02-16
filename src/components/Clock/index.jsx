import moment from 'moment';
import React from 'react';
import classnames from 'classnames';
import { render } from 'react-dom';
import styles from './styles.css';

export class Clock extends React.Component {
  updateDatetimeIntervalTimer;

  moveHands() {
    this.setState({
      datetime: this.state.datetime.add(1, 's'),
    });
  }

  constructor(props) {
    super(props);
    this.moveHands = this.moveHands.bind(this);
  }

  componentWillMount() {
    this.setState({
      datetime: this.props.datetime || moment.now(),
    });
  }

  componentDidMount() {
    this.updateDatetimeIntervalTimer = setInterval(this.moveHands, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.updateDatetimeIntervalTimer);
  }

  render() {
    const { datetime = moment.now() } = this.state;
    const { country } = this.props;
    const momentDatetime = moment(datetime);
    const seconds = momentDatetime.second();
    const minutes = momentDatetime.minute();
    const hours = momentDatetime.hour();

    let timeOfDay = 'evening';
    if (hours > 4 && hours < 9) {
      timeOfDay = 'morning';
    } else if (hours > 9 && hours < 18) {
      timeOfDay = 'noon';
    }

    const secondsDegrees = seconds / 60 * 360 + 90;
    const minutesDegrees = minutes / 60 * 360;
    const hoursDegrees = hours / 12 * 360 + 90;

    return (
      <div className={classnames(styles.container, styles[`${timeOfDay}`])}>
        <div className={styles.country}>
          <span>{country}</span>
        </div>
        <div className={styles['date-weekday']}>
          <span className={styles.date}>{`${momentDatetime.format('DD')} `}</span>
          <span className={styles.weekday}>{momentDatetime.format('dd')}</span>
        </div>
        <div className={styles.face}>
          <div id="second" className={styles.second} style={{ transform: `rotate(${secondsDegrees}deg)` }} />
          <div id="minute" className={styles.minute} style={{ transform: `rotate(${minutesDegrees}deg)` }} />
          <div id="hour" className={styles.hour} style={{ transform: `rotate(${hoursDegrees}deg)` }} />
        </div>
      </div>
    );
  }
}
