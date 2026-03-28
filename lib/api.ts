const hasWindow = () => typeof window !== "undefined";

type HistoryItem = {
  id: number;
  type: string;
  expression: string;
  result: string;
  created_at: string;
};

const readJSON = <T,>(key: string, fallback: T): T => {
  if (!hasWindow()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const writeJSON = (key: string, value: unknown) => {
  if (!hasWindow()) return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const saveCalculation = async (type: string, expression: string, result: string) => {
  const history = readJSON<HistoryItem[]>("history", []);
  const item: HistoryItem = {
    id: Date.now(),
    type,
    expression,
    result,
    created_at: new Date().toISOString(),
  };
  history.unshift(item);
  writeJSON("history", history.slice(0, 500));
  return { ok: true, item };
};

export const getHistory = async () => {
  const history = readJSON<HistoryItem[]>("history", []);
  return { history };
};

type User = { name: string; email: string; password: string };

export const login = async (email: string, password: string) => {
  const users = readJSON<User[]>("users", []);
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid credentials");
  localStorage.setItem("token", "local-auth");
  return { token: "local-auth", user: { name: user.name, email: user.email } };
};

export const register = async (name: string, email: string, password: string) => {
  const users = readJSON<User[]>("users", []);
  if (users.find((u) => u.email === email)) throw new Error("User exists");
  users.push({ name, email, password });
  writeJSON("users", users);
  return { ok: true };
};
