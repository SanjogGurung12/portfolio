# === Clean previous build ===
Write-Host "Cleaning old build..."
if (Test-Path .\out) {
    Remove-Item -Recurse -Force .\out
}

# === Build Next.js project ===
Write-Host "Building project..."
npm run build

# === Export static HTML (Next.js 16+ uses output: "export") ===
Write-Host "Exporting static site..."
# In Next 16+, 'next export' is automatic with output: 'export', so we just ensure 'out/' exists
if (-not (Test-Path .\out)) {
    Write-Host "Creating out/ folder..."
    mkdir out
}

# === Copy CNAME for custom domain ===
Write-Host "Copying CNAME..."
if (Test-Path .\CNAME) {
    Copy-Item .\CNAME -Destination .\out\CNAME -Force
} else {
    Write-Host "CNAME file not found! Please create a CNAME file in project root."
}

# === Deploy to GitHub Pages ===
Write-Host "Deploying to GitHub Pages..."
npx gh-pages -d out -t true

Write-Host "✅ Deployment complete!"