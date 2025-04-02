function showhtml() {
  document.getElementById('fig').src = 'sniffing.png'
  document.getElementById('desc').innerHTML =
    '정보보호(Information Security)란 정보의 수집, 가공, 저장, 검색, 송신, 수신 중에 정보의 훼손, 변조, 유출 등을 방지하기 위한 관리적·기술적 수단 또는 그러한 수단으로 이루어지는 행위를 말한다. 정보보호학전공에서는 체계적인 교육과정, 젊고 우수한 교수진, 완벽한 실험실습교육 기반을 갖추, 이론과 실무를 겸비한 정보보호 분야의 전문가를 양성한다.'
}

function showcss() {
  document.getElementById('fig').src = 'image/css.png'
  document.getElementById('desc').innerHTML =
    '<b>CSS</b>는 문서의 스타일을 지정하기 위한 언어이다.'
}

function showjs() {
  document.getElementById('fig').src = 'image/js.png'
  document.getElementById('desc').innerHTML =
    '<b>Javascript</b>는 웹을 위한 프로그램이 언어이며 웹문서에서 동작을 실행할 수 있게 한다.'
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
