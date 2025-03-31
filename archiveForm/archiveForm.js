function inscribe() {

    let result = ''
    const question_ids =
        [
            'name-and-pronouns', 'ttrpg-experience', 'favorite-myth',
            'favorite-myth-creature', 'favorite-cryptid', 'favorite-settings',
            'favorite-theme', 'favorite-tone', 'favorite-rolling-system',
            'favorite-stat-system', 'favorite-inventory-system', 'favorite-flavor'
        ];
    for (let i = 0; i < question_ids.length; i += 1) {
        let textarea = document.getElementById(question_ids[i]);
        let fancy_text = document.getElementById(question_ids[i]+'-label');
        result += fancy_text.innerText + textarea.value + '\n\n--------------------\n';
    }

    download_inscription(result);

}

function download_inscription(inscription) {
    let dablob =
        new Blob([inscription], { type: "text/plain" })
    let url = URL.createObjectURL(dablob)
    let anele = document.createElement("a")
    anele.setAttribute("download", "inscription.txt");
    anele.href = url;
    anele.click();
}