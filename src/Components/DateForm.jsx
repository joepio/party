import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class DateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
    this.props.onSubmit(date);
  }

  handleSubmit() {
    this.props.onSubmit(this.state.startDate);
  }

  render() {
    return (
      <div className="DateForm">
        <p>
          Which date should be celebrated?
        </p>
        <DatePicker
            dateFormat="YYYY/MM/DD"
            selected={this.state.startDate}
            onChange={this.handleChange}
            showYearDropdown
            placeholderText="Pick a date!"
            className="DateForm__input"
        />
        {/* <button className="DateForm__button" type="button" onClick={this.handleSubmit}>
          Calculate
        </button> */}
      </div>
    );
  }
}
export default DateForm;
