
Add-Type -AssemblyName System.Drawing
$dir = "d:\Chouhan-Group-website\public\Charity\Charity"

# Fix Mukti-dham2: rotate 90 CCW (or 270 CW) to get back to original landscape
$m2 = Join-Path $dir "Mukti-dham2.jpeg"
$img = [System.Drawing.Image]::FromFile($m2)
$img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone)
$tmp = $m2 + ".tmp"
$img.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Jpeg)
$img.Dispose()
Remove-Item $m2
Move-Item $tmp $m2

# Fix Mukti-dham3-10: rotate 180 degrees to flip right-side up
$others = 3..10
foreach ($n in $others) {
    $file = Join-Path $dir "Mukti-dham$n.jpeg"
    $img = [System.Drawing.Image]::FromFile($file)
    $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone)
    $tmp = $file + ".tmp"
    $img.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $img.Dispose()
    Remove-Item $file
    Move-Item $tmp $file
}
