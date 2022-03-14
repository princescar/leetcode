/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
  const map = new Map();
  for (let i = 0; i < list1.length; i++)
    map.set(list1[i], i);
  
  let min = Infinity, ans = [];
  for (let i = 0; i < list2.length; i++) {
    const resturant = list2[i];
    if (map.has(resturant)) {
      const index = i + map.get(resturant);
      if (index === min) {
        ans.push(resturant);
      } else if (index < min) {
        ans = [resturant];
        min = index;
      }
    }
  }
  return ans;
};
