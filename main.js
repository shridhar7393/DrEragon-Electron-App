const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    icon: __dirname + '/img/icon.icns',
  })
//   console.log(win);

  win.loadFile('index.html')
}

const menu = new Menu()
menu.append(new MenuItem({
  label: 'Electron',
  submenu: [{
    role: 'help',
    accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
    click: () => { console.log('Electron rocks!') }
  }]
}))

Menu.setApplicationMenu(menu)

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})