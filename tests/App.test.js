import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';

configure({
  adapter: new Adapter(),
});

it('works', () => {
  const wrap = shallow(<App />);

  expect(wrap.text()).toEqual('Top Banner Photo Carousel50 Photos');
});
