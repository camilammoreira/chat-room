const chatList = document.querySelector("ul");

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", "camila");

// get chats and render
chatroom.getChats(data => chatUI.render(data));