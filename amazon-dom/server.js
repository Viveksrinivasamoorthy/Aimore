const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");

const PORT = 8080;

const filePath = path.join(__dirname, "Class-1.js");

const wss = new WebSocket.Server({
    port: PORT
});

console.log(`WebSocket server running on ws://localhost:${PORT}`);

wss.on("connection", socket => {

    console.log("Extension connected");

    const code = fs.readFileSync(filePath, "utf8");

    socket.send(code);
});


fs.watch(filePath, eventType => {

    if (eventType === "change") {

        console.log("dom-code.js changed");

        setTimeout(() => {

            const code = fs.readFileSync(filePath, "utf8");

            wss.clients.forEach(client => {

                if (client.readyState === WebSocket.OPEN) {
                    client.send(code);
                }

            });

        }, 100);

    }

});