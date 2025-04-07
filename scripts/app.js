const htmlTag = document.querySelector("html");
const themeBtn = document.querySelector(".theme");
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

    nameForm.save.classList.add("disabled")

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
const chatroom = new Chatroom("general", localStorage.username);

// get chats and render
chatroom.getChats(chat => chatUI.render(chat));

// preset name input
nameForm.name.value = chatroom.username;

// warn unsaved name
nameForm.addEventListener("keydown", () => {
    nameForm.save.classList.remove("disabled");
    htmlTag.getAttribute("data-bs-theme") === "dark" ? nameForm.name.style.color = "#FFF" : nameForm.name.style.color = "#000";
})

// load theme from local storage
const setTheme = (theme = "light") => {
    htmlTag.setAttribute("data-bs-theme", theme);
}

setTheme(localStorage.theme);

// change theme
themeBtn.addEventListener("click", () => {
    if (htmlTag.getAttribute("data-bs-theme") === "dark") {
        htmlTag.setAttribute("data-bs-theme", "light");
        localStorage.setItem("theme", "light");
    } else {
        htmlTag.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");
    }
})