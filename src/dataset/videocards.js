import Ph1 from '@/assets/Ph1.jpg';
import Ph2 from '@/assets/Ph2.jpg';
import Ph3 from '@/assets/Ph3.jpg';

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
    id: 1,
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

];

export { videocards };
