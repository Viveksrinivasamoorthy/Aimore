const socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => {
    console.log("Connected to VS Code server");
};

socket.onmessage = event => {

    console.log("New DOM code received");

    chrome.runtime.sendMessage({
        type: "EXECUTE_DOM_CODE",
        code: event.data
    });

};

socket.onerror = error => {
    console.error("WebSocket error:", error);
};

socket.onclose = () => {
    console.log("Disconnected from VS Code server");
};