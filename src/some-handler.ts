export async function someHandler(request: Request): Promise<string> {
  const value = request.cf?.continent || 'unknown'
  return value
}
