import { useState } from "react"

const users = [
    {name: 'sarah', age: 20},
    {name: 'Karim', age: 50},
    {name: 'Rahim', age: 26}

]


const UserSearch: React.FC = () => {

    const [name, setName] = useState('')
    const [user, setUser] = useState<{name:string, age: number} | undefined>();


    const onClick = () =>{
        const foundUser = users.find((user) =>{
            return user.name === name;
    
        });
    
        setUser(foundUser)
    }
    

  return <div>
      user search <br/>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <button onClick= {onClick}>Find user</button>

      <div>
          {user && user.name}
          {user && user.age}
      </div>
  </div>
}


export default UserSearch;