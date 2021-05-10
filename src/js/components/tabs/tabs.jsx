import React from 'react';
import PropTypes from 'prop-types';


const Tabs = (props) => {
  const {children, activeItem, onActiveItemChange} = props;

  return <div className="car-card__desc">
    <nav className="car-nav car-card__nav">
      <ul className="car-nav__list">
        {children.map((child, index) => {
          const {title} = child.props;
          return <li key={`${title}-${index}`}
            className={`car-nav__item ${(activeItem === index) ? `car-nav__item--active` : ``}`}
            onClick={() => {
              onActiveItemChange(index);
            }}>
            <button type="button" className="car-nav__button">{title}</button>
          </li>;
        })}
      </ul>
    </nav>
    {children.map((child, index) => {
      const {children: content} = child.props;

      return index === activeItem ? content : null;
    })}
  </div>;
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  activeItem: PropTypes.number.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default Tabs;
