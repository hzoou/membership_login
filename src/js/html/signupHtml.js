<div>
    <div id="title">회원가입</div>
    <div>아이디</div>
    <div class="inputText">
        <input type="text" id="id" class="element" />
    </div>
    <span id="idTxt"></span>
    <div>비밀번호</div>
    <div class="inputText">
        <input type="password" id="pw" class="element" />
    </div>
    <span id="pwTxt"></span>
    <div>비밀번호 재확인</div>
    <div class="inputText">
        <input type="password" id="pw2" class="element" />
    </div>
    <span id="pw2Txt"></span>
    <div>이름</div>
    <div class="inputText">
        <input type="text" id="name" class="element" />
    </div>
    <div>생년월일</div>
    <div class="birth">
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
            <input type="text" placeholder="일" id="day" class="element" />
        </div>
    </div>
    <span id="birthTxt"></span>
    <div>성별</div>
    <div class="inputText">
        <select class="gender element" id="gender">
            <option hidden>성별</option>
            <option id="m">남자</option>
            <option id="f">여자</option>
        </select>
    </div>
    <div>이메일</div>
    <div class="inputText">
        <input type="text" id="email" class="element" />
    </div>
    <span id="emailTxt"></span>
    <div>휴대전화</div>
    <div class="inputText">
        <input type="text" placeholder="- 없이 입력해주세요. 예) 0101231234" id="phone" maxlength="11" class="element" />
    </div>
    <span id="phoneTxt"></span>
    <div>관심사</div>
    <div class="inputText" style="height: auto">
        <div id="tags">
            <input type="text" id="interest" class="element" />
        </div>
    </div>
    <span id="interestTxt"></span>
    <div>
        <a id="agreeBtn">약관에 동의합니다.</a>
        <input type="checkbox" disabled="disabled" id="agreement"/>
    </div>
    <div id="footer">
        <input type="button" value="초기화" id="resetBtn"/>
        <div style="width: 25px"></div>
        <input type="submit" value="가입하기" id="submitBtn"/>
    </div>
</div>