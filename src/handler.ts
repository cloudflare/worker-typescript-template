export async function handleRequest(request: Request): Promise<Response> {
  return new Response(`Request Timestamp: ${new Date().toLocaleString()}`)
}
