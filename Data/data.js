const products = [
    {
        id: "mhiOXi",
        name: "REMERA PUMA DOWNTOWN",
        price: "300",
        stock: "8",
        image: "/../public/img/remera1.png",
        category: "remeras"
    },
    {
        id: "Y0gu5X",
        name: "REMERA PUMA PALM TREE CREW",
        price: "300",
        stock: "10",
        image: "../public/img/remera2.png",
        category: "remeras"
    },
    {
        id: "C9jgT7",
        name: "CAMPERA NBA",
        price: "425",
        stock: "10",
        image: "../public/img/campera1.png",
        category: "camperas"
    },
    {
        id: "ek2cqO",
        name: "CAMPERA PUMA T7 PLAY PARIS",
        price: "440",
        stock: "7",
        image: "../public/img/campera2.png",
        category: "camperas"
    },
    {
        id: "12e5Pp",
        name: "BUZO PUMA CLASSICS PLAY PARIS",
        price: "500",
        stock: "6",
        image: "../public/img/buzo1.png",
        category: "buzos"
    },
    {
        id: "8qeM5H",
        name: "BUZO FILA AUTHENTIC",
        price: "480",
        stock: "8",
        image: "../public/img/buzo2.png",
        category: "buzos"
    },
    
]

const getProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(()=> {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }