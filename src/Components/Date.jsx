import React from 'react';
import moment from 'moment';

class CoolDatesList extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <tr>
        <td>{this.props.date.formattedDate}</td>
        <td>{this.props.date.count} {this.props.date.type}</td>
      </tr>
    );
  }
}
export default CoolDatesList;
