const pageModules = import.meta.glob('../pages/**/*.vue')

interface PageHit {
  file: string
  pattern: RegExp
}

function toPageFile(globKey: string) {
  const normalized = globKey.replace(/\\/g, '/')
  const marker = '/pages/'
  const index = normalized.lastIndexOf(marker)
  if (index === -1) return ''
  return `app${normalized.slice(index)}`
}

function compilePage(file: string): PageHit | null {
  let routePath = file.replace(/^app\/pages\//, '').replace(/\.vue$/, '')
  if (routePath === 'index') routePath = ''
  else if (routePath.endsWith('/index')) routePath = routePath.slice(0, -'/index'.length)

  const segments = routePath.split('/').filter(Boolean).map((segment) => {
    if (segment.startsWith('[...') && segment.endsWith(']')) return '.+'
    if (segment.startsWith('[') && segment.endsWith(']')) return '[^/]+'
    return segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  })

  return {
    file,
    pattern: new RegExp(`^/${segments.join('/')}$`),
  }
}

const pageHits = Object.keys(pageModules)
  .map(toPageFile)
  .filter(Boolean)
  .map(compilePage)
  .filter((hit): hit is PageHit => hit !== null)

const pageFileSet = new Set(pageHits.map((hit) => hit.file))

function parentShell(file: string) {
  const directory = file.replace(/\/[^/]+\.vue$/, '')
  if (directory === 'app/pages') return ''
  const shell = `${directory}.vue`
  return pageFileSet.has(shell) ? shell : ''
}

export function usePageAddress() {
  const route = useRoute()
  const requestURL = useRequestURL()
  const projectRoot = useState('lab-project-root', () => {
    if (import.meta.server) return process.cwd().replace(/\\/g, '/')
    return ''
  })

  const browserHref = computed(() => `${requestURL.origin}${route.fullPath}`)

  const matched = computed(() => {
    const hits = pageHits.filter((hit) => hit.pattern.test(route.path))
    hits.sort((a, b) => b.file.length - a.file.length)
    const file = hits[0]?.file ?? ''
    const shell = file ? parentShell(file) : ''
    return {
      file,
      shell: shell && shell !== file ? shell : '',
    }
  })

  function ideHref(file: string) {
    const root = projectRoot.value.replace(/\\/g, '/').replace(/\/$/, '')
    if (!import.meta.dev || !root || !file) return ''
    const absolute = `${root}/${file}`.replace(/\/{2,}/g, '/')
    return `cursor://file/${absolute}:1:1`
  }

  return {
    browserHref,
    pageFile: computed(() => matched.value.file),
    shellFile: computed(() => matched.value.shell),
    ideHref,
  }
}
