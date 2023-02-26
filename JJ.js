let questions = [
    { ques: "1. Which animal is known as the 'Ship of the Desert'?", ans: "Camel", op1: "Tiger", op2: "Camel", op3: "Lion" },
    { ques: "2. How many days are there in a week?", ans: "7 days", op1: "3 days", op2: "6 days", op3: "7 days" },
    { ques: "3. Rainbow consist of how many colours?", ans: "7 colours", op1: "10 colours", op2: "7 colours", op3: "8 colours" },
    { ques: "4. Baby frog is known as.......", ans: "Tadpole", op1: "Tadpole", op2: "PoleTad", op3: "Main" },
    { ques: "5. How many years are there in one Millenium?", ans: "1,000 years", op1: "5,000 years", op2: "9,000 years", op3: "10,000 years" },
    { ques: "6. Which festival is called the festival of colours?", ans: "Holi", op1: "Deepavali", op2: "Holi", op3: "Pongal" },
    { ques: "7. How many days a February month have in the leap year?", ans: "27 days", op1: "30 days", op2: "28 days", op3: "29 days" },
    { ques: "8. Which is the principal source of energy for the Earth?", ans: "Moon", op1: "Earth", op2: "Mars", op3: "Sun"  },
    { ques: "9. Name the National Heritage Animal of India?", ans: "Elephant", op1: "Tiger", op2: "Elephant", op3: "Peac" }
]
let strt = document.querySelector(".start")
let forms = document.querySelector("form")
let counting = document.querySelector(".counting")
let compete = document.querySelector(".completed")
let sec = document.querySelector(".sec")
let timer = document.querySelector(".timer")
let timerers = document.querySelector(".timerss")
document.querySelector("#ansct").innerText = "You have scored 0"




document.querySelector("#start").addEventListener("click", () => {

    strt.style.display = "none"
    counting.style.display = "block"
    document.querySelector("#minute").style.display = "block"
    counts = 4
    let nm = setInterval(function add() {
        counts--
        document.querySelector("#minute").innerText = "0" + counts
        if (counts == 0) {
            clearInterval(nm)
            forms.style.display = "block"
            counting.style.display = "none"
            timerers.style.display = "block"


            countset = 0
            timerssss = 0
            let nms = setInterval(function add() {
                countset++
                if (countset < 10) {
                    sec.innerText = "0" + countset
                }
                else {
                    sec.innerText = countset
                }

                if (countset == 60) {
                    countset = 0
                    timerssss++
                    if (timerssss < 10) {
                        timer.innerText = "0" + timerssss + ":"
                    }
                    else {
                        timer.innerText = timerssss + ":"
                    }


                    if (timerssss == 2) {
                        clearInterval(nms)
                        forms.style.display = "none"
                        compete.style.display = "block"
                        timerers.style.display = "block"
                        timer.innerText = "00:"
                        sec.innerText = "00"
                        timerers.style.color = "green"
                    } 

                }
                if(timerssss == 1 && countset == 30){
                    timerers.style.color = "red"
                }
            }, 1000)



        }

    }, 1000)

})

count = 0

window.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#qus").innerText = questions[count].ques
    document.querySelector("#one").innerText = questions[count].op1
    document.querySelector("#two").innerText = questions[count].op2
    document.querySelector("#third").innerText = questions[count].op3
    document.querySelector("#oneq").value = questions[count].op1
    document.querySelector("#twoq").value = questions[count].op2
    document.querySelector("#threeq").value = questions[count].op3
})

let nam = document.querySelectorAll(".html")
let crt = document.querySelector("#crt")
let wrng = document.querySelector("#wrng")
let ans = document.querySelectorAll("h4")

function general(counts) {

    document.querySelector("#qus").innerText = questions[counts].ques


    let opt1 = document.querySelector("#one")
    opt1.innerText = questions[counts].op1

    let inp1 = document.querySelector("#oneq")
    inp1.value = questions[counts].op1

    let opt2 = document.querySelector("#two")
    opt2.innerText = questions[counts].op2

    let inp2 = document.querySelector("#twoq")
    inp2.value = questions[counts].op2

    let opt3 = document.querySelector("#third")
    opt3.innerText = questions[counts].op3

    let inp3 = document.querySelector("#threeq")
    inp3.value = questions[counts].op3

}


document.querySelector("#next").addEventListener("click", (e) => {
    e.preventDefault()
    count++
    if (count == questions.length) {
        count = 0
    }
    general(count)
    for (let k = 0; k < ans.length; k++) {
        ans[k].style.display = "none"
    }
    for (let i = 0; i < nam.length; i++) {
        nam[i].checked = false
    }
})



document.querySelector("#pre").addEventListener("click", (e) => {
    e.preventDefault()
    count--
    if (count == -1) {
        count = questions.length - 1
    }
    general(count)
    for (let i = 0; i < nam.length; i++) {
        nam[i].checked = false
        ans[i].style.display = "none"
    }
})

anserCount = 0
function ansCount(){
    anserCount++
   let anss = document.querySelector("#ansct")
   anss.innerText = `You have scored ${anserCount}`
   anss.style.color = "green"
}

document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault()
    for (let i = 0; i < nam.length; i++) {
        if (nam[i].checked) {
            if (questions[count].ans == nam[i].value) {
                crt.style.display = "block"
                wrng.style.display = "none"
                ansCount()
            } else {
                crt.style.display = "none"
                wrng.style.display = "block"
            }
        }
    }
})


