# Fix UTF-8 Encoding in All TSX Files
$files = Get-ChildItem -Path "app" -Recurse -Filter "*.tsx"
$fixedCount = 0

foreach ($file in $files) {
    try {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        if ($content) {
            [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.UTF8Encoding]::new($false))
            $fixedCount++
            Write-Host "✓ Fixed: $($file.Name)"
        }
    } catch {
        Write-Host "✗ Error: $($file.Name) - $($_.Exception.Message)"
    }
}

Write-Host "`n========================================="
Write-Host "Total files processed: $fixedCount"
Write-Host "========================================="
Write-Host "All TSX files now have proper UTF-8 encoding without BOM"
