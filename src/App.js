import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  // console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // アロー関数で書いた関数は毎回新しい関数を定義していると判断される為、
  // 毎回再レンダリングが実行されてしまう。
  // useCallback:処理が変わらない場合は、再レンダリングしないという指示を行う。
  // 第２引数に見張る値を設定する。(openという値が変わった際に再レンダリングを実行する)
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // useMemo:変数のメモ化。変数の値が変わった時だけ再レンダリングを実行する(あまり使わない)
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
