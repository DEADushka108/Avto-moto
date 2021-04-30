import React, {Fragment} from 'react';
import CarInfo from '../car-info/car-info';
import CarSlider from '../car-slider/car-slider';
import Tabs from '../tabs/tabs';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import Tab from '../tab/tab';
import DetailsBlock from '../details-block/details-block';
import ReviewsBlock from '../reviews-block/reviews-block';

const TabsWrapped = withActiveItem(Tabs);

const TabNames = {
  DETAILS: `Характеристики`,
  REVIEWS: `Отзывы`,
  CONTACTS: `Контакты`,
};

const CarCard = () => {
  return <Fragment>
    <section className="car-card">

      <CarSlider/>

      <CarInfo/>

      <TabsWrapped>
        <Tab title={TabNames.DETAILS}>
          <DetailsBlock/>
        </Tab>
        <Tab title={TabNames.REVIEWS}>
          <ReviewsBlock/>
        </Tab>
        <Tab title={TabNames.CONTACTS}>
          <h1>Contacts</h1>
        </Tab>
      </TabsWrapped>

    </section>
  </Fragment>;
};

export default CarCard;
