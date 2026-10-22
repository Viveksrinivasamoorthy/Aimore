const socket = new WebSocket("ws://localhost:8080");

socket.onopen = () => {
    console.log("Connected to VS Code server");
};

socket.onmessage = async event => {

    console.log("New DOM code received");

    const code = event.data;

    const tabs = await chrome.tabs.query({
        url: "https://www.amazon.in/*"
    });

    if (tabs.length === 0) {
        console.log("Amazon.in tab not found");
        return;
    }

    const tab = tabs[0];

    console.log("Amazon tab found:", tab.id);

    executeDOMCode(tab.id, code);
};

socket.onerror = error => {
    console.error("WebSocket error:", error);
};

socket.onclose = () => {
    console.log("WebSocket connection closed");
};


async function executeDOMCode(tabId, code) {

    try {

        await chrome.debugger.attach(
            {
                tabId: tabId
            },
            "1.3"
        );

        console.log("Debugger attached");

        const result = await chrome.debugger.sendCommand(
            {
                tabId: tabId
            },
            "Runtime.evaluate",
            {
                expression: code,
                awaitPromise: true,
                returnByValue: true
            }
        );

        console.log("DOM code executed:", result);

        await chrome.debugger.detach({
            tabId: tabId
        });

        console.log("Debugger detached");

    } catch (error) {

        console.error("DOM execution error:", error);

    }
}