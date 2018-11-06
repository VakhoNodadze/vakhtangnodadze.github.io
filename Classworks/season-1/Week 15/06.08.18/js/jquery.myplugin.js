// $.fn.myPlugin=function(){
//     console.log('myPlugin')
// }
/*
(function($){
    $.fn.myPlugin = function(){
            console.log('myPlugin 2nd way ')
        }

})(jQuery)
*/
// (function($){
//     $.extend($.fn,{
//         myPlugin(){
//             console.log("yo myplugin" );
//         },
//         myPlugin2(){
//             console.log("yo myplugin2");
//         }
        
//     })

// })(jQuery)
// (function($){
//     $.fn.styleElement = function(customText){
//         return this.each(function(){
//               $(this).text(customText)
//            })
//         }

// })(jQuery)
(function($){
    $.fn.styleElement = function(options){
        return this.each(function(){
              $(this).text(customText)
           })
        }

})(jQuery)