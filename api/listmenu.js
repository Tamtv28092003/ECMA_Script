import intance from "./config";

const getmenulist = ()=>{
    return intance.get(`/menulist`)
}

const getprofile =()=>{
    return intance.get(`/profile`)
}

export {getmenulist,getprofile}