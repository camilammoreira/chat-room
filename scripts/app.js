const chatList = document.querySelector("ul");
const chatForm = document.querySelector(".chat-form");
const nameForm = document.querySelector(".name-form");
const nameFeedback = document.querySelector(".name-feedback");
const room = document.querySelector(".chat-rooms")

// send new chat
chatForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newChat = chatForm.message.value.trim();

    chatroom.addChat(newChat)
        .then(() => {
            chatForm.reset();
        })
        .catch(err => console.log(err));
});

// update name
nameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newName = nameForm.name.value.trim();

    if (newName !== chatroom.username) {
        chatroom.updateName(newName);

        nameFeedback.innerHTML = `Your name was updated to <em>${newName}</em>`;
        setTimeout(() => nameFeedback.innerHTML = "", 3000);
        nameForm.name.style.color = "gray";
    } else {
        nameFeedback.innerHTML = `There's nothing to chage here`;
        setTimeout(() => nameFeedback.innerHTML = "", 3000);
    }

})

// update room
room.addEventListener("click", (e) => {
    if (e.target.tagName === "INPUT") {
        chatUI.clear();
        chatroom.updateRoom(e.target.id);
        chatroom.getChats(chat => chatUI.render(chat));
    }
})

// class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("general", username);

// get chats and render
chatroom.getChats(chat => chatUI.render(chat));

// check if name is updated in local storage
const username = localStorage.username ? localStorage.username : "anon";

// preset name input
nameForm.name.value = username;

// warn unsaved name
nameForm.addEventListener("keyup", () => {
    nameForm.name.style.color = "black";
    nameForm.save.classList.remove("disabled");
})