"use strict";
  // DOM LOADED
  window.addEventListener('DOMContentLoaded', function () {
    var image = el('image');
    var input = el('inputIMG');
    var imgout = el('imgout');
     var baseurl = el('duong_dan').value;
    var $modal = $('#imgModal');
    var cropper;

    // show/hide modal
    $modal.on('shown.bs.modal', function () {
      updateData();
      console.log(w);

      cropper = new Cropper(image, {
        aspectRatio: ratio,
        viewMode: 1,
      });
    }).on('hidden.bs.modal', function () {
      cropper.destroy();
      cropper = null;
    });

    // input change
    input.addEventListener('change',function(){
      document.getElementById('chonanh').textContent = 'Chọn ảnh khác';

      updateData();
      console.log(w+'-'+h);

      // destroy exists cropper
      cropper.destroy();
      cropper = null;

      var file = this.files[0];  
      var image = document.getElementById('image');
          image.src = URL.createObjectURL(file);

      var done = function (url) {
            input.value = '';
            image.src = url;
          };
                    
      var reader;
      var file;
      var url;

      if (URL) {
        done(URL.createObjectURL(file));
      } else if (FileReader) {
        reader = new FileReader();
        reader.onload = function (e) {
          done(reader.result);
        };
        reader.readAsDataURL(file);
      }

      // callback Cropper
      cropper = new Cropper(image, {
        aspectRatio: ratio,
        viewMode: 1,
      });

      document.getElementById('cropanh-container').classList.remove("d-none");
    });  // end change
    

    // Crop ảnh
    document.getElementById('crop').addEventListener('click',function(){
      this.textContent = 'Cắt ảnh...';
      document.getElementById('upanh').textContent = 'Chọn ảnh khác';


      var croppedCanvas = cropper.getCroppedCanvas();


      croppedCanvas.toBlob(function(blob) {
          var url = URL.createObjectURL(blob);
          el('anhcrop').src = url;
	  el('maunen').value = url;
	  el('maunencrop').value = url;
	  el('anhcrop2').src = url; 
      });



      setTimeout(function(){
        document.getElementById('crop').textContent = 'Cắt ảnh';
        // ẩn modal
        $modal.modal('hide');
      },40);      
    });


    document.getElementById('rotate-left').addEventListener('click',function(){
      cropper.rotate(-90);
    });

    document.getElementById('rotate-right').addEventListener('click',function(){
      cropper.rotate(90);
    });

    document.getElementById('flip-h').addEventListener('click',function(){
      cropper.scale(-1, 1); // Flip horizontal
    });

    document.getElementById('flip-v').addEventListener('click',function(){
      cropper.scale(1, -1); // Flip vertical
    });

    // change imgout style
   



    // dragable scroller-type
    const slider = document.querySelector('.scroller-type');
    let mouseDown = false;
    let startX, scrollLeft;

    let startDragging = function (e) {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    let stopDragging = function (event) {
      mouseDown = false;
    };

    slider.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if(!mouseDown) { return; }
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });

    // Add the event listeners
    slider.addEventListener('mousedown', startDragging, false);
    slider.addEventListener('mouseup', stopDragging, false);
    slider.addEventListener('mouseleave', stopDragging, false);


  }); // end DOM

  // active scroller-type mauanh
    var mauanhs = document.querySelectorAll('.scroller-type .mauanh');
    for(var i = 0; i< mauanhs.length; i ++) {
      mauanhs[i].addEventListener('click',function(){
        for (var j = 0; j< mauanhs.length; j ++) {
          mauanhs[j].classList.remove('active');
        }
        this.classList.add('active');
      });
    }



function el(e) {
    return document.getElementById(e)
}
function copyToClipBoard(e) {
    var t, n, o, a, l = document;
    e = l.createTextNode(e), t = window, n = l.body, n.appendChild(e), n.createTextRange ? (o = n.createTextRange(), o.moveToElementText(e), o.select(), l.execCommand("copy")) : (o = l.createRange(), a = t.getSelection, o.selectNodeContents(e), a().removeAllRanges(), a().addRange(o), l.execCommand("copy"), a().removeAllRanges()), e.remove()
}
function copyElementToClipboard(e) {
    window.getSelection().removeAllRanges();
    var t = document.createRange();
    t.selectNode("string" == typeof e ? document.getElementById(e) : e), window.getSelection().addRange(t), document.execCommand("copy"), window.getSelection().removeAllRanges()
}

function b64EncodeUnicode(e) {
    return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(e, t) {
        return String.fromCharCode("0x" + t)
    }))
}
function b64DecodeUnicode(e) {
    return decodeURIComponent(atob(e).split("").map(function(e) {
        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
    }).join(""))
}
function copyText() {
    if (document.getElementById("source_txt")) {
        var e = document.getElementById("source_txt");
        e.select(), e.setSelectionRange(0, 99999), document.execCommand("copy")
    }
}
function idleLogout() {
    function e() {
        window.location.reload()
    }

    function t() {
        clearTimeout(n), n = setTimeout(e, 6e5)
    }
    var n;
    window.onload = t, window.onmousemove = t, window.onmousedown = t, window.ontouchstart = t, window.ontouchmove = t, window.onclick = t, window.onkeydown = t, window.addEventListener("scroll", t, !0)
}
var utf8ToBin, binToUtf8, ajax_url, base_url, tooltipTriggerList, tooltipList, source_txt, popoverTriggerList, popoverList;

 ajax_url = document.getElementById("ajax_url").value, base_url = document.getElementById("base_url").value, tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')), 
function() {
        if (feather.replace(), count_words(), idleLogout(), document.getElementById("wheel-container")) {
            loadWheel();
            var e = getCookie("wheel_list");
            e && createButtonFromCookies(e)
        }
    }();

 
var _0xf9c7=["\x69\x70\x68\x6F\x6E\x65","\x69\x6E\x64\x65\x78\x4F\x66","\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65","\x75\x73\x65\x72\x41\x67\x65\x6E\x74","\x53\x61\x66\x61\x72\x69","\x61\x6E\x64\x72\x6F\x69\x64","\x47\x6F\x6F\x67\x6C\x65\x20\x43\x68\x72\x6F\x6D\x65","\uD83D\uDD25\x20\x54\x72\xEC\x6E\x68\x20\x64\x75\x79\u1EC7\x74\x20\uD83D\uDD38\x20","\x20\uD83D\uDD38\x20\x6B\x68\xF4\x6E\x67\x20\x68\u1ED7\x20\x74\x72\u1EE3\x20\x63\x68\u1ECD\x6E\x20\u1EA3\x6E\x68\x2C\x20\x74\u1EA3\x69\x20\u1EA3\x6E\x68\x2E\x20\x42\u1EA1\x6E\x20\x76\x75\x69\x20\x6C\xF2\x6E\x67\x20\x73\u1EED\x20\x64\u1EE5\x6E\x67\x20\x74\x72\xEC\x6E\x68\x20\x64\x75\x79\u1EC7\x74\x20","\x20\u0111\u1EC3\x20\x74\u1EA1\x6F\x20\u1EA3\x6E\x68\x20\x6E\x68\xE9\x20\uD83D\uDE2D\x2E\x20\x42\u1EA1\x6E\x20\x6E\x68\u1EA5\x6E\x20\x64\u1EA5\x75\x20\x33\x20\x63\x68\u1EA5\x6D\x20\x74\x72\xEA\x6E\x20\x67\xF3\x63\x20\x70\x68\u1EA3\x69\x20\x72\u1ED3\x69\x20\x63\x68\u1ECD\x6E\x20\x4D\u1EDF\x20\x74\x72\x6F\x6E\x67\x20\x74\x72\xEC\x6E\x68\x20\x64\x75\x79\u1EC7\x74","\x7A\x61\x6C\x6F","\x5A\x61\x6C\x6F","\x66\x62","\x46\x61\x63\x65\x62\x6F\x6F\x6B","\x69\x6E\x73\x74\x61\x67\x72\x61\x6D","\x49\x6E\x73\x74\x61\x67\x72\x61\x6D","\x67\x73\x61","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x27\x66\x61\x73\x20\x66\x61\x2D\x65\x78\x63\x6C\x61\x6D\x61\x74\x69\x6F\x6E\x2D\x63\x69\x72\x63\x6C\x65\x27\x3E\x3C\x2F\x69\x3E\x20\x48\xE3\x79\x20\x73\u1EED\x20\x64\u1EE5\x6E\x67\x20\x74\x72\xEC\x6E\x68\x20\x64\x75\x79\u1EC7\x74\x20\x47\x6F\x6F\x67\x6C\x65\x20\x43\x68\x72\x6F\x6D\x65\x20\u0111\u1EC3\x20\x74\u1EA3\x69\x20\u1EA3\x6E\x68","\x61\x66\x74\x65\x72","\x23\x6A\x61\x6E\x73\x68\x61\x72\x65","\x63\x72\x69\x6F\x73","\x48\xE3\x79\x20\x73\u1EED\x20\x64\u1EE5\x6E\x67\x20\x74\x72\xEC\x6E\x68\x20\x64\x75\x79\u1EC7\x74\x20\x53\x61\x66\x61\x72\x69\x20\u0111\u1EC3\x20\x74\u1EA3\x69\x20\u1EA3\x6E\x68"];function thongbaotrinhduyet(_0x531fx2){var _0x531fx3;var _0x531fx4=navigator[_0xf9c7[3]][_0xf9c7[2]]()[_0xf9c7[1]](_0xf9c7[0])>  -1;if(_0x531fx4){var _0x531fx3=_0xf9c7[4]};var _0x531fx5=navigator[_0xf9c7[3]][_0xf9c7[2]]()[_0xf9c7[1]](_0xf9c7[5])>  -1;if(_0x531fx5){var _0x531fx3=_0xf9c7[6]};alert(_0xf9c7[7]+ _0x531fx2+ _0xf9c7[8]+ _0x531fx3+ _0xf9c7[9])}var es_zalo=navigator[_0xf9c7[3]][_0xf9c7[2]]()[_0xf9c7[1]](_0xf9c7[10])>  -1;if(es_zalo){thongbaotrinhduyet(_0xf9c7[11])};var es_fb=navigator[_0xf9c7[3]][_0xf9c7[2]]()[_0xf9c7[1]](_0xf9c7[12])>  -1;if(es_fb){thongbaotrinhduyet(_0xf9c7[13])};var es_ins=navigator[_0xf9c7[3]][_0xf9c7[2]]()[_0xf9c7[1]](_0xf9c7[14])>  -1;if(es_ins){thongbaotrinhduyet(_0xf9c7[15])};var es_gsa=navigator[_0xf9c7[3]][_0xf9c7[2]]()[_0xf9c7[1]](_0xf9c7[16])>  -1;if(es_gsa){$(_0xf9c7[19])[_0xf9c7[18]](_0xf9c7[17])};var es_crios=navigator[_0xf9c7[3]][_0xf9c7[2]]()[_0xf9c7[1]](_0xf9c7[20])>  -1;if(es_crios){$(_0xf9c7[19])[_0xf9c7[18]](_0xf9c7[21])}

