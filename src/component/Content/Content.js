import classNames from 'classnames/bind';

import styles from './Content.module.scss';
import duplicateIP from '~/asset/images/duplicate_ip.png';
import iphone from '~/asset/images/IP12.png';
import mac from '~/asset/images/mac.png';
import GG from '~/asset/images/GG.png';
import AppStore from '~/asset/images/AppStore.png';
import extend from '~/asset/images/Vector.png';

import pfs from '~/asset/images/Professional.png';
import fast from '~/asset/images/fast.png';

import clean from '~/asset/images/cleaning.png';
import application from '~/asset/images/appliances.png';
import houseHold from '~/asset/images/houshold.png';
import elec from '~/asset/images/electronic.png';
import FeatureSlider from '../FeatureSlider/FeatureSlider';

import person1 from '~/asset/images/TopBSN.png';
import person2 from '~/asset/images/person2.png';
import person3 from '~/asset/images/person3.png';
const cx = classNames.bind(styles);
const desc1 =
    'Modern consumer trends: Focus on top-selected services. Changings business models to new consumer trench. Appplying the lastest technology';
const desc2 =
    'Accompanying the application is indispensable for businesses that play a great role and contribute to the ecosystem. The same goal becomes the spearhead in some areas.';
const ListItem1 = [
    { img: pfs, title: 'Professional' },
    { img: fast, title: 'Fast' },
    { img: pfs, title: 'Professional' },
    { img: pfs, title: 'Professional' },
    { img: pfs, title: 'Professional' },
    { img: pfs, title: 'Professional' },
    { img: pfs, title: 'Professional' },
    { img: pfs, title: 'Professional' },
];
const ListItem2 = [
    {
        img: clean,
        title: 'Cleaning',
        description: 'Hiện đại và uy tính. Tạo không gian sống sạch đẹp',
    },
    { img: application, title: 'Appliance', description: 'Experience...' },
    { img: houseHold, title: 'HouseHold', description: 'Experience...' },
    { img: elec, title: 'Electronic', description: 'Experience...' },
    {
        img: clean,
        title: 'Cleaning',
        description: 'Hiện đại và uy tính. Tạo không gian sống sạch đẹp',
    },
    { img: application, title: 'Appliance', description: 'Experience...' },
    { img: houseHold, title: 'HouseHold', description: 'Experience...' },
    { img: elec, title: 'Electronic', description: 'Experience...' },
    {
        img: clean,
        title: 'Cleaning',
        description: 'Hiện đại và uy tính. Tạo không gian sống sạch đẹp',
    },
    { img: application, title: 'Appliance', description: 'Experience...' },
    { img: houseHold, title: 'HouseHold', description: 'Experience...' },
    { img: elec, title: 'Electronic', description: 'Experience...' },
    {
        img: clean,
        title: 'Cleaning',
        description: 'Hiện đại và uy tính. Tạo không gian sống sạch đẹp',
    },
    { img: application, title: 'Appliance', description: 'Experience...' },
    { img: houseHold, title: 'HouseHold', description: 'Experience...' },
    { img: elec, title: 'Electronic', description: 'Experience...' },
];
const ListItem3 = [
    { img: person1 },
    { img: person2 },
    { img: person3 },
    { img: person1 },
    { img: person2 },
    { img: person3 },
    { img: person1 },
    { img: person2 },
    { img: person3 },
    { img: person1 },
    { img: person2 },
    { img: person3 },
];
function Content() {
    return (
        <div className={cx('wrapper')}>
            <iframe
                width="1903"
                height="764"
                src="https://www.youtube.com/embed/NZKUirTtxcg"
                title="Infinite Scrolling With React - Tutorial"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
            <div className={cx('feature')}>
                <div className={cx('devices')}>
                    <img src={duplicateIP} alt="customer" />
                </div>
                <div className={cx('description')}>
                    <h2 className={cx('feature__title')}>App for customers</h2>
                    <p>
                        The general idea behind 'diversification' is to provide
                        a Service ecosystem that fully caters to all customer
                        needs from the smallest needs
                    </p>
                    <div className={cx('methods')}>
                        <img
                            src={GG}
                            alt="ggstore"
                            className={cx('methods__gg')}
                        />
                        <img
                            src={AppStore}
                            alt="appstore"
                            className={cx('methods__at')}
                        />
                    </div>
                    <span className={cx('extend')}>
                        See more <img src={extend} alt="" />
                    </span>
                </div>
            </div>
            <div className={cx('feature')}>
                <div className={cx('description')}>
                    <h2 className={cx('feature__title')}>App for Business</h2>
                    <p>
                        One of the advantages of Multi-Industry Services is that
                        it helps reduce the impact of unexpected
                    </p>
                    <div className={cx('methods')}>
                        <img
                            src={GG}
                            alt="ggstore"
                            className={cx('methods__gg')}
                        />
                        <img
                            src={AppStore}
                            alt="appstore"
                            className={cx('methods__at')}
                        />
                    </div>
                    <span className={cx('extend')}>
                        See more <img src={extend} alt="" />
                    </span>
                </div>
                <div className={cx('devices')}>
                    <img src={duplicateIP} alt="customer" />
                </div>
            </div>
            <div className={cx('feature')}>
                <div className={cx('devices')}>
                    <img src={mac} alt="customer" />
                </div>
                <div className={cx('description')}>
                    <h2 className={cx('feature__title')}>App for Managers</h2>
                    <p>
                        Each branch of service provides is independent of the
                        other business areas. but the activities of the services
                        will be reported to senior management of the company
                        that owns the applications
                    </p>
                    <div className={cx('methods')}>
                        <img
                            src={GG}
                            alt="ggstore"
                            className={cx('methods__gg')}
                        />
                        <img
                            src={AppStore}
                            alt="appstore"
                            className={cx('methods__at')}
                        />
                    </div>
                    <span className={cx('extend')}>
                        See more <img src={extend} alt="" />
                    </span>
                </div>
            </div>
            <FeatureSlider
                title="Why choose us"
                desc={desc1}
                listItem={ListItem1}
            />
            <FeatureSlider
                title="Learn more about the service"
                listItem={ListItem2}
                haveButton={true}
            />
            <FeatureSlider title="Top Business" desc={desc2} listItem={ListItem3} isFull={true} perView={3}/>
        </div>
    );
}

export default Content;
