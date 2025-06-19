$(document).ready(function () {

    $("#kfcvv").on("focus", function () {
        var ic = $("#anaKart #kart #kartici");
        ic.addClass("kartDon");

    });

    $("#kfcvv").on("focusout", function () {
        var ic = $("#anaKart #kart #kartici");
        ic.removeClass("kartDon");
    });

    $("#kfnumara").on("input", function () {

        let deger = $("#kfnumara").val();
        deger = deger.replace(/\D/g, "");
        $("#kfnumara").val(deger);
        //replace degistirmek icin
        //alert("deger");

        let yd = ""

        for (let i = 0; i < deger.length; i++) {
            if (i == 4 || i == 8 || i == 12) {
                yd += " ";
            }
            yd += deger[i];
        }
        $("#kfnumara").val(yd);

        ///verileri karta yazma

        let divler = $("#kno .digit");

        for (let i = 0; i < divler.length; i++) {
            if (i == 4 || i == 9 || i == 14)
                continue;

            /* if (yd[i] == undefined)
                 divler.eq(i).text("#");
 
             else
             divler.eq(i).text(yd[i]); */

            let a = (yd[i] == undefined) ? "#" : yd[i];
            if (a != divler.eq(i).children("span").text()) {
                divler.eq(i).children("span").addClass("yokOl");     //eq nesnelerin kacıncısını alcagımızı sectirir.value olmadıgı icin text ya da html kullanırız.
                divler.eq(i).append("<span>" + a + "</span>");

                setTimeout(function () {
                    divler.eq(i).children(".yokOl").remove();

                }, 500);
            }
        }

    });
        ///FOCUS OZELLİKLERİ
        $("#kfnumara , #kfad, #kfay, #kfyl").on("focus", function(){
            let id=$(this).attr("id");
            let sinifAdi=" ";

            switch(id){
                case"kfnumara": sinifAdi="knoIsaretci";break;
                case"kfad": sinifAdi="kadIsaretci";break;
                case"kfyl": case"kyl": sinifAdi="ktarihIsaretci";break;
            }

            $("#isaretci").addClass(sinifAdi);
        });

        $("#kfnumara , #kfad, #kfay, #kfyl").on("focusout", function(){
            let id=$(this).attr("id");
            let sinifAdi=" ";

            switch(id){
                case"kfnumara": sinifAdi="knoIsaretci";break;
                case"kfad": sinifAdi="kadIsaretci";break;
                case"kfyl": case"kyl": sinifAdi="ktarihIsaretci";break;
            }

            $("#isaretci").removeClass(sinifAdi);
        });

        $("#kfad").on("input",function(){
            let deger=$(this).val();
            deger=deger.replace(/\d/g, "");
            $(this).val(deger);

            let divler=$("#kad .adDiv");
            let uzunluk=(deger.length>divler.length)?deger.length:divler.length;

            for(let i=0; i<uzunluk;i++){
                let k=deger [i], d=divler.eq(i);
                
                $("#kad .holder").remove();
                if((k!==undefined && k!=d.text()) || d.text()==undefined){
                $("#kad").append("<div class='adDiv'>"+k+"</div>");
                }
                else if (k==undefined && d.text()!=undefined){
                    d.remove();
                }
                if(k==undefined && uzunluk==1){
                $("#kad").html("<div class='adDiv holder'>İsim Soyisim</div>");

                }
            } 
            
        });
        



});








