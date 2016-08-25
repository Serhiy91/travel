const { describe, it } = global;
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Test from '../test-module.jsx';

describe('test-module.components.test-module', () => {
  it('should contain text', () => {
    const el = shallow(<Test />);
    expect(el.find('div').text()).to.be.match(/Hello World!/);
  });
});
