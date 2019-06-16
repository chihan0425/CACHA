function show_log_password() {/*顯示登入密碼*/
	  var x = document.getElementById("myInput1");
	  if (x.type === "password") {
	    x.type = "text";
	  } else {
	    x.type = "password";
	  }
	}
function show_sig_password() {/*顯示註冊密碼*/
	  var x = document.getElementById("myInput2");
	  if (x.type === "password") {
	    x.type = "text";
	  } else {
	    x.type = "password";
	  }
	}	
function show_sigin(){
	 $('.sigin').removeClass('C-sigin');
	 $('.show-sig').css({'cursor':'default'});
	 $('.show-sig').css({'pointer-events':'none'});
	 $('.or-W2').css({'display':'none'});
	 $('.sig-T').removeClass('C-sig-T');
	 $('.or-W1').css({'display':'inline-block'});
	 $('.log-T').addClass('C-log-T');
	 $('.show-log').css({'pointer-events':'visible'});
}
function show_sigin2(){
	 $('.GrayB').css({'display':'inline-block'});
	 $('.login').css({'display':'inline-block'});
	 show_sigin();
}
function show_login(){
	$('.sigin').addClass('C-sigin');
	$('.show-sig').css({'pointer-events':' '});
	 $('.or-W2').css({'display':'inline-block'});
	 $('.sig-T').addClass('C-sig-T');
	 $('.log-T').removeClass('C-log-T');
	 $('.or-W1').css({'display':'none'});
	  $('.show-sig').css({'cursor':'pointer'});
}
function close_log(){
	$('.sigin').addClass('C-sigin');
	$('.show-sig').css({'pointer-events':' '});
	 $('.or-W2').css({'display':'inline-block'});
	 $('.sig-T').addClass('C-sig-T');
	 $('.log-T').removeClass('C-log-T');
	 $('.or-W1').css({'display':'none'});
	  $('.show-sig').css({'cursor':'pointer'});
	 $('.GrayB').css({'display':'none'});
	 $('.login').css({'display':'none'});
}
function show_log(){
	 $('.GrayB').css({'display':'inline-block'});
	 $('.login').css({'display':'inline-block'});
}


function shop_order() {
  document.getElementById("shop_order").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.S3-order')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function show_ser(){ //顯示搜尋商品器
	 $('.GrayB').css({'display':'inline-block'});
	 $('.GrayB').css({' opacity':'0.7'});
	 $('.close-other').css({'display':'inline-block'});
	 $('.Sear').css({'display':'inline-block'});
}
function close_other(){ //關閉其他黑遮罩
	 $('.GrayB').css({'display':'none'});
	 $('.close-other').css({'display':'none'});
	  $('.Sear').css({'display':'none'});
}
function quantityRe(){ //選擇商品數量的減少
	var i;
	i=parseInt(document.getElementById("S1-quantuty").innerText);
	if(i>1)
	{
		i=i-1;
		document.getElementById("S1-quantuty").innerHTML=i;
	}
	count_egg_total_money();
	
}
function quantityAd(){ //選擇商品數量的增加
	var i;
	i=parseInt(document.getElementById("S1-quantuty").innerText);
	if(i<4)
	{
		i=i+1;
		document.getElementById("S1-quantuty").innerHTML=i;
	}
	count_egg_total_money();
	
}

function count_egg_total_money(){
	var j;
	j=parseInt(document.getElementById("one_egg_money").innerText);

	var i;
	i=parseInt(document.getElementById("S1-quantuty").innerText);

	var M=j*i;
	document.getElementById("WQM_egg").innerHTML=M;
	
	document.getElementById("howQ").value=i;
}
//更改會員資料
function Cdata(){//更改資料按鈕
	$('.C-password').css({'display':'inline-block'});
	$('.C-password2').css({'display':'inline-block'});
	$('.C-dtat-btn').css({'display':'inline-block'});
	$('.S1-dataW').css({'display':'inline-block'});
	$('.C-W input[type="text"]').css({'border-width':'1px'});
	$('#dtat_name').removeAttr("readonly");
	$('#dtat_phone').removeAttr("readonly");
	$('#dtat_address').removeAttr("readonly");
}
function CK_password(){//確認兩次密碼是否一致
		var psw1= document.getElementById("data_password").value;
		var psw2 = document.getElementById("data_password2").value;
		if(psw1!=psw2)
		{
      	 /*alert("兩次密碼不同");*/
			$('.S1-dataNO').css({'display':'inline-block'});
			return false;
		}
		return true;
}	
function carQ_Re(X){ //選擇購物車商品數量的減少
	var i;
	var B="carQ_"+X;//按鈕裡的數量
	var C="car_chQ_"+X;//下面金額的數量
	var D="car_money_"+X;//商品單價
	var E="car_total_"+X;//商品總金額
	var QQ="che_"+X+"_3";
	i=parseInt(document.getElementById(B).innerText);
	if(i>1)
	{
		i=i-1;
		document.getElementById(B).innerHTML=i;
		document.getElementById(QQ).value=i;
	}
	document.getElementById(C).innerHTML=i;
	document.getElementById(E).innerHTML=parseInt(document.getElementById(D).innerHTML)*parseInt(document.getElementById(C).innerHTML);
	total_ch_money();//計算購物車總金額等等細節項目
}
function carQ_Ad(X,Y){ //選擇購物車商品數量的增加
	var i;
	var B="carQ_"+X;//按鈕裡的數量
	var C="car_chQ_"+X;//下面金額的數量
	var D="car_money_"+X;//商品單價
	var E="car_total_"+X;//商品總金額
	var QQ="che_"+X+"_3";
	i=parseInt(document.getElementById(B).innerText);
	if(i<Y)
	{
		i=i+1;
		document.getElementById(B).innerHTML=i;
		document.getElementById(QQ).value=i;
		
	}
	document.getElementById(C).innerHTML=i;
	document.getElementById(E).innerHTML=parseInt(document.getElementById(D).innerHTML)*parseInt(document.getElementById(C).innerHTML);
	total_ch_money();//計算購物車總金額等等細節項目
}
function total_ch_money(){//購物車總金額等等細節項目
	var sum=0; 
    //var Q=document.getElementsByName("check_product"); 
	//for(var x=0;x<Q.length;x++){ 
	// if(Q[x].checked){//選中的全部加起来 
	// 	var E="car_total_"+(x+1);//商品總金額
	//    sum=sum+parseInt(document.getElementById(E).innerHTML);//選中的值解析出来 
	// } 
	//} 
	var check=0;
	var Q2="";
	var oh=document.getElementById("ohoh").value;
	for(var i=1;i<=oh;i++){
		var name="check_product"+i;
		
		var Q=document.getElementsByName(name);
		
		if(Q[0].checked){
			var E="car_total_"+i;
			sum=sum+parseInt(document.getElementById(E).innerHTML);
			check=check+1;
			Q2=Q2+i+","
			
		}
	}
	
	document.getElementById("all_total").innerHTML=sum;
	document.getElementById("all_total2").innerHTML=sum;
	var Unpay=document.getElementById("freight_fee").innerHTML-document.getElementById("dis_coupon").innerHTML
	document.getElementById("need_pay").innerHTML=Unpay;
	document.getElementById("subT").value=Unpay;
	
	document.getElementById("all_total1_1").value=sum;
	document.getElementById("all_total2_2").value=sum;
	document.getElementById("ohohQ").value=check;
	document.getElementById("ohohQ2").value=Q2;
}

function show_TT(){//顯示選擇優惠券
	$('.NO-T').css({'display':'inline-block'});
	$('.Ck-TTbox').css({'display':'inline-block'});
	$('.GrayB').css({'display':'inline-block'});
}
function hidden_TT(){//隱藏選擇優惠券
	$('.NO-T').css({'display':'none'});
	$('.Ck-TTbox').css({'display':'none'});
	$('.GrayB').css({'display':'none'});
}
function TT_Sale(X){//點選優惠券
	$('.NO-T').css({'display':'none'});
	$('.Ck-TTbox').css({'display':'none'});
	$('.GrayB').css({'display':'none'});
	var A="ticlet_content_"+X;//優惠券內容
	var B="ticket_ID_"+X;//優惠券編號
	var C="ticket_coupon_money_"+X;//優惠券折扣金額
	document.getElementById("sale_money_id").value=document.getElementById(B).innerHTML;
	document.getElementById("check_T_name").innerHTML=document.getElementById(A).innerHTML;
	document.getElementById("dis_coupon").innerHTML=document.getElementById(C).innerHTML;
	document.getElementById("dis_coupon2").value=document.getElementById(C).innerHTML;
	total_ch_money();//計算購物車總金額等等細節項目
}
function no_btn(){ //確認轉蛋的取消按鈕
	$('.GrayB').css({'display':'none'});
	$('.yesno_box').css({'display':'none'});
}
function show_yesno(){ //顯示是否確認轉蛋
	$('.GrayB').css({'display':'inline-block'});
	$('.yesno_box').css({'display':'inline-block'});
}
function show_eggbox(){
	$('.casa').css({'display':'inline-block'});
	$('.eggbox').css({'display':'inline-block'});
	setTimeout("ad_eggw1()",100)
	setTimeout("ad_egg()",600)
	setTimeout("ad_eggw2()",700)
	setTimeout("ad_egg2()",1400)
	setTimeout("ad_baw()",2050)
	setTimeout("show_get_egg()",2400)
}
function ad_eggw1(){
	$('.casa_w1').addClass('casa_w1-2');
}
function ad_egg(){
	$('.casa_egg').addClass('casa_egg-2');
}
function ad_eggw2(){
	$('.casa_w2').addClass('casa_w2-2');
}
function ad_egg2(){
	$('.casa_egg').removeClass('casa_egg-2');
	$('.casa_egg').addClass('casa_egg-3');
}
function ad_baw(){
	$('.casa').css({'opacity':'1'});
	$('.casa').css({'background-color':'#FFFFFF'});
}
function show_get_egg(){
	$('.casa').css({'opacity':'0.7'});
	$('.casa').css({'background-color':'#000000'});
	$('.eggbox').css({'display':'none'});
	// $('.casa').css({'display':'inline-block'});
	$('.get_box').css({'display':'inline-block'});
}
function close_get_egg(){
	$('.get_box').css({'display':'none'});
	$('.casa').css({'display':'none'});
}
function write_message(){
	$('.GrayB').css({'display':'inline-block'});
	$('.write').css({'display':'inline-block'});
}

function show_2(box){
  if(box=='A1'){document.getElementById("ASB_2").style.width=32+"px";}
  if(box=='A2'){document.getElementById("ASB_2").style.width=60+"px";}
  if(box=='A3'){document.getElementById("ASB_2").style.width=92+"px";}
  if(box=='A4'){document.getElementById("ASB_2").style.width=120+"px";}
  if(box=='A5'){document.getElementById("ASB_2").style.width=150+"px";}
  if(box=='A6'){document.getElementById("ASB_2").style.width=181+"px";}
  if(box=='A7'){document.getElementById("ASB_2").style.width=209+"px";}
  if(box=='A8'){document.getElementById("ASB_2").style.width=241+"px";}
  if(box=='A9'){document.getElementById("ASB_2").style.width=268+"px";}
  if(box=='A10'){document.getElementById("ASB_2").style.width=300+"px";} 
  if(box=='B1'){document.getElementById("ASC_2").style.width=32+"px";}
  if(box=='B2'){document.getElementById("ASC_2").style.width=60+"px";}
  if(box=='B3'){document.getElementById("ASC_2").style.width=92+"px";}
  if(box=='B4'){document.getElementById("ASC_2").style.width=120+"px";}
  if(box=='B5'){document.getElementById("ASC_2").style.width=150+"px";}
  if(box=='B6'){document.getElementById("ASC_2").style.width=181+"px";}
  if(box=='B7'){document.getElementById("ASC_2").style.width=209+"px";}
  if(box=='B8'){document.getElementById("ASC_2").style.width=241+"px";}
  if(box=='B9'){document.getElementById("ASC_2").style.width=268+"px";}
  if(box=='B10'){document.getElementById("ASC_2").style.width=300+"px";}
}

function none_2(){
  document.getElementById("ASB_2").style.width=0+"px";
}
function close_write(){
	$('.write').css({'display':'none'});
	$('.GrayB').css({'display':'none'});
}
var bar=1;
function showbar(){
	if(bar%2!=0)
	{
		$('.dropdown').css({'display':'inline-block'});
		$('.top-list-lo').css({'display':'inline-block'});
		$('.dropdown7').css({'display':'inline-block !important'});
		bar=bar+1;
	}
	else{
		$('.dropdown').css({'display':'none'});
		$('.top-list-lo').css({'display':'none'});
		$('.dropdown7').css({'display':'none'});
		bar=bar+1;
	}
}
