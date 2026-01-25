# PowerShell script to remove all dark: class variants from files
# This will search for and remove all Tailwind dark mode classes

$files = Get-ChildItem -Path "c:\Users\abdul\OneDrive\Desktop\portfolio-website" -Recurse -Include *.tsx,*.ts,*.jsx,*.js -Exclude node_modules,.next

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $originalContent = $content
    
    # Remove dark: class variants using regex
    # Pattern matches: dark:class-name (with optional modifiers like dark:hover:class-name)
    $content = $content -replace '\s+dark:[a-zA-Z0-9\-:\/\[\]]+', ''
    
    # Only write if content changed
    if ($content -ne $originalContent) {
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Updated: $($file.FullName)"
    }
}

Write-Host "`nDark mode classes removed from all files!"
