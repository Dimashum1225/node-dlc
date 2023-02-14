const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use('/contact', function(request, response){
    response.render('contact',{
        title: 'Мои контакты',
        emailsVisible: true,
        emails: ['bardin_vlad@rambler.ru', 'vr.arizona06@mail.ru'],
        phone: '+77754644499',
    })
})


app.use("/fio", function(request, response){
    response.render("fio",{
        title: 'ФИО',
        fioVisible: true,
        fio: ['Бардин Владислав Витальевич'],
    })
})

app.use("/info", function(request, response){
    response.render("info",{
        title: 'Обо мне',
        infoVisible: true,
        info: ['Здравствуйте, меня зовут Владислав, этот сайт моя одна из первых наработок в моей будущей IT-индустрии'],
    })
})

app.use("/dopinfo", function(request, response){
    response.render("dopinfo",{
        title: 'Мои увлечения',
        dopinfoVisible: true,
        dopinfo: ['Я увлекаюсь спортом, и помимо учебы хожу на занятия по стендовой стрельбе, более подробно можете узнать в инстаграмме @asanov_club'],
    })
})

app.use("/navik", function(request, response){
    response.render("navik",{
        title: 'Краткая информация',
        navikVisible: true,
        navik: ['Знаю такие программы как: Unity, Unreal Engine 5, Visual Studio, Visual Studio Code'],
    })
})

app.use("/znania", function(request, response){
    response.render("znania",{
        title: 'Мои знания языков',
        znaniaVisible: true,
        znania: ['Я знаю немного языков, такие как: HTMl, Js, C++, C#'],
    })
})

// app.use("/cv", function(request, response){
//     response.render("cv",{
//         title: 'CV',
//         cvVisible: true,
//         cv: ['Я знаю немного языков, такие как: HTMl, Js, C++, C#'],
//     })
// })



// Всегда в конце
app.use('/', function (request, response){
    response.render('partials/menu.ejs')
   
})


app.listen(3000)