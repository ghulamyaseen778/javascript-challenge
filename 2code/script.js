
function highlight() {
    const keywords = document.getElementById("textarea").value.split("\n")
    const InputVal = document.getElementById("inputVal").value
    let text = transformContent(InputVal,keywords)
    document.getElementById('result').innerHTML=text}

function transformContent(content, keywords){
  // console.log(keywords)
    let temp = keywords
    let arr =[]
  
    keywords.forEach((keyword,ind) => {
      console.log(ind)
     if (keyword==content){
      temp.splice(ind,1, wrapKeywordWithHTML(keyword,"green"))
     }else{
      temp.splice(ind,1, wrapKeywordWithHTML(keyword,"black"))
     }
    })
  console.log(temp)
    return temp
  }


function wrapKeywordWithHTML(keyword, color){
    return `<span style="color: ${color};">${keyword}</span>`
  }