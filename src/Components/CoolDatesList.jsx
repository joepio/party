import React from 'react';

import Date from './Date';

class CoolDatesList extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <table className="CoolDatesTable">
        <tr>
          <th>date</th>
          <th>special thing</th>
        </tr>
        {this.props.dates.map(date => {return <Date date={date}/>})}
      </table>
    );
  }
}
export default CoolDatesList;
