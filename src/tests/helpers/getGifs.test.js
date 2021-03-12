import { getGifs } from '../../helpers/getGifs';

describe('Test on getGifs custom hook', () => {
  test('shoould return 10 elements', async () => {
    const gifs = await getGifs('goku');

    // console.log(gifs.length);
    expect(gifs.length).toBe(10);
  });
  test('shoould return empty elements', async () => {
    const gifs = await getGifs('');

    // console.log(gifs.length);
    expect(gifs.length).toBe(0);
  });
});
