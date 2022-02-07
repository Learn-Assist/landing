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

class Team extends React.Component {

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
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Meet the team',
      paragraph: 'We are a small team of designers and developers from KCT, final semester of CSE 2018.'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
            <div className={tilesClasses}>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header reveal-scale-up" data-reveal-container=".tiles-item">
                    <div className="team-item-image mb-24 illustration-element-08">
                      <Image
                        src={require('./../../assets/images/logo.jpg')}
                        alt="Team member 01"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4 reveal-from-bottom" data-reveal-container=".tiles-item">
                      Sivaram Shabari
                    </h5>
                    <div className="team-item-role text-color-secondary text-xxs tt-u fw-500 mb-8 reveal-from-bottom" data-reveal-container=".tiles-item" data-reveal-delay="150">
                      18BCS083
                    </div>
                    <p className="m-0 text-sm reveal-from-bottom" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header reveal-scale-up" data-reveal-container=".tiles-item">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/logo.jpg')}
                        alt="Team member 02"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4 reveal-from-bottom" data-reveal-container=".tiles-item">
                      Kesavan
                    </h5>
                    <div className="team-item-role text-color-secondary text-xxs tt-u fw-500 mb-8 reveal-from-bottom" data-reveal-container=".tiles-item" data-reveal-delay="150">
                      18BCS080
                    </div>
                    <p className="m-0 text-sm reveal-from-bottom" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. */}
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header reveal-scale-up" data-reveal-container=".tiles-item">
                    <div className="team-item-image mb-24">
                      <Image
                        src={require('./../../assets/images/logo.jpg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4 reveal-from-bottom" data-reveal-container=".tiles-item">
                      Bharath
                    </h5>
                    <div className="team-item-role text-color-secondary text-xxs tt-u fw-500 mb-8 reveal-from-bottom" data-reveal-container=".tiles-item" data-reveal-delay="150">
                      18BCS081
                    </div>
                    <p className="m-0 text-sm reveal-from-bottom" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. */}
                    </p>
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

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;