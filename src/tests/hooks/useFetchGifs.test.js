import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Testing custom hook useFetchGifs', () => {
  test('should return initial state', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('dragon ball')
    );
    const { data: images, loading } = result.current;
    await waitForNextUpdate({ timeout: 2000 });
    // console.log(images, loading);

    expect(images).toEqual([]);
    expect(loading).toBe(true);
  });

  test('should return a list of elements', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs('dragon ball')
    );
    await waitForNextUpdate({ timeout: 2000 });
    const { data: images, loading } = result.current;
    // console.log(images, loading);
    expect(images.length).toBe(10);
    expect(loading).toBe(false);
  });
});
