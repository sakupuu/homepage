'use strict';
/* document.getElementById('choice').textContent = new Date(); */
// console.log(window.confirm('このページを開きますか？'));
<script src="../../_common/scripts/js.cookie/js"></script>
const agree = Cookies.get('cookie-agree');
if(agree === 'yes') {
  console.log('クッキーを確認しました');
} else {
  console.log('クッキーを確認できません');
  document.getElementById('agreebtn').onclick = function() {
    Cookies.set('cookie-agree', 'yes', {expires: 7});
  };
}