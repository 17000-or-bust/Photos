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

  it('should have PhotoBanner as child component', () => {
    expect(shallow(<App />).find('PhotoBanner').exists()).toBe(true);
  });

  it('should have SaveThisRestaurantButton as child component', () => {
    expect(shallow(<App />).find('SaveThisRestaurantButton').exists()).toBe(true);
  });

  it('should have PhotoModal as child component', () => {
    expect(shallow(<App />).find('PhotoModal').exists()).toBe(true);
  });

  it('should check for photos state', () => {
    expect(shallow(<App />).state()).toHaveProperty('photos');
  });

  it('should check for randomId state', () => {
    expect(shallow(<App />).state()).toHaveProperty('randomId');
  });

  it('should check for showModal state', () => {
    expect(shallow(<App />).state()).toHaveProperty('showModal');
  });

  it('should check for showFlagModal state', () => {
    expect(shallow(<App />).state()).toHaveProperty('showFlagModal');
  });
});
