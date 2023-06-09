import instance from "./instance"

export const signin = (email, password) => {
    return instance.get(`/user`, { email, password })
}
export const signup = (user) => {
    return instance.post(`/user`, user)
}