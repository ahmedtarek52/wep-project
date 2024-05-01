import { createContext,  useEffect, useState  } from "react";
import axios from 'axios';

export let DataContext = createContext('');
function DataContextProvide(props)
{
    const [brands, setBrands] = useState([]);
    const [organizations, setOrganizations] = useState([]);


    async function getAllData(mediaType,callback) {
       try {
          const {data} = await axios.get(`https://lovely-red-overshirt.cyclic.app/${mediaType}`);
        // console.log(data.result);
          callback(data.result);
       } catch (error) {
          console.log(error);
       }
    }
 
    useEffect(() => {
        getAllData('brands',setBrands);
        getAllData('organizations',setOrganizations);
    }, []);
    return <DataContext.Provider value={{brands , organizations }}>
        {props.children}
    </DataContext.Provider>
}
export default DataContextProvide;