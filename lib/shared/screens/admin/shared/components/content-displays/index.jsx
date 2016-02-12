import cx from 'classnames';
import Component from 'components/component';
import React, {PropTypes} from 'react';

import styles from './index.less';

export default class ContentDisplays extends Component {
  static propTypes = {
    display: PropTypes.oneOf(['grid', 'list']).isRequired
  };

  render () {
    const {display} = this.props;
    return (
      <div className={styles.root}>
        <button className={cx(styles.button, display === 'grid' && styles.active)}>
          <i className='nc-icon-outline media-1_grid'></i>
        </button>
        <button className={cx(styles.button, display === 'list' && styles.active)}>
          <i className='nc-icon-outline design_bullet-list-69'></i>
        </button>
      </div>
    );
  }
}
