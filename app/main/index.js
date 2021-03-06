const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path')

let win;
app.on('ready', () => {
    win = new BrowserWindow({
        width: 960,
        height: 540,
        webPreferences: {
            nodeIntegration: true
        }
    });
    if (isDev) {
        win.loadURL('http://localhost:3000');
    } else {
        win.loadFile(path.resolve(__dirname, '../renderer/webstatic/dist/index.html'));
    }
});

