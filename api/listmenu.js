import intance from "./config";
const getlogo = ()=>{
    return intance.get(`/logo`)
}
const getmenulist = ()=>{
    return intance.get(`/menulist`)
}
const getprofile =()=>{
    return intance.get(`/profile`)
}
const getabout =()=>{
    return intance.get(`/about`)
}
const getprojects =()=>{
    return intance.get(`/projects`)
}
const getlogin =()=>{
    return intance.get(`/user`)
}

export {getlogo,getmenulist,getprofile,getabout,getprojects,getlogin}