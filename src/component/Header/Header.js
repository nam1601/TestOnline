import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination } from 'swiper';

import styles from './Header.module.scss';
import logo from '~/asset/images/logo.png';
import mainSlide from '~/asset/images/mainslider.png';
import mainSlide2 from '~/asset/images/mainslider.png';
import mainSlide3 from '~/asset/images/mainslider.png';
import mainSlide4 from '~/asset/images/mainslider.png';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
const LIST_SLIDE = [mainSlide, mainSlide2, mainSlide3, mainSlide4];
function Header() {
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav-bar')}>
                <div className={cx('navigation')}>
                    <div className={cx('logo')}>
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className={cx('navigation-list')}>
                        <li className={cx('navigation-item', 'active')}>
                            Home
                        </li>
                        <li className={cx('navigation-item')}>Product</li>
                        <li className={cx('navigation-item')}>Services</li>
                        <li className={cx('navigation-item')}>Blog</li>
                        <li className={cx('navigation-item')}>Contact</li>
                    </ul>
                </div>
            </div>

            <Swiper
                modules={[Pagination]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                direction="horizontal"
                // pagination={{
                //     clickable: true,
                // }}
                className={cx('swiper')}

                pagination={{
                    clickable: true,
                    // el: `swiper-container swiper-container-testClass`,
                    // bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
                }}
            >
                {LIST_SLIDE.map((item, index) => (
                    <SwiperSlide key={index} className={cx('swiper-slider')}>
                        <div
                            className={cx('slide-wrapper')}
                            style={{ backgroundImage: `url(${item})` }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Header;
