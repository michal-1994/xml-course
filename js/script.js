document.addEventListener('DOMContentLoaded', () => {
    let url = "../data/read.xml";
    fetch(url)
        .then(response=>response.text())
        .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            buildHouseList(xml);
            buildSwordList(xml);
        });

    function buildHouseList(x) {
        let list = document.getElementById('houses');
        let houses = x.getElementsByTagName('house');

        let html = '';
        for(let house of houses) {
            let li = `<li>${house.firstChild.nodeValue}</li>`;
            html += li;
        }
        list.innerHTML = html;
    }

    function buildSwordList(x) {
        let list = document.getElementById('swords');
        let swords = x.getElementsByTagName('sword');

        for(let sword of swords) {
            let li = document.createElement('li');

            li.textContent = `${sword.firstChild.nodeValue} - ${sword.getAttribute('owner')}`;
            list.appendChild(li);
        }
    }
});