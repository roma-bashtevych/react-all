
import './App.css';
import {useEffect, useState} from "react";
import {getUsers, getUser} from "./services/API";
import Users from "./components/users/Users";
import UserDetails from "./components/userdetails/UserDetails";

export default function App() {

    let [users, setUsers] = useState([]);

    let [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
      getUsers().then(response => {
        setUsers(response.data)
            })
  }, [])

    function selectUser(id){
             getUser(id).then(({data}) => {
                 setUserDetails(data)
                   })
    }

  return (
         <div>
<Users items={users} selectUser={selectUser}/>
             <hr/>
             {
              userDetails &&  <UserDetails item={userDetails}/>
             }
                 </div>
  );
}


