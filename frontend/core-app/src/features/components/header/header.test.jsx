import React from 'react'; // eslint-disable-line no-unused-vars
import { mount } from 'enzyme';
import HeaderComponent from './header.component.jsx';
import i18n from '../../../../config/i18n';

describe('HeaderComponent', () => {
  let wrapper;
  const openDrawer = jasmine.createSpy('openDrawer');

  beforeEach(() => {
    const component = (
      <HeaderComponent i18n={i18n} title="test" openDrawer={openDrawer} />
    );
    wrapper = mount(component);
  });

  it('should contain menu button', () => {
    expect(wrapper.find('.hamburger').length).toBeTruthy();
  });

  it('should activate a callback on menu button click', () => {
    const menuButton = wrapper.find('.hamburger').first();
    menuButton.simulate('click');
    expect(openDrawer).toHaveBeenCalled();
  });
});
