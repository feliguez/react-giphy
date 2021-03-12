import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Test on GifGridItem', () => {
  const title = 'Título';
  const url = 'http://localhost/algo.jpg';
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test('Component should render as its snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Image should be equal from props', () => {
    const img = wrapper.find('img');
    // console.log(img);

    expect(img.prop('alt')).toBe(title);
    expect(img.prop('src')).toBe(url);
  });

  test('Article should have .card as className', () => {
    const card = wrapper.find('article');
    const className = card.prop('className');
    // console.log(card.prop('className'));

    expect(className.includes('card')).toBe(true);
  });
});
