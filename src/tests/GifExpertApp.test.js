import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Testing <GifExpertApp/>', () => {
  const wrapper = shallow(<GifExpertApp />);

  test('should match to snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should show a category list', () => {
    const categories = ['goku', 'marvel'];
    const wrapper = shallow(<GifExpertApp categoryList={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  });
});
