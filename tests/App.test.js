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
import App from '../client/src/components/App';


configure({
  adapter: new Adapter(),
});

describe('App', () => {
  it('should render App without throwing an error', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });

  it('should render PhotoBanner without throwing an error', () => {
    expect(shallow(<App />).find('PhotoBanner').exists()).toBe(true);
  });

  it('should render bookmark button without throwing an error', () => {
    expect(shallow(<App />).find('SaveThisRestaurantButton').exists()).toBe(true);
  });

  it('should render photo modal without throwing an error', () => {
    expect(shallow(<App />).find('PhotoModal').exists()).toBe(true);
  });
});
