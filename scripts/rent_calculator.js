var you = $("#you");
var me =$("#me");
$("#trent").on('input',function(e){
     var text = $(this).val();
    
    var number = parseInt(text);
    if(!number) {
	change(you,0);
	change(me,0);
    }
    if(number<1000){
	var per = number*.03;
	change(you,number - per);
	change(me,per);
    }
if(number>=1000&&number<5000){
	var per2 = number*.02;
	change(you,number - per2);
	change(me,per2);
    }

if(number>=5000&&number<10000){
	var per3 = number*.01;
	change(you,number - per3);
	change(me,per3);
    }

if(number>=10000){
	var per4 = number*.005;
	change(you,number - per4);
	change(me,per4);
    }


});

var change= function(what,_with){
    what.text(_with);
};
