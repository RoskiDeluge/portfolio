const fs = require('fs/promises')
const path = require('path')

const SOURCE_DIR = path.join(__dirname, '..', 'public')
const OUTPUT_DIR = path.join(__dirname, '..', 'dist')
const PARTIALS_DIR = path.join(SOURCE_DIR, 'partials')
const INCLUDE_RE = /<!--#include\s+file="([^"]+)"\s+-->/g
const MAX_INCLUDE_DEPTH = 10

async function expandIncludes(content, currentDir, depth) {
  if (depth > MAX_INCLUDE_DEPTH) {
    throw new Error(`Include depth exceeded at ${currentDir}`)
  }

  const includeRe = new RegExp(INCLUDE_RE.source, 'g')
  let match
  let lastIndex = 0
  let output = ''

  while ((match = includeRe.exec(content)) !== null) {
    const includePath = match[1]
    const resolvedPath = path.resolve(currentDir, includePath)
    const includeContent = await fs.readFile(resolvedPath, 'utf8')
    const expanded = await expandIncludes(
      includeContent,
      path.dirname(resolvedPath),
      depth + 1
    )

    output += content.slice(lastIndex, match.index)
    output += expanded
    lastIndex = includeRe.lastIndex
  }

  output += content.slice(lastIndex)
  return output
}

function isInPartialsDir(relativePath) {
  if (!relativePath) return false
  const topLevel = relativePath.split(path.sep)[0]
  return topLevel === 'partials'
}

async function copyDir(sourceDir) {
  const entries = await fs.readdir(sourceDir, { withFileTypes: true })

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name)
    const relativePath = path.relative(SOURCE_DIR, sourcePath)

    if (isInPartialsDir(relativePath)) {
      continue
    }

    const outputPath = path.join(OUTPUT_DIR, relativePath)

    if (entry.isDirectory()) {
      await fs.mkdir(outputPath, { recursive: true })
      await copyDir(sourcePath)
      continue
    }

    await fs.mkdir(path.dirname(outputPath), { recursive: true })

    if (path.extname(entry.name).toLowerCase() === '.html') {
      const content = await fs.readFile(sourcePath, 'utf8')
      const expanded = await expandIncludes(content, path.dirname(sourcePath), 0)
      await fs.writeFile(outputPath, expanded)
    } else {
      await fs.copyFile(sourcePath, outputPath)
    }
  }
}

async function build() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true })
  await copyDir(SOURCE_DIR)
}

build().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
