import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerRowStyle = {
  backgroundColor: '#deb5b545',
};

export default function CourseListRow({isHeader, textSecondCell, textFirstCell}) {
  if (isHeader === true) {
    if (textSecondCell === null) {
      return <><tr className={css(styles.generalThead)}><th colSpan="2" className={css(styles.colspan)}>{textFirstCell}</th></tr></>
    } else {
      return <><tr style={headerRowStyle} className={css(styles.generalThead)}>
              <th className={css(styles.generalTh)}>{textFirstCell}</th>
              <th className={css(styles.generalTh)}>{textSecondCell}</th>
              </tr></>
    }
  } else {
    return <><tr style={textFirstCell == 'Webpack' ? rowStyle : null} className={css(styles.generalTrBody)}>
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

const styles = StyleSheet.create({
  generalThead: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(2, 50%)',
  },
  colspan: {
    gridColumn: '1/2',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  generalTrBody: {
    borderTop: '1px solid lightgray',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 50%)',
  },
  generalTh: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
});
