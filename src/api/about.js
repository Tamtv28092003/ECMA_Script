import instance from "./instance"

export const aboutAll = () => {
    return instance.get(`/about`)
}
export const aboutOne = (id) => {
    return instance.get(`/about/${id}`)
}
export const aboutUpdate = (product) => {
    return instance.put(`/about/${product.id}`, product)
}
export const aboutDelete = (id) => {
    return instance.delete(`/about/${id}`)
}