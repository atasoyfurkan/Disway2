import http from "../../services/httpService";
import { apiUrl } from "../../config.json";
import { updateUser, stateData, setVoteCard } from "./index";

const apiEndpoint = apiUrl + "/comments";

export const addComment = (comment, voteCardId) => {
  return async (dispatch, getState) => {
    const { data: newComment } = await http.post(apiEndpoint, comment);
    newComment.owner = comment.owner;

    const data = [...getState().voteCard.data];
    const { comments } = data.find(element => element._id === voteCardId);

    comments.push(newComment);

    dispatch(stateData(data));

    let user = { ...getState().user.data };
    user.numberOfComment = user.numberOfComment + 1;
    dispatch(updateUser(user));
  };
};

export const addCommentForOneVoteCard = comment => {
  return async (dispatch, getState) => {
    const { data: newComment } = await http.post(apiEndpoint, comment);
    newComment.owner = comment.owner;

    const data = { ...getState().voteCard.voteCard };

    data.comments.push(newComment);

    dispatch(setVoteCard(data));

    let user = { ...getState().user.data };
    user.numberOfComment = user.numberOfComment + 1;
    dispatch(updateUser(user));
  };
};

export const upvoteComment = (comment, voteCardId) => {
  return (dispatch, getState) => {
    const voteCards = [...getState().voteCard.data];
    const data = voteCards.find(element => element._id === voteCardId);

    handleUpvote(comment, data, getState());

    dispatch(stateData(voteCards));
  };
};

export const upvoteCommentForOneVoteCard = comment => {
  return (dispatch, getState) => {
    const data = { ...getState().voteCard.voteCard };

    handleUpvote(comment, data, getState());

    dispatch(setVoteCard(data));
  };
};

export const deleteComment = (comment, voteCardId) => {
  return async (dispatch, getState) => {
    const voteCards = [...getState().voteCard.data];
    const data = voteCards.find(element => element._id === voteCardId);

    await handleDelete(comment, data);
    dispatch(setVoteCard(data));
  };
};

export const deleteCommentForOneVoteCard = comment => {
  return async (dispatch, getState) => {
    const data = { ...getState().voteCard.voteCard };

    await handleDelete(comment, data);
    dispatch(setVoteCard(data));
  };
};

export const handleDelete = async (comment, data) => {
  let index = -1;
  data.comments.forEach((element, i) => {
    if (element._id === comment._id) index = i;
  });

  data.comments.splice(index, 1);

  await http.delete(apiEndpoint + "/" + comment._id, comment);
};

const handleUpvote = (comment, data, state) => {
  let index = -1;
  data.comments.forEach((element, i) => {
    if (element._id === comment._id) index = i;
  });

  const indexOfUser = data.comments[index].upvotedUsers.indexOf(
    state.user.data._id
  );
  if (indexOfUser !== -1) {
    data.comments[index].upvote--;
    data.comments[index].upvotedUsers.splice(indexOfUser);
  } else {
    data.comments[index].upvote++;
    data.comments[index].upvotedUsers.push(state.user.data._id);
  }
};

export const updateComment = comment => {
  return async dispatch => {
    await http.put(apiEndpoint + "/" + comment._id, comment);
  };
};
