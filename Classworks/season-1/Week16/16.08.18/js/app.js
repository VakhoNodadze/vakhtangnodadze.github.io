let text = document.querySelector('#textarea');

text.addEventListener('click', function (){
    //Counting Words
    let words = text.value.match(/\b[-?(\w+)?]+\b/gi);
    console.log(words.length);
    document.querySelector('#characterCount').innerHTML = words.length;
    //Counting Sentences
    let sentences = text.value.split(/[.|!|?]/g);
    console.log(sentences.length);
    document.querySelector('#wordCount').innerHTML = sentences.length;
})
