// import {handleModalOpen, handleSelectModalProduct} from './store/actions/SomeAction';
export const api = `https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&json=true&action=process&sort_by=unique_scans_n&page_size=20&search_terms=`
// export const api1 = `https://world.openfoodfacts.org/cgi/search.pl?`;
export const criterion = [
  { '': 'choose a criterion' },
  { 'brands': 'brands' },
  { 'categories': 'categories' },
  { 'packaging': 'packaging' },
  { 'labels': 'labels' },
  { 'origins_of_ingredients': 'origins of ingredients' },
  { 'manufacturing_places': 'manufacturing or processing places' },
  { 'packager_codes': 'packager codes' },
  { 'purchase_places': 'purchase places' },
  { 'stores': 'stores' },
  { 'countries': 'countries' },
  { 'ingredients': 'ingredients' },
  { 'additives': 'additives' },
  { 'allergens': 'allergens' },
  { 'traces': 'traces' },
  { 'nutrition_grades': 'Nutrition grades' },
  { 'nova_group': 'NOVA groups' },
  { 'languages': 'languages' },
  { 'contributors': 'contributors' },
  { 'editors': 'editors' },
  { 'states': 'states' }
]
export const nutriments = [
  { '': 'choose a nutriment'},
  {'energy': 'Energy','kJ': ' (kJ)'},
  {'energy': 'Energy', 'kcal': ' (kcal)'},
  {'energy': 'Energy'},
  {'fat': 'Fat'}
]

export const comparements = [
  {'': '...'},
  {'lt': '<'},
  {'lte': '<='},
  {'gt': '>'},
  {'gte': '>='},
  {'eq': '='}
]
export const nova_groups = {
  1: ['img/nova-group-1.png', '1 - Unprocessed or minimally processed foods'],
  2: ['img/nova-group-2.png', '2 - Processed culinary ingredients'],
  3: ['img/nova-group-3.png', '3 - Processed foods'],
  4: ['img/nova-group-4.png', '4 - Ultra-processed food and drink products']
}

export const nutriscore = {
  a: 'img/nutriscore-a.png',
  b: 'img/nutriscore-b.png',
  c: 'img/nutriscore-c.png',
  d: 'img/nutriscore-d.png',
  e: 'img/nutriscore-e.png'
}

export const Capitalize = (str) => {
return str &&`${str[0].toUpperCase()}${str.slice(1)}`
}

export const RemoveUnderscore = (str) => {
  const cleanedStr = str.split('_').join(' ');
  return Capitalize(cleanedStr)
}


// export function  handleProductClick(product){
//   console.log(product)
//   handleModalOpen()
//   handleSelectModalProduct(product)
// }