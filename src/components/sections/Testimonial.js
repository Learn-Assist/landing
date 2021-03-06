import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Testimonial extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap illustration-section-03',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Upcoming features',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item center-content reveal-scale-up" data-reveal-container=".tiles-wrap" data-reveal-delay="300">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/logo.jpg')}
                        alt="Testimonial 01"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Academic institution management features, to enable large acadmic insitutions to manage and improve their students' academic profile efficiently and smartly.
                    </p>
                  </div>
                  <div className="testimonial-item-footer mt-24 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name text-sm fw-700">Institution support</span>
                    <span className="testimonial-item-link text-xs fw-500">
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item center-content reveal-scale-up" data-reveal-container=".tiles-wrap">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/logo.jpg')}
                        alt="Testimonial 02"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Interactive AI generated live teacher-bot tailored for each student. It is a 3D interactive model of a virtual teacher.
                    </p>
                  </div>
                  <div className="testimonial-item-footer mt-24 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name text-sm fw-700">Teacher bot</span>
                    <span className="testimonial-item-link text-xs fw-500">
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item center-content reveal-scale-up" data-reveal-container=".tiles-wrap" data-reveal-delay="150">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-header mb-24">
                    <div className="testimonial-item-image">
                      <Image
                        src={require('./../../assets/images/logo.jpg')}
                        alt="Testimonial 03"
                        width={56}
                        height={56} />
                    </div>
                  </div>
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-0">
                      Create classrooms manages entirely by the teacher-bot, with exceptional teaching skills and interactive with all student in class.
                    </p>
                  </div>
                  <div className="testimonial-item-footer mt-24 mb-0 pt-24 has-top-divider">
                    <span className="testimonial-item-name text-sm fw-700">Virtual Classrooms</span>
                    <span className="testimonial-item-link text-xs fw-500">
                    </span>
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;