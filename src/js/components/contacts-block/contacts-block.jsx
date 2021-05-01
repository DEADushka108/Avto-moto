import React, {Fragment} from 'react';

const ContactsBlock = () => {
  return <Fragment>
    <ul className="car-card__contacts contacts">
      <li className="contacts__item">
        <p className="contacts__name">Адрес</p>
        <p className="contacts__value">Санкт-Петербург, набережная реки Карповки, дом 5</p>
      </li>
      <li className="contacts__item">
        <p className="contacts__name">Режим работы</p>
        <p className="contacts__value">Ежедневно, с 10:00 до 21:00</p>
      </li>
      <li className="contacts__item">
        <p className="contacts__name">Телефон</p>
        <a className="contacts__value" href="tel:88003335599">8 (800) 333-55-99</a>
      </li>
      <li className="contacts__item">
        <p className="contacts__name">E-mail</p>
        <a className="contacts__value" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
      </li>
    </ul>
    <iframe
      className="contacts__map-iframe"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.603787253323!2d30.320858716385143!3d59.93871648187622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1582307010902!5m2!1sru!2sru"
      allowFullScreen=""
      title="Санкт-Петербург, ул. Б. Конюшенная, д. 19/8">
    </iframe>
  </Fragment>;
};

export default ContactsBlock;
