import { manufacturers } from '@/dataset'

const FindFunc = (item, query) => {
   const lowerCaseQuery = query.toLowerCase();
   const manufacturer = manufacturers.find(man => man.id === item.manufacturer)?.name.toLowerCase() || '';

   return item.name.toLowerCase().includes(lowerCaseQuery) || manufacturer.includes(lowerCaseQuery);
}

export { FindFunc }
