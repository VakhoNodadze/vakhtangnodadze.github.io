let mainModule = (function(){
    let people =['person 1','person 2'];
    
    // DOM catching
    let $element = $('#peopleModule');
    let $button = /*$element.find */$('#addPerson');
    let $input = $element.find('input');
    let $ul = $element.find('ul');
    const STORAGE_KEY='MyModule-persons';

    //event binding
    $button.on('click',addPerson);
    // selector ,eventname,callback
    $ul.delegate('i.del',"click",removePerson);
    _updateStorage();
    _updateDOM();


    function template(items){
        return items.map( item => {
            return `<li><span>${item}</span><i class="del">X</i></li>`

        }).join('');

    }
    function _updateDOM(){
        $ul.html(template(people))
    }
// uppdate storage funtion
    function _updateStorage(Adding=false){
        if(window.localStorage){
            // window.localStorage.length > 0
            if(window.localStorage.getItem(STORAGE_KEY)){
                if(Adding){
                    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(people))

                }
                else{
                    people=JSON.parse(localStorage.getItem(STORAGE_KEY));
                }


            }
            else{
                window.localStorage.setItem(STORAGE_KEY,JSON.stringify(people));

            }
        }
    }
    function addPerson(newVal){
        let name =(typeof newVal==='string') ? newVal : $input.val()
        people.push(name);
        _updateStorage(true);
        _updateDOM();
        $input.val('')
    }
    function removePerson(event){
        console.log(event)
        let index;
        if(typeof event==='number'){
            index=event-1;
        }
        else{
            let $remove=$(event.target).closest('li');
            index =$ul.find('li').index($remove);

        }
        if(event==0){
            return
    
        }
        
        people.splice(index,1);
        _updateStorage(true);
        _updateDOM();
    }
   
    return{
        addPerson,
        removePerson,
    }
    
})()