function lunch() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const date = year + month + day;

    const request = new XMLHttpRequest();
    const url = `https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7530054&KEY=6b2c5a8bd8284662bf5be43ffb875dc4&MLSV_YMD=${date}`;

    request.open('GET', url);
    request.send();
    request.onload = function() {
        const mealInfoElement = document.getElementById('mealInfo');

        if (request.status !== 200) {
            mealInfoElement.innerHTML = "급식 메뉴 조회에 실패했습니다. 다시 시도해 주세요.";
            return;
        }

        try {
            const response = JSON.parse(request.responseText);
            if (response.RESULT.CODE === "INFO-200") {
                mealInfoElement.innerHTML = "오늘의 급식정보가 존재하지 않습니다.";
            } else {
                const ddishNm = response.mealServiceDietInfo[1].row[0].DDISH_NM;
                mealInfoElement.innerHTML = ddishNm.replace(/<br\/?>/g, '<br>').replace(/\([^()]+\)\s*/g, '');
            }
        } catch (e) {
            mealInfoElement.innerHTML = "급식 메뉴 데이터를 처리하는 중 오류가 발생했습니다.";
        }
    };
}

document.getElementById('getLunchButton').addEventListener('click', lunch);
