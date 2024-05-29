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
        const win = new BrowserWindow({ width: 1024, height: 768 })
        win.loadURL('https://codeup.kr')          }
      },
      { label: 'BIKO',
        click: async () => {
        const win = new BrowserWindow({ width: 1024, height: 768 })
        win.loadURL('https://biko.kr')          }
        },
      { label: 'KOISTUDY',
        click: async () => {
        const win = new BrowserWindow({ width: 1024, height: 768 })
        win.loadURL('http://koistudy.net')          }
      }
    ]
  },
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