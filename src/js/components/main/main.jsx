import React, {Fragment} from 'react';
import CarCard from '../car-card/car-card';
import Footer from '../footer/footer';
import Header from '../header/header';

const Main = () => {
  return <Fragment>
    <Header/>
    <main className="page-main">
      <div className="page-main__wrapper">
        <h1 className="visually-hidden">Карточка автомобиля</h1>

        <CarCard/>
      </div>
    </main>
    <Footer/>

  </Fragment>;
};

export default Main;
