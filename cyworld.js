const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const backgroundMusicLink = document.getElementById("backgroundMusic");
const skinLink = document.getElementById("skin");
const fontLink = document.getElementById("font");
const minimiLink = document.getElementById("minimi");
const storyroomLink = document.getElementById("storyroom");


document.addEventListener("DOMContentLoaded", function() {
  const refresh = document.getElementById("refresh");

  refresh.addEventListener("click", function() {
    location.reload(); // 페이지 새로고침
  });
}); //메인 로고 이미지 누르면 페이지가 새로고침됨


// 검색 버튼 클릭 및 Enter 키 누름 이벤트 처리
searchButton.addEventListener("click", search);
searchInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    search();
  }
});

function search() {
  const searchText = searchInput.value;

  // 검색어를 사용하여 새 창을 엽니다.
  const newPage = window.open('', '_blank');

  // 열린 새 창에 빈 페이지를 작성합니다.
  newPage.document.open();
  newPage.document.write("<html><head><title>검색 결과</title></head><body><h1>검색 결과 페이지</h1></body></html>");
  newPage.document.close();
}
// 검색어를 입력 후 엔터 치거나 클릭하면 빈페이지가 나옴

backgroundMusicLink.addEventListener("click", function() {
  window.open("background_music.html", "_blank");
});

skinLink.addEventListener("click", function() {
  window.open("skin.html", "_blank");
});

fontLink.addEventListener("click", function() {
  window.open("font.html", "_blank");
});

minimiLink.addEventListener("click", function() {
  window.open("minimi.html", "_blank");
});

storyroomLink.addEventListener("click", function() {
  window.open("storyroom.html", "_blank");
});