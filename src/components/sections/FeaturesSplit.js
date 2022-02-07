import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Start using your personal learning assistant',
      paragraph: 'Signup through Google / youremail. You can use it to learn new skills, improve your skills, and improve your academic profile.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-left" data-reveal-container=".split-item">
                    Learn anywhere and anytime
                  </h3>
                  <p className="m-0 reveal-from-left" data-reveal-delay="100" data-reveal-container=".split-item">
                    The only requirement to start learning with Learn Assist is a device that supports the web. You can talk to our assistant and start learning right away!
                    Learning through conversations is the most effective way to learn, as there is communication between two sides unlike watching a educational video.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-03 reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                  <div style={imgOddStyle}>
                    <Image
                      src={require('./../../assets/images/college.jpg')}
                      alt="Features split top 01"
                      width={700}
                      height={583} />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16 reveal-from-right" data-reveal-container=".split-item">
                    Create your own content
                  </h3>
                  <p className="m-0 reveal-from-right" data-reveal-delay="100" data-reveal-container=".split-item">
                    You can add educational content that you seem fit for your student or child. If we find the content is of high quality you can also opt to add your course to our academic library.
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-04 reveal-scale-up',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200">
                  <Image
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                  <div style={imgEvenStyle}>
                    <Image
                      src={require('./../../assets/images/features-split-top-03.png')}
                      alt="Features split top 02"
                      width={700}
                      height={583} />
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </section>
    );
  }
}

const imgOddStyle = {
  position: 'absolute',
  width: '132.57%',
  maxWidth: '132.57%',
  top: '-20.2%',
  left: '-16.1%'
}

const imgEvenStyle = {
  position: 'absolute',
  width: '132.57%',
  maxWidth: '132.57%',
  top: '-20.2%',
  left: '-16.6%'
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;