const renderHtml = () => `
<body style="margin: 0">
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; width: 100vw; color: white; background-color: #111">
    <h4>You arrived at</h4>
    <h3>${new Date().toISOString()}</h3>
  </div>
</body>
`

export async function handleRequest(request: Request): Promise<Response> {
  return new Response(renderHtml(), {
    headers: {
      'Content-Type': 'text/html'
    }
  })
}
