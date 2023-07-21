let doc = document
let body = doc.body
let wrap = doc.querySelector(".wrap")
let input = doc.querySelector(".input")
let time = doc.querySelector(".time")
let btn = doc.querySelector(".btn")
let list = doc.querySelector(".list")


btn.addEventListener("click", (e) => {
    if (input.value !== "") {

        //ubirayu perezagruzku strnicy
        e.preventDefault()

        //sozadayu kartochku
        let card = doc.createElement("div")
        list.append(card)
        card.classList.add("card")
        card.style.scale = 0
        setTimeout(() => {
            card.style.scale = 1
        })
        //sozdayu h6
        let h4 = doc.createElement("h4")
        h4.innerHTML = input.value
        card.append(h4)

        //sozdayu vremya
        let timeCard = doc.createElement("p")
        timeCard.innerHTML = time.value
        card.append(timeCard)
        input.classList.remove("red")

        //sozdayu krestik
        let x = doc.createElement("div")
        x.innerHTML = "\u2573"
        x.classList.add("remove")
        card.append(x)

        //sobitiye x
        x.addEventListener("click", () => {

            // list.removeChild(x.parentElement)
            x.parentElement.style.scale = 0
            setTimeout(() => {
                x.parentElement.style.display = "none"
            }, 400)
        })


        //chishu inputi
        input.value = ""
        time.value = ""
    }

    //else
    else if (input.value === "") {
        input.classList.add("red")
    }
})

let clearBtn = doc.createElement("button")

btn.addEventListener("click", (e) => {
    clearBtn.innerHTML = "Clear"
    clearBtn.classList.add("btn", "clearBtn")
    wrap.append(clearBtn)

}, { once: true })

btn.onclick = () => {
    clearBtn.style.scale = 1
}

clearBtn.onclick = () => {
    list.innerHTML = ""
    clearBtn.style.scale = 0
}