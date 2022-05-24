import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);
export default function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('contents')}>{children}</div>
      </div>
    </div>
  );
}
