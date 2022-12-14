import "./App.css";
import { AuthenticatedApp } from "./components/authenticatedApp/AuthenticatedApp";
import { UnauthenticatedApp } from "./components/unauthenticatedApp/UnauthenticatedApp";
import { useAuth } from "./hooks/useAuth";

function App() {
  // ログイン状態のチェックのため？
  // useAuth(カスタムフック)で認証情報をuserに入れる
  const { user } = useAuth();

  // TODO
  // 最終ログイン日時から1ヶ月以内ならAuthenticatedAppに遷移させる
  // 今のとこfirebaseにつなげて最終ログインが一ヶ月以内なら → AuthenticatedAppに遷移

  return (
    <div className="App">
      <div className="container">
        {/* ログインできてuserあればauthenticatedApp ログインしてない → Unauthだからgoogleログインボタン */}
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
    </div>
  );
}

export default App;
