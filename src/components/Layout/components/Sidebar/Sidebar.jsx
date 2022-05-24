import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <h2>sibar</h2>
      <h2>sibar</h2>
      <h2>sibar</h2>
    </aside>
  );
}
