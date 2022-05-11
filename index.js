const body = document.querySelector("body");
const home = document.querySelector("#home");
const home1 = document.createElement("section");
body.style.position = "relative";


home.classList = "d-flex  d-flex justify-content-center align-items-center"
const container = document.createElement("div");
const fatherRow = document.createElement("div");
const content = document.createElement("div");
const input = document.createElement("input");
home.append(input)

input.type = "text";
input.placeholder = "Search from 4 103 libriaries on cdnj....."

document.body.append(home1)
home1.append(container)
home.className = "container text-center"
home1.id = "home1"
home1.className = "container "
container.append(fatherRow)
container.classList = "row"
fatherRow.classList = "offset-1 col-10"
content.classList = "row"
fatherRow.append(content)



const getLibraries = async () => {
    try {
        const res = await axios.get("https://api.cdnjs.com/libraries?limit=20");
        return res.data.results;

    } catch (error) {
        return [];
    }
};

const getName = async (name) => {
    try {
        const res = await axios.get(`https://api.cdnjs.com/libraries/${name}`);
        return res.data.version;
    } catch (error) {
        return [];
    }
};


const getTitle = async (title) => {
    try {
        const res = await axios.get(`https://api.cdnjs.com/libraries/${title}`);
        renderData(res.data);
    } catch (error) {
        return [];
    }
};


const renderLibraries = async () => {
    let data = await getLibraries();
    data.map(n => {
        const box = document.createElement("div");
        const card = document.createElement("div");
        const top = document.createElement("div");
        const h5 = document.createElement("h5")
        const p = document.createElement("p")
        const button = document.createElement("button")
        content.append(box);
        box.classList = "box col-6 my-2"
        card.classList = "card"
        box.append(card)
        card.append(top)
        top.append(button)
        button.append(h5)
        button.className = "text-left"
        card.append(p)
        // let name = await getName(n.name)
        // console.log(name);
        h5.innerHTML = n.name;

        button.onclick = async () => {
            body.innerHTML = "";
            const rowDiv = document.createElement("div");
            const colDiv = document.createElement("div");
            body.append(rowDiv)
            rowDiv.className = "row";
            rowDiv.append(colDiv)
            colDiv.className = "col-8 linkDiv bg-light";
            colDiv.innerHTML = n.latest
        }




        //   map ohiri
    })
};



renderLibraries();
