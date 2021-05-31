import React, { Component } from 'react';


interface User{
    name: string;
    age: number;
}

interface UserProps{
    users: User[]
}

interface UserState {
   name: string;
   user: User | undefined;
}

class UserSearch extends Component <UserProps>{

    state: UserState = {
        name: '',
        user: undefined

    }

    render() {
        return (
            <div>
                state = 
            </div>
        );
    }
}

export default UserSearch;