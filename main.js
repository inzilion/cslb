const { app, BrowserWindow, Menu } = require('electron/main')
const path = require('node:path')
const template = [
    // { role: 'appMenu' }
    {
          label: 'CSLB',
          submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'quit' }
          ]
    },
    // { role: 'fileMenu' }
    {
      label: '사이트',
      submenu: [
        { label: '코드업',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://codeup.kr')
          }
        },
        { label: 'BIKO' },
        { label: 'KOISTUDY' }
      ]
    },
    // { role: 'editMenu' }
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
      ]
    },
    // { role: 'viewMenu' }
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    // { role: 'windowMenu' }
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://electronjs.org')
          }
        }
      ]
    }
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768  
  })
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})