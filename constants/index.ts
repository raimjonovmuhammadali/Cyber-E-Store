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
  img: string;
  isLiked: boolean;
}

export const products: { featured: Product[]; bestseller: Product[]; newArrival: Product[] } = {
  featured: [
    { id: 1, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ', price: 2535, category: 'Featured',  img: 'Iphone 14 pro 1.png', isLiked: false,},
    { id: 2, name: 'Blackmagic Pocket Cinema Camera 6k', price: 2535, category: 'Featured',   img: 'Iphone 14 pro 1 (1).png', isLiked: false,},
    { id: 3, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium  ', price: 2535, category: 'Featured', img: 'Iphone 14 pro 1 (9).png',  isLiked: false,},
    { id: 4, name: 'AirPods Max Silver Starlight Aluminium ', price: 2535, category: 'Featured',   img: 'Iphone 14 pro 1 (8).png', isLiked: false,},
    { id: 5, name: 'Samsung Galaxy Watch6 Classic 47mm Black', price: 2535, category: 'Featured',  img: 'Iphone 14 pro 1 (4).png', isLiked: true,},
    { id: 6, name: 'Galaxy Z Fold5 Unlocked | 256GB | Phantom Black ', price: 2535, category: 'Featured',  img: 'zfold.png',  isLiked: false,},
    { id: 7, name: 'Galaxy Buds FEGraphite', price: 2535, category: 'Featured', img: 'Iphone 14 pro 1 (5).png',  isLiked: false,},
    { id: 8, name: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021 ', price: 2535, category: 'Featured',  img: 'Iphone 14 pro 1 (6).png',  isLiked: false,},
  ],
  bestseller: [
    { id: 9, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured', img: 'Iphone 14 pro 1.png', isLiked: true,},
    { id: 10, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured',  img: 'Iphone 14 pro 1 (1).png', isLiked: false,},
    { id: 11, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured', img: 'Iphone 14 pro 1 (9).png', isLiked: false,},
    { id: 12, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured',  img: 'Iphone 14 pro 1 (8).png', isLiked: false,},
    { id: 13, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured',img: 'Iphone 14 pro 1 (4).png',  isLiked: false,},
    { id: 14, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured', img: 'zfold.png',  isLiked: false,},
    { id: 15, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured', img: 'Iphone 14 pro 1 (5).png', isLiked: false,},
    { id: 16, name: 'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', price: 399, category: 'Featured', img: 'Iphone 14 pro 1 (6).png',  isLiked: false,},
  ],
  newArrival: [
    { id: 17, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ', price: 100, category: 'Featured', img: 'Iphone 14 pro 1.png', isLiked: true,},
    { id: 18, name: 'Blackmagic Pocket Cinema Camera 6k', price: 150, category: 'Featured',  img: 'Iphone 14 pro 1 (1).png', isLiked: false,},
    { id: 19, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ', price: 100, category: 'Featured', img: 'Iphone 14 pro 1 (9).png', isLiked: false,},
    { id: 20, name: 'Blackmagic Pocket Cinema Camera 6k', price: 150, category: 'Featured',  img: 'Iphone 14 pro 1 (8).png', isLiked: false,},
    { id: 21, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ', price: 100, category: 'Featured', img: 'Iphone 14 pro 1 (4).png', isLiked: false,},
    { id: 22, name: 'Blackmagic Pocket Cinema Camera 6k', price: 150, category: 'Featured',  img: 'zfold.png', isLiked: false,},
    { id: 23, name: 'Apple iPhone 14 Pro Max 128GB Deep Purple ', price: 100, category: 'Featured', img: 'Iphone 14 pro 1 (5).png', isLiked: false,},
    { id: 24, name: 'Blackmagic Pocket Cinema Camera 6k', price: 150, category: 'Featured',  img: 'Iphone 14 pro 1 (6).png', isLiked: false,},
  ],
};


// Category interfeysini aniqlash
export interface Producta {
  id: number;
  name: string;
  icon: string;
  price: number;
}

// Kategoriyalar ro'yxatini yaratish
export const producta: Producta[] = [
  { id: 1, name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)', icon: 'Iphone 14 pro 1 (7).png', price: 1437,},
  { id: 2, name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)', icon: 'Iphone 14 pro 1 (8).png', price: 549,},
  { id: 3, name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)', icon: 'Iphone 14 pro 1 (9).png', price: 399,},
  { id: 4, name: 'Apple iPhone 14 Pro 512GB Gold (MQ233)', icon: 'Iphone 14 pro 1 (10).png', price: 1499,},
];