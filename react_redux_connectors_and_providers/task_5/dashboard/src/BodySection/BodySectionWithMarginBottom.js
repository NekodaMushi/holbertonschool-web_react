import React from "react";
import BodySection from "./BodySection";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return <>
      <div className={("bodySectionWithMargin", css(styles.bodySectionWithMargin))}>
        <BodySection {...this.props}/>
      </div>
    </>
  };
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
};

BodySectionWithMarginBottom.defaultProps = {
  title: '',
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  }
});

export default BodySectionWithMarginBottom;
