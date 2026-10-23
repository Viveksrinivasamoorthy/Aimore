const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");

const PORT = 8080;

const filePath = path.join(__dirname, "DOM-Class1.js");

const wss = new WebSocket.Server({
    port: PORT
});

console.log(`WebSocket server running on ws://localhost:${PORT}`);

// Browser extension connects here
wss.on("connection", socket => {

    console.log("Extension connected");

    // Send current dom-code.js immediately
    const code = fs.readFileSync(filePath, "utf8");

    socket.send(code);
});

// Watch dom-code.js
fs.watch(filePath, eventType => {

    if (eventType === "change") {

        console.log("DOM-Class1.js changed");

        setTimeout(() => {

            const code = fs.readFileSync(filePath, "utf8");

            wss.clients.forEach(client => {

                if (client.readyState === WebSocket.OPEN) {

                    client.send(code);

                    console.log("Updated code sent to extension");
                }
            });

        }, 100);

    }

});