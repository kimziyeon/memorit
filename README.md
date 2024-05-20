# Memo-Rit [메모릿]
<p> 👤 Personal Project</p>
<p> 🗓️ 2024.03 ~ 2024.04</p>
<p>
  🔗 <a href="https://memorit-jiyeon.vercel.app/" target="_blank"> 배포 링크 바로가기</a>
</p>

<p>
  <img src="https://github.com/kimziyeon/memorit/assets/149509089/97548dc5-951b-43e2-bdc8-254a4d642e74"/>
</p>

<p>
<b>기억과 기록, 현재를 기억하고 기록하기 위한 프로젝트</b> <br/>
가장 기초적인 CRUD 프로젝트로, My SQL을 이용해 서버를 구축, 데이터를 연결하고 FireBase 스토리지로 이미지 첨부/삭제 기능을 적용하였습니다<br/>
북마크 기능을 추가해 우선순위의 메모를 상단에 배치하고 사용자가 메모의 색상을 선택할 수 있도록 컬러팔레트 기능을 추가하였습니다.<br/>
오늘의 날짜를 제공해 현재와 과거를 나눈 투두리스트를 완성하였습니다.
</p>


<h4> 🛠️ Technology Stack<h4>
<img src="https://img.shields.io/badge/next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black"/>
<img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>

<h4> 🔥 트러블슈팅</h4>
<p>
  Memo-rit 투두리스트는 날짜별로 나열되고 어제, 과거의 할일은 하단으로 내려가는 방식으로 노출된다.<br/>
  데이터에 filter를 걸어 최근 날짜순으로 나열되도록 하였는데 지나간 할일마다 다 날짜가 붙는 에러가 생겼다.<br/>
  예를들어 어제 할일이 세개였다면 그 할일마다 다 어제의 날짜데이터가 노출되는 문제!<br/>
  <br/>
  <b>if(Object.keys(d).includes(date))</b><br/>
  <br/>
  즉, forEach문을 통해 출력하면서 pastData(지나간날짜데이터)를 d객체로 변환하고<br/>
  그 변환한 d객체를 includes로 특정문자열 유무를 확인해 노출하도록 하였다.<br/>
  date가 없다면 그대로 date를 출력하고, 이미 date가 있다면 date를 출력하지 않는다.<br/>
</p>
<p>
  <img src="https://github.com/kimziyeon/memorit/assets/149509089/ec4eeee6-da30-43eb-8578-967d4d2f6121"/>
</p>

  
<h4> 💬 후기</h4>
<p>
  '이게 편할까?', '이 버튼이 굳이 필요할까?' 내가 직접 사용자가 되어 불편함을 찾아가는 과정에서 UX/UI를 많이 수정했고,<br/>
  내가 공부도 하면서 에러를 찾아 해결하고 무언가를 내 손으로 만들었다는 뿌듯함이 제일 컸다.<br/>
</p>
  
