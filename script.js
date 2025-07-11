
function search() {
    const name = document.getElementById("name").value.trim();
    const school = document.getElementById("school").value.trim();
    const resultDiv = document.getElementById("result");

    if (name.length < 2) {
        resultDiv.innerHTML = "請輸入至少兩個字的姓名。";
        return;
    }

    const results = data.filter(entry => {
        return entry.name.includes(name) && (school === "" || entry.junior.includes(school));
    });

    if (results.length === 0) {
        resultDiv.innerHTML = "❌ 查無結果";
    } else {
        resultDiv.innerHTML = results.map(r => `<p>✅ ${r.name}／${r.junior} → ${r.school}${r.department ? " - " + r.department : ""}</p>`).join("");
    }
}
