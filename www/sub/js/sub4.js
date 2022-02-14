// 메뉴
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
var navBarparent = navBar.parentElement;

console.log(navBarparent)

toggleButton.addEventListener('click', function () {
    navBarparent.classList.toggle('toggle');
});


// 아코디언
var acodian = {

  click: function (target) {
      var _self = this,
          $target = $(target);
      $target.on('click', function () {
          var $this = $(this);
          if ($this.next('dd').css('display') == 'none') {
              $('dd').slideUp();
              _self.onremove($target);

              $this.addClass('on');
              $this.next().slideDown();
          } else {
              $('dd').slideUp();
              _self.onremove($target);

          }
      });
  },
  onremove: function ($target) {
      $target.removeClass('on');
  }

};
acodian.click('dt');


// footer 검색
// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
  let userData = e.target.value; //user enetered data
  let emptyArray = [];
  if(userData){
      icon.onclick = ()=>{
          webLink = "https://www.google.com/search?q=" + userData;
          linkTag.setAttribute("href", webLink);
          console.log(webLink);
          linkTag.click();
      }
      emptyArray = suggestions.filter((data)=>{
          //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
          return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
      });
      emptyArray = emptyArray.map((data)=>{
          // passing return data inside li tag
          return data = '<li>'+ data +'</li>';
      });
      searchWrapper.classList.add("active"); //show autocomplete box
      showSuggestions(emptyArray);
      let allList = suggBox.querySelectorAll("li");
      for (let i = 0; i < allList.length; i++) {
          //adding onclick attribute in all li tag
          allList[i].setAttribute("onclick", "select(this)");
      }
  }else{
      searchWrapper.classList.remove("active"); //hide autocomplete box
  }
}

function select(element){
  let selectData = element.textContent;
  inputBox.value = selectData;
  icon.onclick = ()=>{
      webLink = "https://www.google.com/search?q=" + selectData;
      linkTag.setAttribute("href", webLink);
      linkTag.click();
  }
  searchWrapper.classList.remove("active");
}

function showSuggestions(list){
  let listData;
  if(!list.length){
      userValue = inputBox.value;
      listData = '<li>'+ userValue +'</li>';
  }else{
      listData = list.join('');
  }
  suggBox.innerHTML = listData;
}