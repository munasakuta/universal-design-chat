import React, { useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Timeline from "../components/timeline/Timeline";
import Widgets from "../components/widget/Widgets";
import "../App.css";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import db from "../firebase";
import { useAuth } from "../hooks/useAuth";
// ルーティングで表示されるページはexportする
export function Home() {
  const { user } = useAuth();
  // userドキュメント追加
  // ログインと同時に
  useEffect(() => {
    // setDoc(collection(db, "user", `${user.uid}`))みたいにドキュメントIDを指定
    setDoc(doc(db, "user", `${user.uid}`), {
      name: user.displayName,
      uid: user.uid,
      icon: user.photoURL,
      email: user.email,
      myRoomList: [],
    });
  }, []);
  return (
    // pagesフォルダにあるpageファイルはなるべくPageをファイル名につけたい
    // ex) HomePage.jsにしたい → 人目でpageファイルだとわかるように
    <div className="app">
      {/* sidebar */}
      <Sidebar />
      {/* timeline */}
      <Timeline />
      {/* widget */}
      <Widgets />
    </div>
  );
}

export default Home;
