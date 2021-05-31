import { useState } from "react";

const GuestList:React.FC = () =>{

    const [name, setName] = useState('');
    return <div>
          <h3>Guest list</h3>
            <input type="text"/>
            <button>Add Guest</button>
        </div>
}

export default GuestList;