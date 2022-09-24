let header = document.querySelector('header')
let list = document.querySelectorAll('.list');
let item = document.querySelectorAll('.item')

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', () => {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active')
        }
        list[i].classList.add('active')
        let myList = list[i].getAttribute('my-list')
        for (let h = 0; h < item.length; h++) {
            item[h].classList.add('hide')
            let product = item[h].getAttribute('product')
            if (myList == product || myList == "all") {
                item[h].classList.remove('hide')


            }

        }
    })


}

document.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
        header.style.background = "black"
    } else {
        header.style.background = "transparent"
    }
})