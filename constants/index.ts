// Category interfeysini aniqlash
export interface Category {
  id: number;
  name: string;
  icon: string;
}

// Kategoriyalar ro'yxatini yaratish
export const categories: Category[] = [
  { id: 1, name: 'Phones', icon: 'Phones.png'},
  { id: 2, name: 'Smart Watches', icon: 'Smart Watches.png'},
  { id: 3, name: 'Cameras', icon: 'Cameras.png'},
  { id: 4, name: 'Headphones', icon: 'Headphones.png'},
  { id: 5, name: 'Computers', icon: 'Computers.png'},
  { id: 6, name: 'Gaming', icon: 'Gaming.png'},
];


export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const products: { featured: Product[]; bestseller: Product[]; newArrival: Product[] } = {
  featured: [
    { id: 1, name: 'Blackmagic Pocket Cinema Camera 6k', price: 2535, category: 'Featured', },
    { id: 2, name: 'Blackmagic Pocket Cinema Camera 6k', price: 2535, category: 'Featured',  },
    { id: 3, name: 'Blackmagic Pocket Cinema Camera 6k', price: 2535, category: 'Featured', },
    { id: 4, name: 'Blackmagic Pocket Cinema Camera 6k', price: 2535, category: 'Featured',  },
    { id: 5, name: 'Blackmagic Pocket Cinema Camera 6k', price: 2535, category: 'Featured', },
    { id: 6, name: 'Blackmagic Pocket Cinema Camera 6k', price: 2535, category: 'Featured',  },
    { id: 7, name: 'Blackmagic Pocket Cinema Camera 6k', price: 2535, category: 'Featured', },
    { id: 8, name: 'Blackmagic Pocket Cinema Camera 6k', price: 2535, category: 'Featured',  },
  ],
  bestseller: [
    { id: 1, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured', },
    { id: 2, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured',  },
    { id: 3, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured', },
    { id: 4, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured',  },
    { id: 5, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured', },
    { id: 6, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured',  },
    { id: 7, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured', },
    { id: 8, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured',  },
  ],
  newArrival: [
    { id: 1, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ', price: 100, category: 'Featured', },
    { id: 2, name: 'Blackmagic Pocket Cinema Camera 6k', price: 150, category: 'Featured',  },
    { id: 3, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ', price: 100, category: 'Featured', },
    { id: 4, name: 'Blackmagic Pocket Cinema Camera 6k', price: 150, category: 'Featured',  },
    { id: 5, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ', price: 100, category: 'Featured', },
    { id: 6, name: 'Blackmagic Pocket Cinema Camera 6k', price: 150, category: 'Featured',  },
    { id: 7, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ', price: 100, category: 'Featured', },
    { id: 8, name: 'Blackmagic Pocket Cinema Camera 6k', price: 150, category: 'Featured',  },
  ],
};
