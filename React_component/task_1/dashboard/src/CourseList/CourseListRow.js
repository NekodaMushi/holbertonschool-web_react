import React from 'react';
import PropTypes from 'prop-types';

export default function CourseListRow({isHeader, textSecondCell, textFirstCell}) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return <><th colSpan="2">{textFirstCell}</th></>
    } else {
      return <>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th></>
    }
  } else {
    return <>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td></>
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};
