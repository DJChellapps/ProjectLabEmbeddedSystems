const {BrowserWindow, app} = require("electron");
const dotenv = require("dotenv");
const path = require("path");

//Configure the environment variables
dotenv.config();

/* Global Variables */
let MainWindow;

app.whenReady().then(() => {
    MainWindow = new BrowserWindow({
        width: 640,
        height: 480,
        show: true
    });

    if(process.env.NODE_ENV === "development") MainWindow.loadURL("http://localhost:3000");
    else if(process.env.NODE_ENV === "production") MainWindow.loadFile(path.join(__dirname, "build", "index.html"));

    console.log(`[LogCategory] Started`);
});