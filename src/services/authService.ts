const USERS_KEY = "users";
const AUTH_KEY = "auth_user";

// ---------- Helpers ----------
export const getUsers = (): any[] => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
};

export const saveUsers = (users: any[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const getAuthUser = () => {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
  } catch {
    return null;
  }
};

// ---------- SIGNUP ----------
export const signup = (user: {
  name: string;
  email: string;
  password: string;
}) => {
  const users = getUsers();

  const exists = users.find((u: any) => u.email === user.email);
  if (exists) {
    throw new Error("User already exists");
  }

  const newUser = {
    ...user,
    isEmailVerified: false,
    is2FAEnabled: false,
  };

  users.push(newUser);
  saveUsers(users);

  return newUser;
};

// ---------- LOGIN ----------
export const login = (email: string, password: string) => {
  const users = getUsers();

  const user = users.find(
    (u: any) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  return user;
};

// ---------- LOGOUT ----------
export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};

// ---------- EMAIL VERIFICATION ----------
export const verifyEmail = (email: string) => {
  const users = getUsers();

  let updatedUser: any = null;

  const updatedUsers = users.map((u: any) => {
    if (u.email === email) {
      updatedUser = { ...u, isEmailVerified: true };
      return updatedUser;
    }
    return u;
  });

  if (!updatedUser) {
    throw new Error("User not found");
  }

  saveUsers(updatedUsers);
  localStorage.setItem(AUTH_KEY, JSON.stringify(updatedUser));

  return updatedUser;
};

// ---------- 2FA ----------
export const enable2FA = (email: string) => {
  const users = getUsers();

  let updatedUser: any = null;

  const updatedUsers = users.map((u: any) => {
    if (u.email === email) {
      updatedUser = { ...u, is2FAEnabled: true };
      return updatedUser;
    }
    return u;
  });

  if (!updatedUser) {
    throw new Error("User not found");
  }

  saveUsers(updatedUsers);
  localStorage.setItem(AUTH_KEY, JSON.stringify(updatedUser));

  return updatedUser;
};

// ---------- RESET PASSWORD ----------
export const resetPassword = (email: string, newPassword: string) => {
  const users = getUsers();

  let updatedUser: any = null;

  const updatedUsers = users.map((u: any) => {
    if (u.email === email) {
      updatedUser = { ...u, password: newPassword };
      return updatedUser;
    }
    return u;
  });

  if (!updatedUser) {
    throw new Error("User not found");
  }

  saveUsers(updatedUsers);

  // optional: keep user logged in synced
  localStorage.setItem(AUTH_KEY, JSON.stringify(updatedUser));

  return updatedUser;
};