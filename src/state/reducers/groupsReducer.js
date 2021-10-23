const groups = [
  {
    id: "1",
    participants: ["john1", "jane1"],
    name: ["john1", "jane1"],
    messages: [
      {
        id: "1",
        message: "heyyyy",
        sentBy: "john",
        timeSent: "",
      },
      {
        id: "2",
        message: "hiiiii",
        sentBy: "jane1",
        timeSent: "",
      },
      {
        id: "3",
        message: "how are you doing",
        sentBy: "john1",
        timeSent: "",
      },
      {
        id: "4",
        message: "fine you",
        sentBy: "jane1",
        timeSent: "",
      },
    ],
  },
  {
    id: "2",
    participants: ["john1", "jane2"],
    name: ["john1", "jane2"],
    messages: [
      {
        id: "1",
        message: "holla",
        sentBy: "john1",
        timeSent: "",
      },
      {
        id: "2",
        message: "hi",
        sentBy: "jane2",
        timeSent: "",
      },
      {
        id: "3",
        message: "how are you doing",
        sentBy: "jane2",
        timeSent: "",
      },
      {
        id: "4",
        message: "fine you",
        sentBy: "john2",
        timeSent: "",
      },
    ],
  },
  {
    id: "3",
    participants: ["john1", "jane3"],
    name: ["john3", "jane3"],
    messages: [
      {
        id: "1",
        message: "hey there",
        sentBy: "jane3",
        timeSent: "",
      },
      {
        id: "2",
        message: "hi",
        sentBy: "john1",
        timeSent: "",
      },
      {
        id: "3",
        message: "how are you doing",
        sentBy: "jane3",
        timeSent: "",
      },
      {
        id: "4",
        message: "fine you",
        sentBy: "john1",
        timeSent: "",
      },
    ],
  },
  {
    id: "4",
    participants: ["john1", "jane4"],
    name: ["john1", "jane4"],
    messages: [
      {
        id: "1",
        message: "yoh",
        sentBy: "john1",
        timeSent: "",
      },
      {
        id: "2",
        message: "hi",
        sentBy: "jane4",
        timeSent: "",
      },
      {
        id: "3",
        message: "how are you doing",
        sentBy: "john1",
        timeSent: "",
      },
      {
        id: "4",
        message: "fine you",
        sentBy: "jane1",
        timeSent: "",
      },
    ],
  },
];

const groupsReducer = (state = groups, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default groupsReducer;
