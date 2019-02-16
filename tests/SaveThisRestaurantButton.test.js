import React from 'react';
import ReactDOM from 'react-dom';
import {
  configure,
  mount,
  shallow,
  render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  wrap,
} from 'module';
import SaveThisRestaurantButton from '../client/src/components/SaveThisRestaurantButton';

configure({
  adapter: new Adapter(),
});

describe('Bookmark Button', () => {
  it('should render button without throwing an error', () => {
    expect(shallow(<SaveThisRestaurantButton />).exists()).toBe(true);
  });

  it('should have bookmark icon', () => {
    expect(shallow(<SaveThisRestaurantButton />).find('svg').exists()).toBe(true);
  });

  it('should simulate a click', () => {
    expect(shallow(<SaveThisRestaurantButton />).simulate('click'));
  });
});
