import instance from "./instance"

export const getAll = () => {
    return instance.get(`/products`)
}
export const getOne = (id) => {
    return instance.get(`/products/${id}`)
}
export const getAdd = (product) => {
    return instance.post(`/products`, product)
}
export const getUpdate = (product) => {
    return instance.put(`/products/${product.id}`, product)
}
export const getDelete = (id) => {
    return instance.delete(`/products/${id}`)
}
