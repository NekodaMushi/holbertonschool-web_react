import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerRowStyle = {
  backgroundColor: '#deb5b545',
};

export default function CourseListRow({isHeader, textSecondCell, textFirstCell}) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return <><tr><th colSpan="2">{textFirstCell}</th></tr></>
    } else {
      return <><tr style={headerRowStyle}>
              <th>{textFirstCell}</th>
              <th>{textSecondCell}</th>
              </tr></>
    }
  } else {
    return <><tr style={textFirstCell == 'Webpack' ? rowStyle : null}>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
            </tr></>
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
