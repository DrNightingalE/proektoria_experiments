function CountdownTimer(elm,tl,mes){
 this.initialize.apply(this,arguments);
}
CountdownTimer.prototype={
 initialize:function(elm,tl,mes) {
  this.elem = document.getElementById(elm);
  this.tl = tl;
  this.mes = mes;
 },countDown:function(){
  var timer='';
  var today=new Date();
  var day=Math.floor((this.tl-today)/(24*60*60*1000));
  var hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000));
  if (hour < 10)
  {
    hour = '0' + hour;
  }
  var min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60;
  var sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60;
  var me=this;


var dayWord = new Array("день","дня","дней");
var minuteWord = new Array("минута","минуты","минут");
var hourWord = new Array("час","часа","часов");

function num2word(num,words) {
  num = num%100;
  if (num>19) { num=num%10; }
  switch (num) {
    case 1:  
     return(words[0]); 
     break;
    case 2: 
      return(words[1]);
      break; 
    case 3: 
      return(words[1]); 
      break;
    case 4:   
    return(words[1]); 
    break;

    default:  return(words[2]); 
  }
}


  if( ( this.tl - today ) > 0 ){
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption" style="left: -4px;">'+num2word(day,dayWord)+'</div><span class="number day">'+day+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption" style="left: 10px;"">'+num2word(hour,hourWord)+'</div><span class="number hour">'+hour+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption" style="left: 5px;">'+num2word(this.addZero(min),minuteWord)+'</div><span class="number min">'+this.addZero(min)+'</span></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){

 // Set countdown limit
 var tl = new Date('2017/09/01 09:00:00');

 // You can add time's up message here
 var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
 timer.countDown();
}

$(function(){
  CDT();
});