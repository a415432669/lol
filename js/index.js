
/* �ർ�� ���� S */
function slide(e) {
	var offset = $(e).offset().top;
	$("html,body").animate({
		"scrollTop": offset
	});
}

var sideA = $('.side-ul a');
sideA.click(function() {
	var idx = sideA.index(this);
	if(idx == 4) return;
	sideA.removeClass('on');
	sideA.eq(idx).addClass('on');

});

$('.wrap2 a').click(function() {
	var idx = $('.wrap2 a').index(this);
	$('.wrap2 a .contbtn').removeClass('on')
	$('.wrap2 a .contbtn').eq(idx).addClass('on')
})

var video = document.getElementById('video')
$('.music-btn').click(function() {
	video.muted = true
	$('.music-btn').css('display', 'none')
	$('.close-btn').css('display', 'block')
})
$('.close-btn').click(function() {
	video.muted = false
	$('.close-btn').css('display', 'none')
	$('.music-btn').css('display', 'block')
})

$('#question1 a').click(function() {
	var idx = $('#question1 a').index(this);
	$('#question1 a').removeClass('on').eq(idx).addClass('on')
})

$('#question2 a').click(function() {
	var idx = $('#question2 a').index(this);
	$('#question2 a').removeClass('on').eq(idx).addClass('on')
})

// $(function() {
// 	var scrollKey1 = true;
// 	var scrollTop;
// 	if(scrollTop>=600){
// 		$('.side').fadeIn();
// 	}else{
// 		$('.side').fadeOut();
// 	}
// 	$(window).scroll(function() {
// 		scrollTop = $(window).scrollTop();
// 		// console.log(scrollTop);
// 		if(scrollTop>=600){
// 			$('.side').fadeIn();
// 		}else{
// 			$('.side').fadeOut();
// 		}
// 	});

// });

$('.side-ul a').click(function() {
	pgvSendClick({
		hottag: 'act.a20170928fan.btn.sidebtn'
	});
});

// �������
function TGDialogS(e) {
	need("biz.dialog-min", function(Dialog) {
		Dialog.show({
			id: e,
			bgcolor: '#000', //���������֡�����ɫ����ʽΪ"#FF6600"�����޸ģ�Ĭ��Ϊ"#fff"
			opacity: 50 //���������֡���͸���ȣ���ʽΪ��10-100������ѡ
		});
	});
}

function closeDialog() {
	need("biz.dialog-min", function(Dialog) {
		Dialog.hide();
	});
}

function Vid(vid) {
	var player = new Txplayer({
		containerId: 'container',
		vid: vid,
		width: '1000',
		height: '580',
		autoplay: true
	});

	TGDialogS('video-pop')
}

