const SortFunc = [
   {
      label: '↑↑coast↑↑',
      func: (a,b) => (a.cost >= b.cost) ? -1 : 0,
   },
   {
      label: '↓↓coast↓↓',
      func: (a,b) => (a.cost < b.cost) ? -1 : 0,
   },
   {
      label: '↑↑ram↑↑',
      func: (a,b) => (a.ram.value < b.ram.value) ? -1 : 0,
   },
   {
      label: '↓↓ram↓↓',
      func: (a,b) => (a.ram.value >= b.ram.value) ? -1 : 0,
   },
   
]

export {SortFunc}