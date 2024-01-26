import React from "react";
import BodySection from "./BodySection";
import './BodySection.css';
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return <>
      <div className="bodySectionWithMargin">
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

export default BodySectionWithMarginBottom;
