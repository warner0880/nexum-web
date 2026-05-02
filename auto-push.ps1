# ============================================================
#  auto-push.ps1  —  Nexum Web · Auto Git Push
#  Ejecutar una vez: powershell -ExecutionPolicy Bypass -File auto-push.ps1
# ============================================================
#
#  Requisitos (primera vez):
#    1. Abre PowerShell como administrador en la carpeta "web NEXUM"
#    2. git remote add origin https://github.com/warner0880/nexum-analytics-web.git
#    3. git config credential.helper manager-core
#    4. Corre este script — la primera vez pedirá credenciales GitHub y las guardará
#
# ============================================================

$WatchPath = $PSScriptRoot   # carpeta donde está este script (web NEXUM)
$RepoPath  = $PSScriptRoot
$Debounce  = 5               # segundos de espera tras el último cambio antes de hacer push
$LogFile   = Join-Path $PSScriptRoot "auto-push.log"

function Write-Log($msg) {
    $ts = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$ts  $msg" | Tee-Object -FilePath $LogFile -Append
}

# Asegurar que el remote existe
Push-Location $RepoPath
$remoteCheck = git remote get-url origin 2>&1
if ($LASTEXITCODE -ne 0) {
    git remote add origin https://github.com/warner0880/nexum-analytics-web.git
    Write-Log "Remote 'origin' configurado."
}
Pop-Location

Write-Log "=== Auto-push iniciado. Vigilando: $WatchPath ==="
Write-Host "✅ Auto-push activo. Vigilando cambios en src/ ..." -ForegroundColor Green
Write-Host "   Presiona Ctrl+C para detener." -ForegroundColor Gray

# Configurar el watcher
$Watcher = New-Object System.IO.FileSystemWatcher
$Watcher.Path   = $WatchPath
$Watcher.Filter = "*.*"
$Watcher.IncludeSubdirectories = $true
$Watcher.EnableRaisingEvents   = $true
$Watcher.NotifyFilter = [System.IO.NotifyFilters]::LastWrite -bor [System.IO.NotifyFilters]::FileName

$global:LastChange = [DateTime]::MinValue
$global:Timer = $null

$Action = {
    $path = $Event.SourceEventArgs.FullPath

    # Ignorar archivos que no son de código
    $ignore = @(".git", "node_modules", "dist", ".log", "auto-push.log")
    foreach ($pat in $ignore) {
        if ($path -like "*$pat*") { return }
    }

    $global:LastChange = Get-Date

    # Reiniciar timer de debounce
    if ($global:Timer) { $global:Timer.Stop(); $global:Timer.Dispose() }
    $global:Timer = New-Object System.Timers.Timer
    $global:Timer.Interval = 5000   # 5 segundos
    $global:Timer.AutoReset = $false
    Register-ObjectEvent -InputObject $global:Timer -EventName Elapsed -Action {
        $global:Timer.Dispose()
        $global:Timer = $null

        Push-Location $using:RepoPath
        $status = git status --porcelain
        if ($status) {
            $msg = "auto: actualizacion $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
            git add -A
            git commit -m $msg
            git push origin main
            $exitCode = $LASTEXITCODE
            if ($exitCode -eq 0) {
                Write-Log "PUSH OK — $msg"
                Write-Host "  ✅ Push exitoso: $msg" -ForegroundColor Green
            } else {
                Write-Log "ERROR push (exit $exitCode)"
                Write-Host "  ❌ Error en push. Revisa auto-push.log" -ForegroundColor Red
            }
        }
        Pop-Location
    } | Out-Null
    $global:Timer.Start()
}

# Registrar eventos
Register-ObjectEvent -InputObject $Watcher -EventName "Changed" -Action $Action | Out-Null
Register-ObjectEvent -InputObject $Watcher -EventName "Created" -Action $Action | Out-Null
Register-ObjectEvent -InputObject $Watcher -EventName "Deleted" -Action $Action | Out-Null
Register-ObjectEvent -InputObject $Watcher -EventName "Renamed" -Action $Action | Out-Null

# Mantener el script vivo
try {
    while ($true) { Start-Sleep -Seconds 1 }
} finally {
    $Watcher.Dispose()
    Write-Log "=== Auto-push detenido ==="
}
