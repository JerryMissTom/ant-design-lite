import React, { createElement } from 'react';
import classNames from 'classnames';
import { Button } from 'antd';
import config from './typeConfig';
import styles from './index.scss';

class Exception extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      className,
      type,
      title,
      desc,
      img,
      actions,
      ...rest
    } = this.props;
    const pageType = type in config ? type : '404';
    const clsString = classNames(styles.exception, className);
    return (
      <div className={clsString} {...rest}>
        <div className={styles.imgBlock}>
          <div
            className={styles.imgEle}
            style={{ backgroundImage: `url(${img || config[pageType].img})` }}
          />
        </div>
        <div className={styles.content}>
          <h1>{title || config[pageType].title}</h1>
          <div className={styles.desc}>{desc || config[pageType].desc}</div>
        </div>
      </div>
    );
  }
}

export default Exception;
