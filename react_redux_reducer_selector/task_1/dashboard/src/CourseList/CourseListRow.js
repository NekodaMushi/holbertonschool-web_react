import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './CourseList';
import { css, StyleSheet } from 'aphrodite';
import { useState } from 'react';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};

const headerRowStyle = {
  backgroundColor: '#deb5b545',
};


export default function CourseListRow({isHeader, textSecondCell, textFirstCell}) {
  const [check, setCheck] = useState(false);
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
    return <><tr style={textFirstCell == 'Webpack' ? rowStyle : null} className={css(styles.generalTrBody, check ? style.rowChecked : '')}>
            <td><input type='checkbox' name='check' checked={check} onChange={(e) => setCheck(e.target.checked)}></input>{textFirstCell}</td>
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

const style = StyleSheet.create({
  rowChecked: {
    backgroundColor: '#e6e4e4',
  }
});
