export const ROLES = { user: "user", assistant: "assistant" };

export function createMessage(role, content) {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  return { id, role, content, createdAt: new Date().toISOString() };
}
