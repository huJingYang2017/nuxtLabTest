export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  return {
    publicTitle: config.public.appTitle,
    secretKnown: Boolean(config.apiSecret),
    secretPreview: `${config.apiSecret.slice(0, 4)}…`,
  }
})
