import { gql } from "@apollo/client";

export const FETCH_BOARDS_AND_BOARDS_OF_BEST = gql`
  query {
    fetchBoards {
      _id
      writer
      title
      contents
      likeCount
      images
      user {
        _id
        name
        picture
      }
      createdAt
    }
    fetchBoardsOfTheBest {
      _id
      writer
      title
      likeCount
      images
      createdAt
      user {
        _id
        name
        picture
      }
    }
  }
`;
