export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  const posts: Record<string, { id: string, title: string }> = {
    1: { id: '1', title: '动态段 [id].vue 对应 /posts/1' },
    2: { id: '2', title: '换一个 id 会换一条服务端记录' },
  }
  const post = id ? posts[id] : undefined
  if (!post) {
    throw createError({ statusCode: 404, message: '没有这篇文章' })
  }
  return post
})
