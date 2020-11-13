import gql from 'graphql-tag';

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                completedModules {
                    _id
                    title
                    overview
                    releaseDate
                }
                friends {
                  _id
                  username
                  email
                }
             }
         }
    }
`;

export const ADD_FRIEND = gql`
    mutation addFriend($userId: ID!, $friendId: ID!) {
      addFriend(userId: $userId, friendId: $friendId) {
        userName
        friends {
            _id
        }
      }
    }
`;

export const COMPLETED_MODULE = gql`
    mutation completedModule($userId: ID!, $moduleId: ID!) {
        completedModule(userId: $userId, moduleId: $moduleId) {
            userName
            completedModules {
                _id
                title
                overview
            }
        }
    }
`;
