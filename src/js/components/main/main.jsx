import React, {Fragment} from 'react';
import CarCard from '../car-card/car-card';
import Footer from '../footer/footer';
import Header from '../header/header';

const Main = () => {
  return <Fragment>
    <Header/>
    <main className="page-main">
      <h1 className="visually-hidden">Авто мото</h1>

      <CarCard/>

    </main>

    <Footer/>

  </Fragment>;
};

export default Main;
