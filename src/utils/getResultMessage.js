export default function getResultMessage(score) {
    if (score >= 100) {
        return "もうすでに現実でも仲良くしていただいていることでしょう。netakiryosukeはあなたがいないと生きていけません。";
    } else if (score >= 90) {
        return "Sクラスの相性です。一緒に飲みに行ったらいつ帰れるか分かりませんね。";
    } else if (score >= 80) {
        return "相性◎です。多分好きな食べ物も同じですよ、今度聞かせてください。";
    } else if (score >= 70) {
        return "そこそこ良い相性です。じゃんけんしたら数回はあいこになりそうです。";
    } else if (score >= 60) {
        return "及第点の相性です。でも及第点の相性の人ってなかなかいないし、素敵と思いませんか？";
    } else if (score >= 40) {
        return "学生だったら単位を落としている相性です。人間関係は選択科目ですので、再履修するかはお任せします。";
    } else {
        return "世界には数十億の色々な人がいますね。再認識できて嬉しいです。";
    }
}
