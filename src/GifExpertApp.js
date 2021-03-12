import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ categoryList = [] }) => {
  const [categories, setCategories] = useState(categoryList);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
