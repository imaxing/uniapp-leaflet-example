import { RouterMount, createRouter } from 'uni-simple-router'

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  // @ts-ignore
  routes: [...ROUTES]
})

router.beforeEach((to: any, from: any, next: any) => {
  next()
})

export { router, RouterMount }
