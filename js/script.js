        

        // var content = document.getElementById("content");
        // content.innerHTML += "<p>Тест по программированию</p>";
        // /*content.style.backgroundColor = "#DCDCDC";*/
        // content.style.marginTop = "18px";
        // content.style.color = "black";
        // content.style.textAlign = "center";
        // content.style.fontSize = "20px";

        // document.write("<div id='block'></div>");
        // var block = document.getElementById("block");

        // block.style.width = "570px";
        // block.style.margin = "0 auto"
        // block.style.fontSize = "20px"
        // block.style.marginTop = '34px'


        // text = '1. Вопрос №1';
        // block.innerHTML = text;
        // block.style.clear = 'both';
        // block.style.lineHeight = '0';
        

        // block.innerHTML += "<p style='clear: both; padding: 25px 0 0 25px;'><input type='checkbox' id='checkbox1' /> Вариант ответа №1</p>";
        // block.innerHTML += "<p style='clear: both; padding-left: 25px;'>    <input type='checkbox' id='checkbox2'/> Вариант ответа №2</p>";
        // block.innerHTML += "<p style='clear: both; padding-left: 25px;'>    <input type='checkbox' id='checkbox3'/> Вариант ответа №3</p>";

        // var checkbox1 = document.querySelector("#checkbox1");
        // checkbox1.style.display = 'none';
        // checkbox1.outerHTML += '<img src="checkbox.png" alt="" style="margin-bottom: 3px;">';

        // var checkbox2 = document.querySelector('#checkbox2');
        // checkbox2.style.display = 'none';
        // checkbox2.outerHTML += '<img src="checkbox.png" alt="" style="margin-bottom: 3px;">';

        // var checkbox3 = document.querySelector('#checkbox3');
        // checkbox3.style.display = 'none';
        // checkbox3.outerHTML += '<img src="checkbox.png" alt="" style="margin-bottom: 3px;">';


        // document.write("<div id='block1'></div>");
        // var blok1 = document.getElementById("blok1")
       
        // block1.style.width = "570px";
        // block1.style.margin = "0 auto"
        // block1.style.fontSize = "20px"

        // block1.style.clear = 'both';
        // block1.style.lineHeight = '0.7';
        
        // block1.innerHTML += "<p style='padding-top: 11px'>2. Вопрос №2</p>"
        // block1.innerHTML += "<p style='clear: both; padding: 10px 0 0 25px;'><input type='checkbox' id='checkbox4'/> Вариант ответа №1</p>";
        // block1.innerHTML += "<p style='clear: both; padding-left: 25px;'><input type='checkbox' id='checkbox5'/> Вариант ответа №2</p>";
        // block1.innerHTML += "<p style='clear: both; padding-left: 25px;'><input type='checkbox' id='checkbox6'/> Вариант ответа №3</p>";
      
        // var checkbox4 = document.querySelector("#checkbox4");
        // checkbox4.style.display = 'none';
        // checkbox4.outerHTML += '<img src="checkbox.png" alt="" style="margin-bottom: 3px;">';

        // var checkbox5 = document.querySelector('#checkbox5');
        // checkbox5.style.display = 'none';
        // checkbox5.outerHTML += '<img src="checkbox.png" alt="" style="margin-bottom: 3px;">';

        // var checkbox6 = document.querySelector('#checkbox6');
        // checkbox6.style.display = 'none';
        // checkbox6.outerHTML += '<img src="checkbox.png" alt="" style="margin-bottom: 3px;">';


        // document.write("<div id='block2'></div>");
        // var blok2 = document.getElementById("blok2")
       
        // block2.style.width = "570px";
        // block2.style.margin = "0 auto"
        // block2.style.fontSize = "20px"

        // block2.style.clear = 'both';
        // block2.style.lineHeight = '0.7';
        
        // block2.innerHTML += "<p style='padding-top: 11px'>3. Вопрос №3</p>"
        // block2.innerHTML += "<p style='clear: both; padding: 10px 0 0 25px;'><input type='checkbox' id='checkbox7'/> Вариант ответа №1</p>";
        // block2.innerHTML += "<p style='clear: both; padding-left: 25px;'><input type='checkbox' id='checkbox8'/> Вариант ответа №2</p>";
        // block2.innerHTML += "<p style='clear: both; padding-left: 25px;'><input type='checkbox' id='checkbox9'/> Вариант ответа №3</p>";

        // var checkbox7 = document.querySelector("#checkbox7");
        // checkbox7.style.display = 'none';
        // checkbox7.outerHTML += '<img src="checkbox.png" alt="" style="margin-bottom: 3px;">';

        // var checkbox8 = document.querySelector('#checkbox8');
        // checkbox8.style.display = 'none';
        // checkbox8.outerHTML += '<img src="checkbox.png" alt="" style="margin-bottom: 3px;">';

        // var checkbox9 = document.querySelector('#checkbox9');
        // checkbox9.style.display = 'none';
        // checkbox9.outerHTML += '<img src="checkbox.png" alt="" style="margin-bottom: 3px;">';
  

        // document.write("<div id='result'></div>");
        // var result = document.getElementById("result");
        // result.innerHTML += "<h4 style='color: black; text-align:  center'>Проверить мой результат</h4>";

        // result.style.width = "315px";
        // result.style.padding = "5px 15px";
        // result.style.margin = "44px auto"
        // result.style.border = "2px solid black"
        // result.style.backgroundColor = "#cfe2f3";


        $(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
        $('a#go').click( function(event){ // лoвим клик пo ссылки с id="go"
                event.preventDefault(); // выключaем стaндaртную рoль элементa
                $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                        function(){ // пoсле выпoлнения предъидущей aнимaции
                                $('#modal_form') 
                                        .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                                        .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                });
        });
        /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
        $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
                $('#modal_form')
                        .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                                function(){ // пoсле aнимaции
                                        $(this).css('display', 'none'); // делaем ему display: none;
                                        $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                                }
                        );
        });
});