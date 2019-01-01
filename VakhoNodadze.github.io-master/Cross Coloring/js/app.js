let wrapper = document.querySelector('#wrapper');

for(let i = 3; i < 36; i += 6){
    for(let i = 2; i < 36; i += 6){
        wrapper.children[i].style.backgroundColor = 'blue'
    }
    wrapper.children[i].style.backgroundColor = 'blue'
}
for(let i = 12; i < 24; i ++){
    wrapper.children[i].style.backgroundColor = 'red'
    if(i == 15 || i == 20){
    wrapper.children[i].style.backgroundColor = 'blue'
    }
}