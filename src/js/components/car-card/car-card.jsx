import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import CarInfo from '../car-info/car-info';
import CarSlider from '../car-slider/car-slider';
import Tabs from '../tabs/tabs';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import Tab from '../tab/tab';
import DetailsBlock from '../details-block/details-block';
import ReviewsBlock from '../reviews-block/reviews-block';
import {connect} from 'react-redux';
import {getActiveCar} from '../../store/cars/selector';
import {getReviews} from '../../store/reviews/selector';
import ContactsBlock from '../contacts-block/contacts-block';
import withActiveSlide from '../../hocs/with-active-slide/with-active-slide';
import {carDetails, reviewsDetails} from '../../types/types';
import withActiveModal from '../../hocs/with-active-modal/with-active-modal';

const TabsWrapped = withActiveItem(Tabs);
const CarSliderWrapped = withActiveSlide(CarSlider);
const ReviewsBlockWrapped = withActiveModal(ReviewsBlock);

const TabNames = {
  DETAILS: `Характеристики`,
  REVIEWS: `Отзывы`,
  CONTACTS: `Контакты`,
};

const CarCard = (props) => {
  const {carInfo, reviews} = props;

  return <Fragment>
    <section className="car-card">
      <div className="car-card__wrapper">

        <CarSliderWrapped carInfo={carInfo}/>

        <CarInfo carInfo={carInfo}/>

      </div>

      <TabsWrapped>
        <Tab title={TabNames.DETAILS}>
          <DetailsBlock carInfo={carInfo}/>
        </Tab>
        <Tab title={TabNames.REVIEWS}>
          <ReviewsBlockWrapped reviews={reviews}/>
        </Tab>
        <Tab title={TabNames.CONTACTS}>
          <ContactsBlock/>
        </Tab>
      </TabsWrapped>

    </section>
  </Fragment>;
};

CarCard.propTypes = {
  carInfo: carDetails,
  reviews: PropTypes.arrayOf(reviewsDetails),
};

const mapStateToProps = (state) => ({
  carInfo: getActiveCar(state),
  reviews: getReviews(state),
});

export default connect(mapStateToProps)(CarCard);
