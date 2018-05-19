/**
 *               ii.                                         ;9ABH,          
 *              SA391,                                    .r9GG35&G          
 *              &#ii13Gh;                               i3X31i;:,rB1         
 *              iMs,:,i5895,                         .5G91:,:;:s1:8A         
 *               33::::,,;5G5,                     ,58Si,,:::,sHX;iH1        
 *                Sr.,:;rs13BBX35hh11511h5Shhh5S3GAXS:.,,::,,1AG3i,GG        
 *                .G51S511sr;;iiiishS8G89Shsrrsh59S;.,,,,,..5A85Si,h8        
 *               :SB9s:,............................,,,.,,,SASh53h,1G.       
 *            .r18S;..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,....,,.1H315199,rX,       
 *          ;S89s,..,,,,,,,,,,,,,,,,,,,,,,,....,,.......,,,;r1ShS8,;Xi       
 *        i55s:.........,,,,,,,,,,,,,,,,.,,,......,.....,,....r9&5.:X1       
 *       59;.....,.     .,,,,,,,,,,,...        .............,..:1;.:&s       
 *      s8,..;53S5S3s.   .,,,,,,,.,..      i15S5h1:.........,,,..,,:99       
 *      93.:39s:rSGB@A;  ..,,,,.....    .SG3hhh9G&BGi..,,,,,,,,,,,,.,83      
 *      G5.G8  9#@@@@@X. .,,,,,,.....  iA9,.S&B###@@Mr...,,,,,,,,..,.;Xh     
 *      Gs.X8 S@@@@@@@B:..,,,,,,,,,,. rA1 ,A@@@@@@@@@H:........,,,,,,.iX:    
 *     ;9. ,8A#@@@@@@#5,.,,,,,,,,,... 9A. 8@@@@@@@@@@M;    ....,,,,,,,,S8    
 *     X3    iS8XAHH8s.,,,,,,,,,,...,..58hH@@@@@@@@@Hs       ...,,,,,,,:Gs   
 *    r8,        ,,,...,,,,,,,,,,.....  ,h8XABMMHX3r.          .,,,,,,,.rX:  
 *   :9, .    .:,..,:;;;::,.,,,,,..          .,,.               ..,,,,,,.59  
 *  .Si      ,:.i8HBMMMMMB&5,....                    .            .,,,,,.sMr 
 *  SS       :: h@@@@@@@@@@#; .                     ...  .         ..,,,,iM5 
 *  91  .    ;:.,1&@@@@@@MXs.                            .          .,,:,:&S 
 *  hS ....  .:;,,,i3MMS1;..,..... .  .     ...                     ..,:,.99 
 *  ,8; ..... .,:,..,8Ms:;,,,...                                     .,::.83 
 *   s&: ....  .sS553B@@HX3s;,.    .,;13h.                            .:::&1 
 *    SXr  .  ...;s3G99XA&X88Shss11155hi.                             ,;:h&, 
 *     iH8:  . ..   ,;iiii;,::,,,,,.                                 .;irHA  
 *      ,8X5;   .     .......                                       ,;iihS8Gi
 *         1831,                                                 .,;irrrrrs&@
 *           ;5A8r.                                            .:;iiiiirrss1H
 *             :X@H3s.......                                .,:;iii;iiiiirsrh
 *              r#h:;,...,,.. .,,:;;;;;:::,...              .:;;;;;;iiiirrss1
 *             ,M8 ..,....,.....,,::::::,,...         .     .,;;;iiiiiirss11h
 *             8B;.,,,,,,,.,.....          .           ..   .:;;;;iirrsss111h
 *            i@5,:::,,,,,,,,.... .                   . .:::;;;;;irrrss111111
 *            9Bi,:,,,,......                        ..r91;;;;;iirrsss1ss1111
 */

var base = './';
Array.prototype.ArrEach = function(func) {
	var arr = this;
	try {
		arr.forEach(function(v, i) {
			func(v, i)
		})
	} catch (e) {
		for (var i = 0; i < arr.length; i++) {
			func(arr[i], i)
		}
	}
}

Array.prototype.unRecur = function() {
	var res = [this[0]];
	for (var i = 1; i < this.length; i++) {
		var repeat = false;
		for (var j = 0; j < res.length; j++) {
			if (this[i] == res[j]) {
				repeat = true;
				break;
			}
		}
		if (!repeat) {
			res.push(this[i]);
		}
	}
	return res;
}

Array.prototype.removeByValue = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) {
			this.splice(i, 1);
			break;
		}
	}
}
String.prototype.isPhone = function() {
	var phone = this + '',
		re = /^1[34578]\d{9}$/;
	if (phone.length != 11 || !phone.match(re)) {
		return false;
	} else {
		return true;
	}
}
window.consoleLog = function(text, data) {
	try {
		console.log(text, data)
	} catch (e) {}
}
window.JSHandle = {
	// 获取URL参数
	getUrlParam: function() {
		var obj = {};
		var url = window.location;
		obj.hash = url.hash.replace('#', '');
		obj.param = {};
		var arr = url.search.slice(1).split('&');
		for (var i = 0; i < arr.length; i++) {
			var temp = arr[i].split('=');
			obj.param[temp[0]] = temp[1];
		}
		return obj
	},
	deepCopy: function(obj) {
		return JSON.parse(JSON.stringify(obj));
	},
	getData: function(obj) {
		$('.loading').removeClass('dn')
		$('body').append('<div class="api_cover"></div>')
		$.ajax({
			url: base + obj.url,
			type: obj.type || 'POST',
			dataType: obj.dataType || 'json',
			data: (obj.type == 'GET' ? obj.data : JSON.stringify(obj.data)),
			contentType: (obj.type == 'GET' ? '' : "application/json"),
			success: function(msg) {
				$('.loading').addClass('dn')
				$('.api_cover').remove();
				// $('.cover').addClass('dn')
				if (!msg.success) {
					switch (msg.code) {
						case 898:
							JSHandle.alert('登陆失效，请重新登录！3s后跳转登陆！', 'error')
							break;
						default:
							JSHandle.alert(msg.message, 'error')
							break;
					}
				} else {
					obj.success(msg);
				}
			},
			error: function(e) {
				console.log(e)
				if (obj.error) {
					obj.error(e)
				}
			}
		})
	},
	// cookie
	cookie: {
		get: function(a) {
			var b = null;
			var c = new RegExp('(^| )' + a + '=([^;]*)(;|\x24)'),
				result = c.exec(document.cookie);
			if (result) {
				b = result[2] || ''
			}
			if ('string' == typeof b) {
				b = decodeURIComponent(b);
				return b
			}
			return ''
		},
		set: function(a, b, c) {
			c = c || {};
			b = encodeURIComponent(b);
			var d = c.expires;
			if ('number' == typeof c.expires) {
				d = new Date();
				d.setTime(d.getTime() + c.expires)
			}
			document.cookie = a + '=' + b + (c.path ? '; path=' + c.path : '') + (d ? '; expires=' + d.toGMTString() : '') + (c.domain ? '; domain=' + c.domain : '') + (c.secure ? '; secure' : '')
		},
		del: function(name, path, domain) {
			//if (this.get(name))
			document.cookie = name + "=" + ((path) ? "; path=" + path : "; path=/") + ((domain) ? "; domain=" + domain : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
		}
	},
	// localStorage
	history: {
		isLocalStorage: window.localStorage ? true : false,
		set: function(key, value) { //设置缓存
			if (this.isLocalStorage) {
				window.localStorage.setItem(key, JSON.stringify(value));
			}
		},
		get: function(key) { //读取缓存
			if (this.isLocalStorage) {
				return JSON.parse(window.localStorage.getItem(key));
			} else {
				return null;
			}
		},
		del: function(key) {
			if (this.isLocalStorage) {
				localStorage.removeItem(key);
			}
		}
	},
	alert: function(msg, type) {
		var time = new Date().getTime();
		$('.tips').remove();
		type = type || 'success';
		$('body').append('<div class="tips '+ type +' '+ time +'">'+ msg +'</div>');
		setTimeout(function() {
			$('.'+ time).remove();
		}, 3000)
	}
}

$(document).ready(function() {
	(function($) {
		$.fn.extend({
			insertContent: function(myValue, t) {
				var $t = $(this)[0];
				if (document.selection) { //ie
					this.focus();
					var sel = document.selection.createRange();
					sel.text = myValue;
					this.focus();
					sel.moveStart('character', -l);
					var wee = sel.text.length;
					if (arguments.length == 2) {
						var l = $t.value.length;
						sel.moveEnd("character", wee + t);
						t <= 0 ? sel.moveStart("character", wee - 2 * t - myValue.length) : sel.moveStart("character", wee - t - myValue.length);
						sel.select();
					}
				} else if ($t.selectionStart || $t.selectionStart == '0') {
					var startPos = $t.selectionStart;
					var endPos = $t.selectionEnd;
					var scrollTop = $t.scrollTop;
					$t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos, $t.value.length);
					this.focus();
					$t.selectionStart = startPos + myValue.length;
					$t.selectionEnd = startPos + myValue.length;
					$t.scrollTop = scrollTop;
					if (arguments.length == 2) {
						$t.setSelectionRange(startPos - t, $t.selectionEnd + t);
						this.focus();
					}
				} else {
					this.value += myValue;
					this.focus();
				}
			}
		})
	})(jQuery);
})