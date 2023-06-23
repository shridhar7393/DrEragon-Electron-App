const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system'),
//   bluetoothPairingRequest: (callback) => ipcRenderer.on('bluetooth-pairing-request', callback),
//   bluetoothPairingResponse: (response) => ipcRenderer.send('bluetooth-pairing-response', response)
});