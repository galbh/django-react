import moment from 'moment';

class DateUtils {
  formatDateTime (date, time) {
    return new Date(
      date.getFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      time.getHours(),
      time.getMinutes(),
      time.getSeconds()
    );
  }

  getFormattedDateTime (isoString) {
    const date = moment(isoString);
    return {
      time: `${(`0${date.hours()}`).slice(-2)}:${(`0${date.minutes()}`).slice(-2)}`,
      date: `${date.date()}.${date.month() + 1}.${date.year()}`
    };
  }

  getDateFromTime (time) {
    const date = new Date();
    date.setHours(time.split(':')[0], time.split(':')[1]);
    return date;
  }

  getParsedDate (date) {
    return `${date.getFullYear()}-${this.appendZero(date.getMonth() + 1)}-${this.appendZero(date.getDate())}`;
  }

  appendZero (value) {
    return value < 10 ? `0${value}` : value;
  }

  getTimeFromDate (date) {
    return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }

  isValidDate (date) {
    return !Number.isNaN(date.getTime());
  }
}

export default new DateUtils();
