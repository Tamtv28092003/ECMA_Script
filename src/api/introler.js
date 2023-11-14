import instance from "./instance"

export const introlAll = () => {
    return instance.get(`/intrilers`)
}
export const introlOne = (id) => {
    return instance.get(`/intrilers/${id}`)
}
export const introlUpdate = (product) => {
    return instance.put(`/intrilers/${product.id}`, product)
}
export const introlDelete = (id) => {
    return instance.delete(`/intrilers/${id}`)
}