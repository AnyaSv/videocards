import Ph1 from '@/assets/Ph1.jpg';
import Ph2 from '@/assets/Ph2.jpg';
import Ph3 from '@/assets/Ph3.jpg';
import Ph4 from '@/assets/Ph4.jpg';
import Ph5 from '@/assets/Ph5.jpg';
import Ph6 from '@/assets/Ph6.jpg';

const videocards = [
  {
    id: 1,
    name: 'Супер видеокарта',
    manufacturer: 'Xiaomi',
    ram: {
      value: 2,
      unit: 'Gb',
    },
    color: '0000ff',
    cost: 100,
    img: Ph1
  },
  {
    id: 2,
    name: 'Вторая видеокарта',
    manufacturer: 'ASUS',
    ram: {
      value: 512,
      unit: 'Mb',
    },
    color: 'ff0000',
    cost: 25,
    img: Ph2
  },
  {
    id: 3,
    name: 'Просто видеокарта',
    manufacturer: 'LG',
    ram: {
      value: 1024,
      unit: 'Kb',
    },
    color: '0000ff',
    cost: 10,
    img: Ph3
  },
  {
    id: 4,
    name: 'Геймерская видеокарта',
    manufacturer: 'NVIDIA',
    ram: {
      value: 8,
      unit: 'Gb',
    },
    color: '00ff00',
    cost: 300,
    img: Ph4
  },
  {
    id: 5,
    name: 'Мощная видеокарта',
    manufacturer: 'AMD',
    ram: {
      value: 6,
      unit: 'Gb',
    },
    color: 'ffff00',
    cost: 250,
    img: Ph5
  },
  {
    id: 6,
    name: 'Эконом видеокарта',
    manufacturer: 'Intel',
    ram: {
      value: 1,
      unit: 'Gb',
    },
    color: 'ff00ff',
    cost: 80,
    img: Ph6
  }
];

export { videocards };