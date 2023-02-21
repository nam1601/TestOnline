import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, HashNavigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/hash-navigation';
import 'swiper/swiper-bundle.css';
// import "swiper/swiper.scss";
// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";

import styles from './FeatureSlider.module.scss';
const cx = classNames.bind(styles);
function FeatureSlider({
    title,
    desc,
    listItem,
    haveButton = false,
    isFull = false,
    perView=4
}) {
    // SwiperCore.use([Navigation, Pagination]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('desc')}>
                <h2 className={cx('desc__title')}>{title}</h2>
                <p>{desc}</p>
            </div>
            <Swiper
                spaceBetween={30}
                slidesPerView={perView}
                observer={true}
                observeParents={true}
                hashNavigation={{
                    watchState: true,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                navigation={{
                    enabled: true,
                    navigation: {
                        nextEl: `${
                            haveButton ? '.review-swiper-button-next' : ''
                        }`,
                        prevEl: '.review-swiper-button-prev',
                    },
                }}
                nextButton={'.arrow-left'}
                prevButton={'.arrow-right'}
                modules={[Pagination, Navigation, HashNavigation]}
                className={cx('swiper')}
            >
                {isFull
                    ? listItem.map((item, index) => (
                          <SwiperSlide key={item}>
                              <div
                                  className={cx('swiper__item','image')}
                                  style={{ backgroundImage: `url(${item.img})` }}
                              ></div>
                          </SwiperSlide>
                      ))
                    : listItem.map((item, index) => (
                          <SwiperSlide key={item}>
                              <div className={cx('swiper__item')}>
                                  <img
                                      src={item.img}
                                      alt={item.img}
                                      className={cx('item__img')}
                                  />
                                  <h3 className={cx('item__title')}>
                                      {item.title}
                                  </h3>
                                  {item.description ? (
                                      <p
                                          className={cx(
                                              `${haveButton ? 'big-size' : ''}`,
                                          )}
                                      >
                                          {item.description}
                                      </p>
                                  ) : (
                                      ''
                                  )}
                                  {haveButton ? (
                                      <button className={cx('button')}>
                                          Tìm hiểu thêm
                                      </button>
                                  ) : (
                                      ''
                                  )}
                              </div>
                          </SwiperSlide>
                      ))}
                {/* {!isFull? listItem.map((item, index) => (
                        
                        <SwiperSlide key={item}>
                            <div className={cx('swiper__item')}>
                                <img
                                    src={item.img}
                                    alt={item.img}
                                    className={cx('item__img')}
                                />
                                <h3 className={cx('item__title')}>{item.title}</h3>
                                {item.description ? (
                                    <p
                                        className={cx(
                                            `${haveButton ? 'big-size' : ''}`,
                                        )}
                                    >
                                        {item.description}
                                    </p>
                                ) : (
                                    ''
                                )}
                                {haveButton ? (
                                    <button className={cx('button')}>
                                        Tìm hiểu thêm
                                    </button>
                                ) : (
                                    ''
                                )}
                            </div>
                        </SwiperSlide>
                    )):'    '} */}
            </Swiper>
        </div>
    );
}

export default FeatureSlider;
