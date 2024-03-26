let card = document.querySelector('.card')

let obj=[
    {
        id:1,
        title: "SUPERBANK",
        cardNumber: "1234 5678 1234 5678",
        cardName: "JOHN GRIFFIN",
        userDate:"12/27",
        cardLogo: "./images/logo.png",

    }

]

obj.map((item) => {
    return(
        card.innerHTML += `
        <h3>${item.title}</h3>
        <h1>${item.cardNumber}</h1>
        <h4>${item.userDate}</h4>
        <h2>${item.cardName}</h2>
        <img src=${item.cardLogo}></img>
        `
    )
}

)
