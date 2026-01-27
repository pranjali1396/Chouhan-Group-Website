
Add-Type -AssemblyName System.Drawing
$dir = "d:\Chouhan-Group-website\public\Charity\Charity"
$images = Get-ChildItem -Path $dir -Filter "Mukti-dham*.jpeg"

foreach ($imgFile in $images) {
    if ($imgFile.Name -match "Mukti-dham[2-9]|Mukti-dham10") {
        Write-Host "Rotating $($imgFile.Name)..."
        $img = [System.Drawing.Image]::FromFile($imgFile.FullName)
        $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone)
        
        # Save to temporary file first to avoid locking issues
        $tmpPath = $imgFile.FullName + ".tmp"
        $img.Save($tmpPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $img.Dispose()
        
        # Replace original
        Remove-Item $imgFile.FullName
        Move-Item $tmpPath $imgFile.FullName
    }
}
