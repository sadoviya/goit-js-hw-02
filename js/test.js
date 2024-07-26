// function checkStorage(storage, item) {
//   console.log(storage, item);
//   const normItem = item.toLowerCase();
//   console.log(normItem);
//   if (storage.includes(normItem)) {
//     return `${normItem} is available to order!`;
//   }
//   return 'Sorry! We are out of stock!';
// }

// checkStorage(['apple', 'plum', 'pear'], 'plum');
// checkStorage(['apple', 'plum', 'pear'], 'pLuM');
// checkStorage(['apple', 'plum', 'pear'], 'orange');

function getCommonElements(array1, array2) {
  const array3 = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      array3.push(array1[i]);
    }
  }
  return array3;
}

getCommonElements([1, 2, 3], [2, 4]);
