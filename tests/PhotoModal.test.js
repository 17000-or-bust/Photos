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
import PhotoModal from '../client/src/components/PhotoModal';

configure({
  adapter: new Adapter(),
});

describe('Photo Modal', () => {
  it('should check for currentImageIndex state', () => {
    expect(shallow(<PhotoModal />).state()).toHaveProperty('currentImageIndex');
  });

  it('should check for images state', () => {
    expect(shallow(<PhotoModal />).state()).toHaveProperty('images');
  });

  it('should check for randomId state', () => {
    expect(shallow(<PhotoModal />).state()).toHaveProperty('randomId');
  });
});
