const accounts = [
  {
    id: "1",
    username: "John Doe 1",
    userID: "john1",
    userImg:
      "https://images.unsplash.com/photo-1542727313-4f3e99aa2568?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    userBio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt\n" +
      "          eligendi excepturi isi porro sapiente!",
    groupsList: ["asfggtee", "hgnahe"],
    userContact: [
      {
        id: "1",
        contact: "example@email.com",
        logo: "faContact",
      },
      {
        id: "1",
        contact: "example@email.com",
        logo: "faContact",
      },
      {
        id: "1",
        contact: "example@email.com",
        logo: "faContact",
      },
    ],
    created_At: "Thur, 23 June, 2021",
    last_seen: "Mon, 23 September, 2021",
  },
  {
    id: "2",
    username: "Jane Doe 1",
    userID: "jane1",
    userImg:
      "https://images.unsplash.com/photo-1529123202249-4f6224196c9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    userBio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt\n" +
      "          eligendi excepturi isi porro sapiente!",
    groupsList: ["asfggtee", "hgnahe"],
    userContact: [
      {
        id: "1",
        contact: "example@email.com",
        logo: "faContact",
      },
      {
        id: "1",
        contact: "example@email.com",
        logo: "faContact",
      },
      {
        id: "1",
        contact: "example@email.com",
        logo: "faContact",
      },
    ],
    created_At: "Thur, 23 June, 2021",
    last_seen: "Mon, 23 September, 2021",
  },
  {
    id: "3",
    username: "Jane Doe 2",
    userID: "jane2",
    userImg:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    userBio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab deserunt\n" +
      "          eligendi excepturi isi porro sapiente!",
    groupsList: ["asfggtee", "hgnahe"],
    userContact: [
      {
        id: "1",
        contact: "example@email.com",
        logo: "faContact",
      },
      {
        id: "1",
        contact: "example@email.com",
        logo: "faContact",
      },
      {
        id: "1",
        contact: "example@email.com",
        logo: "faContact",
      },
    ],
    created_At: "Thur, 23 June, 2021",
    last_seen: "Mon, 23 September, 2021",
  },
];

const accountReducer = (state = accounts, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default accountReducer;
