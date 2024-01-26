import React from 'react';

export default function CourseListRow(props) {
  if (props.isHeader === true) {
    if (props.textSecondCell === null) {
      return <><th colspan="2">{props.textFirstCell}</th></>
    } else {
      return <>
              <th>{props.textFirstCell}</th>
              <th>{props.textSecondCell}</th></>
    }
  } else {
    return <>
            <td>{props.textFirstCell}</td>
            <td>{props.textSecondCell}</td></>
  }
}
