import React,{createContext, useContext, useState, useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'


const MainContext = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState([]);  

    const [patientRecord, setPatientRecord] = useState([]); //patient records
    const [adminData, setAdminData] = useState([]); //list of admin accounts
    const [doctorData, setDoctorData] = useState([]); //list of doctor accounts
    const [doctorSched, setDoctorSched] = useState([]); //list of doctor schedules
    const userInfo =  JSON.parse(localStorage.getItem("creds"));

    useEffect(() => {
          
        setUser(userInfo);
        // if(!checkToken){
        //     return navigate("/login", {replace: true});
        // }
            
    },[]);

  return (
    <MainContext.Provider value={{
      user, setUser,
      patientRecord, setPatientRecord,
      adminData, setAdminData,
      doctorData, setDoctorData,
      doctorSched, setDoctorSched
    }}>
        {children}
    </MainContext.Provider>
  )
}

export const MyContext = () => {
    return useContext(MainContext);
}

export default ContextProvider