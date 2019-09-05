class SignUp {
    constructor() {

    }

    render() {
        return `<div>
                    <div id="title">회원가입</div>
                    <div>아이디</div>
                    <div class="inputText">
                        <input type="text" id="id" name="id" class="element" />
                    </div>
                    <span id="idTxt"></span>
                    <div>비밀번호</div>
                    <div class="inputText">
                        <input type="password" id="pw" name="pw" class="element" />
                    </div>
                    <span id="pwTxt"></span>
                    <div>비밀번호 재확인</div>
                    <div class="inputText">
                        <input type="password" id="pw2" class="element" />
                    </div>
                    <span id="pw2Txt"></span>
                    <div>이름</div>
                    <div class="inputText">
                        <input type="text" id="name" name="name" class="element" />
                    </div>
                    <div>생년월일</div>
                    <div class="birth">
                        <input type="hidden" name="birth" id="birth">
                        <div class="inputText">
                            <input type="text" placeholder="년(4자)" id="year" maxlength="4" class="element" />
                        </div>
                        <div style="width: 25px"></div>
                        <div class="inputText">
                            <select class="birth select element" id="month" >
                                <option hidden>월</option>
                            </select>
                        </div>
                        <div style="width: 25px"></div>
                        <div class="inputText">
                            <input type="text" placeholder="일" id="day" maxlength="2" class="element" />
                        </div>
                    </div>
                    <span id="birthTxt"></span>
                    <div>성별</div>
                    <div class="inputText">
                        <select class="gender element" name="gender" id="gender">
                            <option hidden>성별</option>
                            <option id="m">남자</option>
                            <option id="f">여자</option>
                        </select>
                    </div>
                    <div>이메일</div>
                    <div class="inputText">
                        <input type="text" id="email" name="email" class="element" />
                    </div>
                    <span id="emailTxt"></span>
                    <div>휴대전화</div>
                    <div class="inputText">
                        <input type="text" placeholder="- 없이 입력해주세요. 예) 0101231234" id="phone" name="phone" maxlength="11" class="element" />
                    </div>
                    <span id="phoneTxt"></span>
                    <div>관심사</div>
                    <div class="inputText" style="height: auto">
                        <input type="hidden" name="interest" id="interestTags" />
                        <div id="tags">
                            <input type="text" id="interest" class="element" />
                        </div>
                    </div>
                    <span id="interestTxt"></span>
                    <div>
                        <a id="agreeBtn">약관에 동의합니다.</a>
                        <input type="checkbox" disabled="disabled" id="agreement"/>
                    </div>
                    <div id="button">
                        <input type="button" class="button" value="초기화" id="resetBtn"/>
                        <div style="width: 25px"></div>
                        <input type="submit" class="button" value="가입하기" id="submitBtn"/>
                    </div>
                </div>
                
                <div id="agreementModal" class="modal">
                    <div class="agreement">
                        <div>&times;</div>
                        <div class="agreementTitle">개인정보 수집 및 이용에 대한 안내</div>
                        <div class="agreementContent">
                            정보통신망법 규정에 따라 부스트캠프에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.<br>
                            <br>
                            1. 수집하는 개인정보의 항목<br>
                            최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.<br>
                            - 필수항목 : 아이디, 비밀번호, 이름, 생년월일, 성별, 이메일, 휴대전화, 관심사<br>
                            <br>
                            2. 개인정보의 수집 및 이용 목적<br>
                            가. 컨텐츠 제공, 특정 맞춤 서비스 제공<br>
                            나. 회원제 서비스 제공, 개인식별, 부스트캠프 이용약관 위반 회원에 대한 이용제한 조치, 서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용 행위 제재<br>
                            <br>
                            3. 개인정보의 보유 및 이용기간<br>
                            이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br>
                            <br>
                            가. 회사 내부 방침에 의한 정보보유 사유<br>
                            - 부정이용기록(부정가입, 징계기록 등의 비정상적 서비스 이용기록)<br>
                            보존 항목 : 가입인증 휴대폰 번호<br>
                            보존 이유 : 부정 가입 및 이용 방지<br>
                            보존 기간 : 6개월<br>
                            ※ '부정이용기록'이란 부정 가입 및 운영원칙에 위배되는 게시글 작성 등으로 인해 회사로부터 이용제한 등을 당한 기록입니다.<br>
                            <br>
                            나. 관련법령에 의한 정보보유 사유<br>
                            상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.<br>
                            - 계약 또는 청약철회 등에 관한 기록<br>
                            보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br>
                            보존 기간 : 5년<br>
                            - 소비자의 불만 또는 분쟁처리에 관한 기록<br>
                            보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률<br>
                            보존 기간 : 3년<br>
                            - 웹사이트 방문기록<br>
                            보존 이유 : 통신비밀보호법<br>
                            보존 기간 : 3개월<br>
                        </div>
                        <input type="button" class="agreementBtn" disabled="true" value="동의" />
                    </div>
                </div>  
                <div id="resetModal" class="modal"></div>
                <div id="submitModal" class="modal"></div>`;
    }
}

export default SignUp;