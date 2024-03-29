import { Key } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  routeName: string;
};

const categories: DirectoryCategory[] = [
  {
    id: 1,
    title: "hat",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    routeName: 'shop/hats'
  },
  {
    id: 2,
    title: "jacket",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    routeName: 'shop/jackets'
  },
  {
    id: 3,
    title: "sneaker",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    routeName: 'shop/sneakers'
  },
  {
    id: 4,
    title: "women",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    routeName: 'shop/womens'
  },
  {
    id: 5,
    title: "men",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    routeName: 'shop/mens'
  },
];

const Directory = () => {
  
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
