// clear the list of chats when the room changes

class ChatUI {
    constructor(list) {
        this.list = list
    }
    // render chat templates to the DOM
    render(chat) {
        let html = `
            <li class="list-group-item">
                <span><strong>${chat.username}</strong></span>
                <span>${chat.message}</span>
                <p class="text-muted"><small>${chat.created_at.toDate()}</small></p>
            </li>
        `;
        this.list.innerHTML += html;
    }
}

const list = document.querySelector("ul");