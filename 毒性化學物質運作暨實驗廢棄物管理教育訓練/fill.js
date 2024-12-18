const questionAnswers = 
{
    "下列何者非實驗室廢棄物?": "資源回收物",
    "實驗室廢棄物依相關法令認定為何種廢棄物?": "事業廢棄物",
    "實驗室廢棄物分類首重下列何特性?": "相容性",
    "下列何者非判別廢棄物相容性之原則?": "降溫",
    "本校毒化物運作紀錄季申報期限規定為每年1、4、7、10月幾號前申報前季運作量？": "3",
    "下列何者非為強氧化劑?": "氫氧化鈉",
    "安全資料表英文簡稱為何?": "SDS",
    "毒管法所定義「毒性化學物質」其分類成幾種？": "4",
    "下列何者非毒性化學物質之運作行為?": "再利用",
    "氰係廢液需調整pH值至多少以上後才能維持其安定性?": "11",
    "實驗操作中發生意外事故之首要應變動作為何?": "停止相關實驗步驟",
    "本校常態性清運之實驗廢棄物項目包含?": "以上皆是",
    "校園實驗室、試驗廠等單位，依法已定義作為事業，其所產生之廢棄物為事業廢棄物。": "是",
    "校園實驗室為學校單位，不受相關環保法令約束，其所產生之廢棄物自行丟棄於環保子車即可。": "否",
    "實驗室過期與報廢化學藥品（知名與不知名藥品）為有害事業廢棄物。": "是",
    "實驗室垃圾桶內擦拭非實驗髒污之衛生紙屬有害事業廢棄物。": "是",
    "校園行政大樓產生之生活垃圾屬一般事業廢棄物。": "否",
    "事業委託清理其廢棄物，應與受託人就該廢棄物負連帶清理責任。": "是",
    "一般事業廢棄物應依廢棄物主要成分特性分類貯存。": "是",
    "實驗室廢液防溢漏之盛盤應大於該廢液桶或內裝藥品總量之80%": "否",
    "實驗廢液需以學校提供之廢液桶盛裝，最多裝至八分滿。": "是",
    "為避免每個月毒化物申報的繁瑣程序，可隱匿實驗": "否",
    "本校常態性清運之實驗廢棄物申報時間為每月20-30日，並於隔月清運。": "是",
    "取得實驗廢棄物清理費用之發票後可漠視繳款期限，等待善心人士繳費即可。": "否",
    "固體可燃廢棄物需以學校提供之紅色垃圾袋盛裝，每袋不可超過10公斤。": "是"
}

document.querySelectorAll('div.qtext').forEach((questionElement) => {
    const question = questionElement.innerText.trim();
    const correctAnswer = questionAnswers[question];

    if (correctAnswer) {
        const answersDiv = questionElement.closest('.qtext').nextElementSibling;
        const optionLabels = answersDiv.querySelectorAll('label');

        optionLabels.forEach((label) => {
            if (label.innerText.includes(correctAnswer)) {
                const input = label.previousElementSibling;
                if (input && input.type === 'radio') {
                    input.click();
                    console.log(`已填入答案：${correctAnswer}`);
                }
            }
        });
    } else {
        console.warn(`未找到答案對應的題目：${question}`);
    }
});