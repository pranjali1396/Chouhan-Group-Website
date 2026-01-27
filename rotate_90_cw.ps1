
Add-Type -AssemblyName System.Drawing
$dir = "d:\Chouhan-Group-website\public\Charity\Charity"

# Rotate Mukti-dham2 through 10 by 90 degrees clockwise
foreach ($n in 2..10) {
    $file = Join-Path $dir "Mukti-dham$n.jpeg"
    if (Test-Path $file) {
        Write-Host "Rotating 90 CW: Mukti-dham$n.jpeg"
        $img = [System.Drawing.Image]::FromFile($file)
        $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone)
        
        $tmp = $file + ".tmp"
        $img.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $img.Dispose()
        
        Remove-Item $file
        Move-Item $tmp $file
    }
}
