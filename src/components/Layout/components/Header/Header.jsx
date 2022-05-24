import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import logo from '~/assets/images/logo.svg';
import search from '~/assets/images/search.svg';
import seeMore from '~/assets/images/seeMore.svg';
import uploadIcon from '~/assets/images/upload.svg';

export default function Header() {
  const cx = classNames.bind(styles);
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={logo} alt="Tiktok" />
        </div>
        <div className={cx('searchForm')}>
          <input
            type="text"
            placeholder="Tìm kiếm tài khoản và Video"
            className={cx('search--input')}
          />
          <span className={cx('search--spase')}></span>
          <button className={cx('search--button')}>
            <img src={search} alt="" />
          </button>
        </div>
        <div className={cx('item')}>
          <button className={cx('upload')}>
            <img src={uploadIcon} alt="" /> Tải lên
          </button>
          <button className={cx('singin')}>Đăng nhập</button>
          <img src={seeMore} alt="" className={cx('see-more')} />
        </div>
      </div>
    </header>
  );
}
