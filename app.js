function FirebaseChat(){
  this.init();
  this.initEvent();
}

FirebaseChat.prototype.init = function(){
  // this.auth = firebase.auth();
  // this.liGoogleBtn = document.getElementById('liGoogleBtn');
}

FirebaseChat.prototype.initEvent = function(){
  // this.liGoogleBtn.addEventListener('click', this.onGoogleBtnClick.bin(this));
  // this.auth.onAuthStateChanged(this.onAuthChange.bind(this));
}

FirebaseChat.prototype.onGoogleBtnClick = function(){
  //var googleProvider = new firebase.auth.GoogleAuthProvider();

}


document.addEventListener("DOMContentLoaded", function(){
  
  window.fbChat = new FirebaseChat();

  //다운로드 프로그레스 팝업 modal 설정
  $('#dnModal').modal();
  //채팅방 초대 modal 설정
  $('#dvAddUser').modal();





  
  // if(navigator.serviceWorker){
  //   navigator.serviceWorker.register('/firebase-messaging-sw.js')
  //       .then(function(reg){console.log('서비스워커 등록성공 :', reg)})
  //       .catch(function(error){console.log('서비스워커 등록실패 :', error)});
  // }

    function writeUserData(userId, name, email) {
      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        //profile_picture : imageUrl
      });
    }
  
    function insetKeyword(keyword) {
      firebase.database().ref('keywords/' + keyword).set({
        //datetime: Firebase.ServerValue.TIMESTAMP,
        count: 1,
        //username: name,
        //email: email,
        //profile_picture : imageUrl
      });
    }






  
    // console.log(firebase.app().name);
    var database = firebase.database();
    // console.log(defaultDatabase);
    // console.log(firebase.auth().currentUser.uid);
    // writeUserData('saintsad','Ham dong wook','saintsad@gmail.com')
    // insetKeyword('fds');
  
  
  
    var q = document.querySelector('#q');
    q.focus();
    q.addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) { // 13 is enter
        //todo: 검색히스토리 로컬스토리지
        var u;
        var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        var t = this.value;
  
        if (t.match(regex)) {
          //todo: http 시작유무
          u = "http://"+t;
        } else {
          u = "https://www.google.com/search?q="+t;
          insetKeyword(t);
        } 
        
        location.href = encodeURI(u);
        }
    });
  
    var x = document.getElementsByTagName("A");
    for(var i=0; i<x.length;i++){
      var item = x.item(i);
      var cnt = localStorage.getItem(item.getAttribute("title"));
      if(cnt){
        var tn = document.createElement('span');
        var tnt = document.createTextNode('('+cnt+')');
        tn.appendChild(tnt); 
        item.appendChild(tn);
      }
  
      item.addEventListener('click', function (e) {
        var count = localStorage.getItem(this.getAttribute("title"));
        count++;
        localStorage.setItem(this.getAttribute("title"),count); 
        //e.preventDefault();
  
      });
      
    }
    
    //document.querySelectorAll("a")
    //console.log(x.length);
  
    //var sections = document.querySelectorAll("#sections , #sections .section");
    //console.log(sections.constructor.name)
    //for( var i = 0; i < sections.length; i++ ){
    //    var item = sections.item(i);
    //    item.style.border = "1px solid #ff0000";
    //}
  
  
});