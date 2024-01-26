import React from "react";
import BodySection from "./BodySection";
import './BodySection.css';
import Proptypes from 'prop-types';

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
  title: Proptypes.string,
};

BodySectionWithMarginBottom.defaultProps = {
  title: '',
};

export default BodySectionWithMarginBottom;
