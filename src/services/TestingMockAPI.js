import EventService from "./EventService.js";

const comment = {
  id: "c3",
  commenter: "FakePOst",
  comment: "FakePost",
  like: 14,
  dislike: 1,
  hearted: true,
  viewReply: false,
  commentChild: []
};

EventService.postCommentToVideoId(1, comment);
