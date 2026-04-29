const USERS_KEY = "users";
const AUTH_KEY = "auth_user";

export const getUsers = (): any[] => {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
};


export const saveUsers = (users: any[]) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

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
export const logout = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const getAuthUser = () => {
  return JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
};

export const verifyEmail = (email: string) => {
  const users = getUsers();

  const updatedUsers = users.map((u: any) => {
    if (u.email === email) {
      return { ...u, isEmailVerified: true };
    }
    return u;
  });

  saveUsers(updatedUsers);

  const user = updatedUsers.find((u: any) => u.email === email);
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));

  return user;
};

export const enable2FA = (email: string) => {
  const users = getUsers();

  const updatedUsers = users.map((u: any) => {
    if (u.email === email) {
      return { ...u, is2FAEnabled: true };
    }
    return u;
  });

  saveUsers(updatedUsers);

  const user = updatedUsers.find((u: any) => u.email === email);
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));

  return user;
};