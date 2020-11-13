// Placeholder code ONLY
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
                likedMovies {
                    _id
                    externalMovieId
                    title
                    overview
                    releaseDate
                    rating
                    voteCount
                    poster
                    trailer
                }
                dislikedMovies{
                    _id
                    externalMovieId
                    title
                    overview
                    releaseDate
                    rating
                    voteCount
                    poster
                    trailer
                }
            }
        }
    }
`;

export const ADD_MOVIE = gql`
    mutation addMovie($input: MovieInput!) {
        addMovie(input:$input) {
            _id
            externalMovieId
            title
            overview
            releaseDate
            rating
            voteCount
            poster
            trailer
            likedUsers {
                _id
                username
            }
            dislikedUsers {
                _id
                username
            }
        }
    }
`

export const LIKE_MOVIE = gql`
    mutation likeMovie($movieId: ID!) {
        likeMovie(movieId: $movieId) {
            likedMovies {
                _id
                externalMovieId
                title
                overview
                releaseDate
                rating
                voteCount
                poster
                trailer
            }
            dislikedMovies{
                _id
                externalMovieId
                title
                overview
                releaseDate
                rating
                voteCount
                poster
                trailer
            }
        }
    }
`;

export const DISLIKE_MOVIE = gql`
    mutation dislikeMovie($movieId: ID!) {
        dislikeMovie(movieId: $movieId) {
            likedMovies {
                _id
                externalMovieId
                title
                overview
                releaseDate
                rating
                voteCount
                poster
                trailer
            }
            dislikedMovies{
                _id
                externalMovieId
                title
                overview
                releaseDate
                rating
                voteCount
                poster
                trailer
            }
        }
    }
`;

mutation{
    updateModule(_id: "5fae8a37320a2e09211f54df",completedModules:"5fae864dddcd990794f9e2f2"){
    _id
      completedModules{
        _id
      }
    }
  }

  mutation{
    addFriend(_id:"5fae864dddcd990794f9e2ee",friendId:"5faeb7798030b61979cd9474"){
      userName
      friends{
        _id
      
      }
    }
  }

  mutation{
    updateUser{
      _id
    }
  }

  mutation{
    login(email:"saturday@14.com",password:"saturday"){
      user{
        _id
        email
        friends{
          _id
        }
      }
    }
  }

  mutation{
    addUser(userName:"saturday14",email:"saturday@14.com",password:"saturday"){
      token
      user{
        _id
      }
    }
  }