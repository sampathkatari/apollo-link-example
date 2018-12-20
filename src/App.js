import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_USERS = gql`
  query {
    users @rest(type: "Users", path: "/users") {
      id
      name
      age
    }
  }
`

const App = () => (
  <Query query={GET_USERS}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;
      return (
        <ul>
          {
            data.users.map(user => {
              return (
                <li key={user.id}>{user.name} - {user.age}</li>
              )
            })
          }
        </ul>
      )
    }}
  </Query>
)

export default App;