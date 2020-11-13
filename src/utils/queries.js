// Placeholder code ONLY
import gql from 'graphql-tag';

export const GET_USER = gql`
  {
    me {
      _id
      username
      email
      friends {
        _id
      }
      likedMovies{
        _id
        externalMovieId
        rating
        voteCount
        title
        overview
        releaseDate
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
      dislikedMovies{
        _id
        externalMovieId
        rating
        voteCount
        title
        overview
        releaseDate
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
  }
`;

query{
  user(email:"", password:""){
    _id
    userName
  }
}

query{
  modules{
    _id
    moduleNumber
    moduleTitle
    moduleOverview
    modulePoster
    moduleCategory
    moduleVideo{
      _id
    }
    moduleLesson{
      _id
      lessonNumber
      lessonTitle
      lessonSection{
        _id
        sectionNumber
        sectionReleaseDate
        sectionParagraph{
          _id
        }
        }
      }
    }
  }
   
  query{
    module(_id:"5fae864dddcd990794f9e2f4"){
      _id
      moduleNumber
      moduleTitle
      moduleOverview
      moduleReleaseDate
      modulePoster
      moduleCategory
      moduleVideo{
        _id
        videoNumber
        videoTitle
        videoContent
        videoOverview
        videoReleaseDate
      }
      moduleLesson{
        _id
        lessonNumber
        lessonTitle
        lessonOverview
        lessonReleaseDate
        lessonTime
        lessonSection{
          _id
        }
      }
    }
  }

  query{
    lessons{
      _id
      lessonTitle
      lessonTime
      lessonOverview
      lessonReleaseDate
      lessonNumber
      lessonSection{
        _id
        sectionOverview
        sectionTitle
        sectionReleaseDate
        sectionParagraph{
          _id
          paragraphRef
          paragraphNumber
          paragraphContent
          paragraphImage
          paragraphReleaseDate
          paragraphVideo{
            _id
          }
        }
      }
    }
  }

  query{
    lesson(_id:"5fae864dddcd990794f9e310"){
      _id
      lessonTitle
      lessonOverview
      lessonReleaseDate
      lessonTime
      lessonSection{
        _id
        sectionNumber
        sectionTitle
        sectionOverview
        sectionReleaseDate
        sectionParagraph{
          _id
        }
      }
    }
  }

  query{
    lesson(_id:""){
      _id
      lessonNumber
      lessonTitle
      lessonOverview
      lessonReleaseDate
      lessonTime
      lessonSection{
        _id
        sectionNumber
        sectionTitle
        sectionOverview
        sectionReleaseDate
        sectionParagraph{
          _id
        }
      }
    }
  }

  query{
    section(_id:"5fae864dddcd990794f9e39a"){
      _id
      sectionTitle
      sectionNumber
      sectionReleaseDate
      sectionOverview
      sectionParagraph{
        _id
        paragraphContent
        paragraphImage
        paragraphReleaseDate
        paragraphVideo{
          _id
        }
      }
    }
  }

  query {
    paragraphs {
      _id
      paragraphRef
      paragraphNumber
      paragraphContent
      paragraphImage {
        _id
        imageNumber
        imageTitle
        imageContent
        imageOverview
        imageReleaseDate
      }
      paragraphReleaseDate
      paragraphVideo {
        _id
        videoTitle
        videoNumber
        videoContent
        videoOverview
        videoReleaseDate
      }
    }
  }
  