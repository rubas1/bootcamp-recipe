const search = function(){
    let ingredient = $("#input").val()
    let renderer = new Renderer()
    $.ajax({
        method: "GET",
        url: `/recipes/${ingredient}`,
        success: function (data){
            renderer.render(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

const image = function(){
    let word ="not work"///$(this).closest("div").find("ul").firstElementChild.innerHTML
    alert(word)
}
