
Add-Type -AssemblyName System.Drawing
$dir = "d:\Chouhan-Group-website\public\Charity\Charity"
$images = Get-ChildItem -Path $dir -Filter "Mukti-dham*.jpeg"

foreach ($imgFile in $images) {
    if ($imgFile.Name -match "Mukti-dham[1-9]|Mukti-dham10|Mukti-dham-hero") {
        Write-Host "Flipping 180 degrees: $($imgFile.Name)..."
        $img = [System.Drawing.Image]::FromFile($imgFile.FullName)
        $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone)
        
        $tmpPath = $imgFile.FullName + ".tmp"
        $img.Save($tmpPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $img.Dispose()
        
        Remove-Item $imgFile.FullName
        Move-Item $tmpPath $imgFile.FullName
    }
}
