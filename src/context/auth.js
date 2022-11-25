// 認証コンテキストとプロバイダーの作成
import React from "react";
import { loginWithGoogle } from "../firebase";

// AuthContextオブジェクト作成 → contextの作成とは
const AuthContext = React.createContext(); // AuthContextでグローバルで使える変数の定義 → useAuthのカスタムフックに使う
// AuthProviderコンポーネントを作成
const AuthProvider = (props) => {
  // useStateで多分userデータをセット
  const [user, setUser] = React.useState(null);

  // ログインの関数
  const login = async () => {
    const user = await loginWithGoogle();
    if (!user) {
      // TODO: Handle failed login
    }
    // googleアカウントのユーザー情報をuserにセット
    setUser(user);
  };

  const value = { user, login };

  // authContextのproviderを返す
  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext, AuthProvider };
