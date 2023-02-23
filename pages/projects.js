
import { getprojects } from "../api/listmenu"
import header from "../components/header"
import { useEffect, useState } from "../libs"


const projectpage = () => {
  const [data, setdata] = useState([])
    useEffect(() => {
        getprojects()
            .then(({ data }) => setdata(data))
        
    },
    [])
  return `
  ${header()}
 ${data.map((project)=>{
  return`
  <h1>${project.name}</h1>
  `
 })}
   
  }
`
}

export default projectpage