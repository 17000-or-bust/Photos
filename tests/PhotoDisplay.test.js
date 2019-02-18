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
import PhotoDisplay from '../client/src/components/PhotoDisplay';

configure({
  adapter: new Adapter(),
});

it('should have PhotoDisplayEntry as child component', () => {
  expect(shallow(<PhotoDisplay />).find('PhotoDisplayEntry').exists()).toBe(true);
});
