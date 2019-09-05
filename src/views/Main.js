class Main {
    constructor() {

    }

    render() {
        return `<div>
                    <div id="title">메인페이지</div>
                        <div id="button">
                            <input type="button" class="button" value="로그인" onclick="location.href='#signin'" />
                            <div style="width: 25px"></div>
                            <input type="button" class="button" value="회원가입" onclick="location.href='#signup'"  />
                        </div>
                    </div>
                </div>`;
    }
}

export default Main;