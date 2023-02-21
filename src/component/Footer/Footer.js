import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import fb from '~/asset/images/face.png';
import ni from '~/asset/images/ni.png';
import twit from '~/asset/images/twit.png';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer')}>
                <div className={cx('brand')}>
                    <h2>Brandname</h2>
                    <h4>Follow us: </h4>
                    <ul className={cx('list-icon')}>
                        <li>
                            <img src={fb} alt="face" />
                        </li>
                        <li>
                            <img src={ni} alt="ni" />
                        </li>
                        <li>
                            <img src={twit} alt="twit" />
                        </li>
                    </ul>
                </div>
                <div className={cx('info')}>
                    <div className={cx('home')}>
                        <h4>Home</h4>
                        <ul>
                            <li>About us</li>
                            <li>Intro</li>
                            <li>Features</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className={cx('home')}>
                        <h4>Support</h4>
                        <ul>
                            <li>Shipping and Returns</li>
                            <li>Contact us</li>
                            <li>Ours Partner</li>
                        </ul>
                    </div>
                    <div className={cx('home')}>
                        <h4>Resources</h4>
                        <ul>
                            <li>Our workư</li>
                            <li>Service</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className={cx('home')}>
                        <h4>Contact Us</h4>
                        <ul>
                            <li>About us</li>
                            <li>Menu</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx('contact')}>
                <div className={cx('desc')}>
                    <h2>Contact Us</h2>
                    <p>Please connect with us for answers and service experience completely and completel</p>
                </div>
                <div className={cx('input')}>
                    <input placeholder="Enter your email for consultation" />
                    <button>Đăng ký</button>
                </div>
            </div>
            <p className={cx('dev-by')}>(c) 2023 - Delicious, All rights reserved</p>
        </div>);
}

export default Footer;
