function perform(){
    var names = ["josé","Lucas","Victor", "João","Claudio","vitor","maria","Vitoria","Lucia","adelma"]
    var age = [23,34,43,32,32,53,13,43,13,53]
    var color =["blue","pink","yellow","green","black","dark blue","brown","blus","pink","dark green"]

    for(i=0 ;i< names.length;i++){
        document.write(names[i]+ " ")
        document.write(age[i]+ " ")
        document.write(color[i]+ "<br/>")
    }
    names.push("bento")
    age.push("77")
    color.push("black")
    for(i=0 ;i<names.length;i++){
        document.write(names[i]+ " ")
        document.write(age[i]+ " ")
        document.write(color[i]+"<br/>")
    }
}