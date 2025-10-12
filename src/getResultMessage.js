export default function getResultMessage(score) {
    if (score >= 100) {
        return "もうすでに現実でも仲良くしていただいていることでしょう。netakiryosukeはあなたがいないと生きていけません。";
    } else if (score >= 80) {
        return "相性◎です。一緒に飲みに行ったらいつ帰れるか分かりませんね。";
    } else if (score >= 60) {
        return "及第点の相性です。でも及第点の相性ってなかなかないし、素敵と思いませんか？";
    } else if (score >= 40) {
        return "学生だったら単位を落としている相性です。人間関係は選択科目ですので、再履修するかはお任せします。";
    } else {
        return "世界には数十億の色々な人がいます。それを再認識できて嬉しいです。";
    }
}
