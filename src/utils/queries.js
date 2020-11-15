import gql from 'graphql-tag';

  export const GET_USER_ME = gql`
  {
    user {
      _id
      username
      email
      friends {
        _id
      }
      completedModules {
        _id
      }
    }
  }
  `;
  
  export const GET_ALL_MODULES = gql`
  {
    modules {
      _id
      moduleNumber
      moduleTitle
      moduleOverview
      modulePoster
      moduleCategory
      moduleVideo {
        _id
      }
      moduleLesson {
        _id
        lessonNumber
        lessonTitle
        lessonSection {
          _id
          sectionNumber
          sectionParagraph {
            _id
          }
        }
      }
      }
    }
  `;

  export const GET_ALL_LESSONS = gql`
  {
    lessons {
      _id
      lessonTitle
      lessonTime
      lessonOverview
      lessonReleaseDate
      lessonNumber
      lessonSection {
        _id
        sectionOverview
        sectionTitle
        sectionReleaseDate
        sectionParagraph {
          _id
          paragraphRef
          paragraphNumber
          paragraphContent
          paragraphImage
          paragraphReleaseDate
          paragraphVideo {
            _id
          }
        }
      }
    }
  }
  `;

  export const GET_SELECTED_MODULE = gql` 
  query getModule($module: ID) {
      _id
      moduleNumber
      moduleTitle
      moduleOverview
      moduleReleaseDate
      modulePoster
      moduleCategory
      moduleVideo {
        _id
        videoNumber
        videoTitle
        videoContent
        videoOverview
        videoReleaseDate
      }
      moduleLesson {
        _id
        lessonNumber
        lessonTitle
        lessonOverview
        lessonReleaseDate
        lessonTime
        lessonSection {
          _id
        }
      }
    }
  
  `;

  export const GET_SELECTED_LESSON = gql` 
  query getLesson($lesson: ID) {
      _id
      lessonTitle
      lessonOverview
      lessonReleaseDate
      lessonTime
      lessonSection {
        _id
        sectionNumber
        sectionTitle
        sectionOverview
        sectionReleaseDate
        sectionParagraph {
          _id
        }
      }
    }
  
  `;

  export const GET_SELECTED_SECTION = gql` 
  query getSection($section: ID) {
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
  
  `;

  