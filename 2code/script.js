
function highlight() {
    const keywords = document.getElementById("textarea").value.split("\n")
    const InputVal = document.getElementById("inputVal").value.split("\n")
    let text = transformContent(InputVal,keywords)
    document.getElementById('result').innerHTML=text
  }

function transformContent(content, keywords){
  // console.log(keywords)
    let temp = keywords
    let arr =[]
  
   for (let i = 0; i < content.length; i++) {
    const element = content[i];
    keywords.forEach((keyword,ind) => {
      console.log(ind)
     if (keyword.trim()==element.trim()){
      temp.splice(ind,1, wrapKeywordWithHTML(keyword,"green"))
     }
    })
    
   }
  console.log(temp)
    return temp
  }


function wrapKeywordWithHTML(keyword, color){
    return `<span style="color: ${color}; fontWeight:bold;">${keyword}</span>`
  }


//new work

// let test = document.getElementById('result')
// let text = "ان میں سے پہلی قسم کے کام کرنا اور ان کاموں کی اجرت لینا ناجائز ہے اگرچہ دینے والا حلال مال سے اجرت دے رہا ہو ، جبکہ دوسری قسم کے کام کرنا اور ان کی اجرت لینا جائز ہے ۔باقی بیوٹی پارلر کے لیے جگہ کرائے پر دینے کے بارے میں حکمِ شرعی یہ ہے کہ بیوٹی پارلر کو کرائے پر جگہ دینا شرعاً جائز ہے ، بشرطیکہ اس میں ہونے والے ناجائز کاموں پر مدد کرنے کی نیت نہ ہو ، محض اجارہ اور آمدنی حاصل کرنے کی نیت ہو ، کیونکہ وہاں پر ناجائز کام کا وبال ان لوگوں کو ہوگا ، جو ناجائز کام کریں گے ، اُن کا گناہ اِس شخص کے ذمہ نہیں ہوگا ، البتہ اس کی جگہ پر یہ ناجائز کام ہوں گے تو سہی ، اس لیے بیوٹی پارلر کے لیے جگہ کرائے پر دینے سے بچنا چاہیے ۔"

//  test.innerHTML = para(text)

// function para(text){
//  let testText=""
//   for (let i = 0; i < 200; i++){
//     testText += text[i]
//   }
//   console.log(testText)
//   console.log(testText.length)
//   return testText
// }
