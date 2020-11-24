class Renderer{
    constructor(){}
    render(data){
        $('.recipeslist').empty()
        let len = data.length
        const source = $("#recipe-template").html()
        const template = Handlebars.compile(source)
        for(let i=0;i<len;i++){
           const newHTML = template({link: data[i].href, title: data[i].title, img: data[i].thumbnail, ingredients: data[i].ingredients})
           $('.recipeslist').append(newHTML)
        }
    }
}