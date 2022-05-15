import {api} from '~/services/api'

export const UserRequest = {
  getAllProducts: function (categoryName?: string) {
    const result = 
    categoryName ?
      api.get(`/products/category/${categoryName}`)
      :
      api.get('products')
    return result
  },
  getAllCategories: function () {
    const result = api.get('products/categories')
    return result
  },
  getSpecificProduct: function (category: string) {
    const result = api.get(`/products/categories/${category}`)
    return result
  },
}
