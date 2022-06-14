$(document).ready(function(){

  


  //주메뉴 오버시 서브메뉴 풀다운 내리고 올리고...
  $(".top_nav").mouseenter(function(){ //주메뉴 영역에 오버시
    $(this).find(".topmenu>li>.smenu").stop().slideDown();
    $(".bg_box").stop().slideDown();
  });

  $(".header_in").mouseleave(function(){ //헤더 영역을 나갔을 때
    $(this).find(".topmenu>li>.smenu").stop().slideUp();
    $(".bg_box").stop().slideUp();
  });

   //주메뉴 오버시 서브박스 배경색 나오게 함
   $(".topmenu>li").hover(function(){
    $(this).find("ul").css({"background":"rgb(255,233,237,0.5)"});  
  },function(){
    $(this).find("ul").css({"background":"rgb(0, 0, 0, 0.0)"});  
  });


//주메뉴 오버시 서브bgbox의 왼쪽 이미지변경
$(".topmenu>li").hover(function(){
  old =0; //기존 보이는 이미지
  val=$(this).index();//새로 바뀌는 이미지
  
  $(".topimg li").eq(old).stop(true,true).hide("slow"); //기존 이미지는 숨기기
  $(".topimg li").eq(val).stop(true,true).show("slow"); //새로 선택된 이미지는 보이기
  old=val; //위에서 새로 바뀐 이미지는 다시 기존이미지에 저장

},function(){
  $(".topimg li").stop(true,true).hide();

});




//이미지 슬라이드___________________________________

let img_w = $(".slide ul li").width(); //이미지의 가로너비
  let img_n = $(".slide ul li").length; //이미지의 총개수  
  let oldidx = 0; //기존이미지
  let index = 0; //선택된 새이미지

  $(".slide ul li:last").prependTo(".slide ul");
  //갤러리의 마지막 이미지를 갤러리 안의 가장 앞으로 배치	
  $(".slide ul").css({
    left: -img_w
  });
  //갤러리를 하나의 이미지 가로길이 만큼 왼쪽으로 배치


  //index번째 비주얼이미지 출력하는 함수생성
  function slideImg(index, m) { //m은 prev와 next를 판단 

    if (m == 0) { //prev눌렀을때
      //이전 이미지가 슬라이드된후 마지막 이미지를 갤러리안의 제일 앞으로 배치	
      $(".slide ul").stop(true, true).animate({
        left: "+=" + img_w + "px"
      }, 600, "easeOutCubic", function () {
        $(".slide ul li:last").prependTo(".slide ul");
        $(".slide ul").css({
          left: -img_w
        }); //최종목적지
      });

    } else { //next눌렀을때
      //다음 이미지가 슬라이드된후 제일앞의 이미지를 갤러리안의 제일 마지막으로 배치
      $(".slide ul").stop(true, true).animate({
        left: "-=" + img_w + "px"
      }, 600, "easeOutCubic", function () {
        $(".slide ul li:first").appendTo(".slide ul");
        $(".slide ul").css({
          left: -img_w
        }); //최종목적지
      });

    }
    oldidx = index;
  }


  //슬라이드 자동함수 생성
  function slideAuto() {
    index++;
    if (index == img_n) {
      index = 0;
    }
    slideImg(index, 1);
  }

  auto = setInterval(slideAuto, 4000);


  //이전버튼 클릭
  $(".pre").click(function () {

    clearInterval(auto);

    index--;
    if (index < 0) {
      index = img_n - 1;
    }
    slideImg(index, 0);

    auto = setInterval(slideAuto, 4000);

  });


  //다음버튼 클릭
  $(".nex").click(function () {

    clearInterval(auto);

    index++;
    if (index >= img_n) {
      index = 0;
    }
    slideImg(index, 1);

    auto = setInterval(slideAuto, 4000);

  });







			
});