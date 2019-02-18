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
import FlagModal from '../client/src/components/FlagModal';

configure({
  adapter: new Adapter(),
});

describe('Flag Modal', () => {
  it('should not initially render Flag Modal to DOM', () => {
    expect(shallow(<FlagModal />).find('FlagInnerModal').exists()).toBe(false);
  });

  it('should simulate a click to exit modal', () => {
    expect(shallow(<FlagModal />).simulate('click'));
  });
});
