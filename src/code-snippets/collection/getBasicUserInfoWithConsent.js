momo.auth.Collections({
    type: 'getUserInfoWithConsent',
    oath2Token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSMjU2In0.eyJzdWIiOiIwIiwiYXVkIjoiMTMzNTI5MjczIiwiY2lkIjoiZWUwMTI4YTYtOTYyNS00MDQ5LTgxOWItZGQzNGY1MGJmZWMwIiwiZXhwIjoxNjc4Nzc2ODAyLCJpYXQiOjE2Nzg3NzY1MDIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0IiwiY29uIjowLCJzY3AiOlsicHJvZmlsZSJdfQ.iyspzL_rYUCw6prgsgK195Zcd23J2KsJzlnJzwPzy2mub31luNSF-sGaLSxfSPUv8ayGd7zEwpvOvhjOa7ACUqeT3kFjQD1M7iTy3OE53F-jsHs0L89jEJoKCtxIMkP_RPr_A4FMv7HbYxD9UeHNsmMSgGkLC-lNHEZyuCFZQBvJhyu3iOTABJL2aFuNh_O9mJLcY1qk7BHd607cIFzTNYzQ4UocWJTwpzT3rBSmXd837VKXAxiCJlIDMSkZW54fyJurCt2mH5Ov0eM8n5ihoYOTtKYtfDoaeSg-2puZ4z2mel5cJazmM247ZUp2cDOJX7n1eTuGFVvH7lGzz5jXSg',
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
})