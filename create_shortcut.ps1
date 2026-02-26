$WshShell = New-Object -ComObject WScript.Shell
$Desktop = [Environment]::GetFolderPath('Desktop')
$ShortcutPath = Join-Path $Desktop 'Diary App.lnk'
$Shortcut = $WshShell.CreateShortcut($ShortcutPath)
$Shortcut.TargetPath = 'C:\Users\User\.gemini\antigravity\scratch\diary-app\index.html'
$Shortcut.IconLocation = 'shell32.dll,1'
$Shortcut.Description = 'My Diary App'
$Shortcut.Save()
Write-Host 'Shortcut created successfully on Desktop!'
