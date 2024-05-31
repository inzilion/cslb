const { app, BrowserWindow, Menu } = require('electron/main')
const path = require('node:path')
const template = [
  {
    label: 'CSLB',
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'quit' }
    ]
  },
  {
    label: 'New',
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
        { label: '플레이봇',
        click: async () => {
        const win = new BrowserWindow({ width: 1024, height: 768 })
        win.loadURL('http://playbot.spaceii.com')          }
        },      
        { label: 'KOISTUDY',
        click: async () => {
        const win = new BrowserWindow({ width: 1024, height: 768 })
        win.loadURL('http://koistudy.net')          }
      }
    ]
  },
  {
    label: ' 〈 ',
    accelerator: 'CmdOrCtrl+Left', // 단축키 설정 (CmdOrCtrl+Left)
    click() {
    // 이전 페이지로 이동
      if (app.win.webContents.canGoBack()) {
        app.win.webContents.goBack();
      }
    }
  },
  {
    label: ' 〉 ',
    accelerator: 'CmdOrCtrl+Right', // 단축키 설정 (CmdOrCtrl+Right)
    click() {
    // 이전 페이지로 이동
      if (app.win.webContents.canGoForward()) {
        app.win.webContents.goForward();
      }
    }
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1024,
    height: 768  
  })
  //win.loadFile('index.html')
  win.loadURL('https://inzilion.github.io')
  return win
}

app.whenReady().then(() => {
  app.win = createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      app.win = createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})