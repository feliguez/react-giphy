import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Test <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('should be equal to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should change input text', () => {
    const input = wrapper.find('input');
    const value = 'hola mundo';
    input.simulate('change', { target: { value } });
    // console.log(input.props());

    expect(wrapper.find('p').text().trim()).toBe(value);
  });
  test('should NOT submit data', () => {
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    // console.log(input.props());

    expect(setCategories).not.toHaveBeenCalled();
  });
  test('should call setCategories and clean input text', () => {
    const value = 'hola mundo';

    wrapper.find('input').simulate('change', { target: { value } });
    // console.log(wrapper.find('input').props());
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    // console.log(wrapper.find('input').props());

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').props().value).toBe('');
  });
});
