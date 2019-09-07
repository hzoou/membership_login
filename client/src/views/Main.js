class Main {
    constructor() {

    }

    render() {
        return `<div>
                    <div id="title">🐤 부스트캠프 멤버십 🐤</div>
                        <div style="
                        font-size: 17px;
                        width: fit-content;
                        margin: 0 auto;
                        ">
                        안녕하세요 여러분! 저는 ss47 <b>우혜주</b>입니다!<br>
                        다들 만나서 반가습니당 ~~~ (흐흐) 🙊
                        <br>
                    </div>
                    <div id="button" style="
                        width: 90%;
                        margin: 40px auto;
                        ">
                        <input type="button" class="button" value="로그인" onclick="location.href='#signin'">
                        <div style="width: 25px"></div>
                        <input type="button" class="button" value="회원가입" onclick="location.href='#signup'">
                    </div>
                </div>`;
    }
}

export default Main;