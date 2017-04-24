"use strict";

$(function(){

	
	var html = $('#block1').html(); 


	var Articles = [{
		title: 'Вопрос №1 ',
		content: '<p class="art"><input class="zamer" type="checkbox" name="z" ></p></br> <p class="variant">Вариант ответа №1</p></p><br> <p class="p"><input type="checkbox" name=""></p> <p class="otvet">Вариант ответа №2</p></p><br> <p class="s"><input type="checkbox" name=""></p> <p class="v3">Вариант ответа №3</p></p><br>'
	}];

	

	var content = tmpl(html, {
		data: Articles
	});

	$('body').append(content);

});


$(function(){

	var html = $('#block2').html();

	var Articles = [
		{
			title: 'Вопрос №2 ',
			content: '<p class="art"><input class="zamer" type="checkbox" name="z" ></p></br> <p class="variant">Вариант ответа №1</p></p><br> <p class="p"><input type="checkbox" name=""></p> <p class="otvet">Вариант ответа №2</p></p><br> <p class="s"><input type="checkbox" name=""></p> <p class="v3">Вариант ответа №3</p></p><br>'
		}];

	var content = tmpl(html, {
			data: Articles
		});


	$('body').append(content);
});	




$(function(){

	var html = $('#block3').html();

	var Articles = [
		{
			title: 'Вопрос №3 ',
			content: '<p class="art"><input class="zamer" type="checkbox" name="z" ></p></br> <p class="variant">Вариант ответа №1</p></p><br> <p class="p"><input type="checkbox" name=""></p> <p class="otvet">Вариант ответа №2</p></p><br> <p class="s"><input type="checkbox" name=""></p> <p class="v3">Вариант ответа №3</p></p><br>'
		}];

	var content = tmpl(html, {
			data: Articles
		});


	$('body').append(content);





// var mashuna = {
// 			doors: 4,
// 			spped: 280,
// 			price: 50000,
// 			name: ['Ferrari','Mersedes']
// 		};
		

	
		localStorage.setItem('Articles', JSON.stringify(Articles));
		console.log( JSON.parse(localStorage.getItem('Articles','title')));


	//localStorage.setItem('mashuna', JSON.stringify(mashuna));
	//console.log( JSON.parse(localStorage.getItem('mashuna')) );
	//console.log( JSON.parse(localStorage.getItem('mashuna')).name[1] );

	//console.log(localStorage.getItem('Articles'));
	//localStorage.setItem('mashuna', JSON.stringify(mashuna).name);

//localStorage.clear();
// localStorage.setItem('Articles', JSON.stringify(Articles)).title;
// console.log( JSON.parse(localStorage.getItem('Articles')).content);
//console.log( JSON.parse(localStorage.getItem('Articles')).title)

	// document.getElementById('result').onclick = function () {
 //        if (document.getElementById('zamer').checked) alert('On'); else alert('Off');
 //    }


    // document.getElementById('result').onclick = function () {
    //     if (document.getElementById('zamer').checked) alert('On'); else alert('Off');
    // }





// $('#result').click(function(){                                //если хотя б один флажок устанавлен то работает
// 	    if($("input:checkbox:checked").prop('checked')){
// 	 	    alert("Флажок установлен");
// 		}else{
// 			alert("Флажок не установлен");
// 	 	}
// 	});


var z = document.getElementsByName('z');
window.onclick = function() {
  for(var i=0; i<z.length; i++)
    if (z[i].checked) {
       console.log("Ответы правильные");
    }  else {
       console.log("Ответы не правильные");
    } 
}



$('.z').change(function(){
    if($('input[type=checkbox]:checked').length >= 3){
        $('input[type=checkbox]:not(:checked)').attr('disabled', "disabled");
    } else{
        $('input[type=checkbox]:disabled').removeAttr('disabled');
    }
});


// $( init );

// function init() {
//     $('#result').bind( 'click', pulsate );
// }
 

// function pulsate() {
//     $(this).fadeOut();
//     $(this).fadeIn();
// }

// init();






	// $('#result').click(function(){
	//     if($('#zamer').prop('checked')){
	//  	    alert("Флажок установлен");
	// 	}else{
	// 		alert("Флажок не установлен");
	// 	}
	// });




    //$('#result').click
 //    if($('#check1').prop('checked')) {
	//     console.log("Флажок установлен");
	// } esle {
	//     console.log("Флажок не установлен");
	// }

	//localStorage.setItem('myKey', 'myValue');



	// 	function(){     
	//     if($("#agree").attr("checked") != 'checked') { 
	//         window.alert('Дайте свое согласие на обработку данных!');
	//         $("#agree").css('border', '1px solid red');
	//         return false;
	//     }
	//     return true;
	// }
});	

