$(function(){
  console.log('start');

});

function check() {
  console.log($('#rel').children());
}


function countSelected(clicked_,select_id,limit) {
  console.log('selected');
  var count=0;
  var option_elm = $(select_id).children();
  for(var i=0;i<option_elm.length;i++){
    if(option_elm[i].selected)count++;
  }
  if(count>limit) {
    alert("選択は"+limit+"つまでです");
    $(clicked_).removeAttr('selected');
  }

  console.log('count : ' + count);
}
