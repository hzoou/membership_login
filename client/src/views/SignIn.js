import {init} from "../js/signin.js";

class SignIn {
    constructor() {

    }

    render() {
        return `<div>
                    <div id="title">로그인</div>
                    <div>아이디</div>
                    <div class="inputText">
                        <input type="text" id="id" name="id" class="element" />
                    </div>
                    <span id="idTxt"></span>
                    <div>비밀번호</div>
                    <div class="inputText">
                        <input type="password" id="pw" name="pw" class="element" />
                    </div>
                    
                    <div id="button">
                        <input type="button" class="button" value="로그인" id="submit"/>
                    </div>
                </div>
                <div id="submitModal" class="modal"></div>`;
    }

    getScript() {
        init.getElementById();
    }
}

export default SignIn;