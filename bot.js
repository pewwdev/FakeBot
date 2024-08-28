const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0


const botSay = (data) => {
    return [
        "Halo, perkenalkan nama saya kybot. siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `ohh... ${data?.usia} tua banget, hobi kamu apa ya?`,
        `wah... sama dong hobi aku juga ${data?.hobi}, btw kamu punya pacar ga?`,
        `ohh... ${data?.pacar}, yaudah kalau gitu. udahan yah?`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({nama: jawaban.value}) 
    }else if (init === 2) {
        botDelay({usia: jawaban.value})
    }else if (init === 3) {
        botDelay({hobi: jawaban.value})
    }else if (init === 4) {
        botDelay({pacar: jawaban.value})
    } else if (init === 5) { 
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    console.log({ usersData: usersData })
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [800])
    usersData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `thank u ya ${usersData[0]} udah main ke bot ini &#128570;
    nanti kita  ${usersData[2]} bareng ya...`
    jawaban.value = "okay thanks juga"
}

function botEnd() {
    console.log("bot end...")
}