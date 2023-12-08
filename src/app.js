function postMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message.length > 0 && message.length <= 128) {
        const messageBoard = document.getElementById('message-board');

        // Create a new message div
        const newMessage = document.createElement('div');

        // Get the current date and time
        const timestamp = new Date();
        const formattedTimestamp = timestamp.toLocaleString();

        // Set the text content of the new message div to include the message and timestamp
        newMessage.textContent = `${formattedTimestamp}: ${message}`;

        // Insert the new message at the top of the message board
        messageBoard.insertBefore(newMessage, messageBoard.firstChild);

        // Clear the input field after posting
        messageInput.value = '';
    } else {
        alert('Message must be non-empty and at most 128 characters long.');
    }
}