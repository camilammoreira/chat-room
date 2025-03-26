const chatList = document.querySelector("ul");
const chatForm = document.querySelector(".chat-form");
const nameForm = document.querySelector(".name-form");

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", "camila");

// user add message
chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newChat = chatForm.message.value.trim();
    chatroom.addChat(newChat)
        .then(() => chatForm.reset())
        .catch(err => console.log(err));
});

// get chats and render
chatroom.getChats(data => chatUI.render(data));