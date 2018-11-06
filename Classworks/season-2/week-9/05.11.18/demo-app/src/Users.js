import React, { Component } from 'react';

const Users = (props) => {
    return (
        <div>
            {
                data.map(user => (
                    <div key={user.id}>
                        <h2>User Title {user.name}</h2>
                    </div>
                ))
            }
        </div>
    )
}