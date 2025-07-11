# React 기반의 TodoApp 만들기
이번 주 팀 활동 목표는 React 기반의 TodoApp 만들기이다. 각자가 기능을 구현한 후, GitHub에 PR(Pull Request)을 생성하고 팀원들과 코드리뷰를 통해 서로의 코드를 검토하고 피드백하는 경험을 쌓는 것이 핵심이다.
협업 도구(GitHub, 노션, 슬랙)를 적극적으로 활용해 개발 → 리뷰 → 피드백 전 과정을 실습해보는것이 목표다.


## 시작화면
![image](https://github.com/user-attachments/assets/27b7ef3d-07d3-485d-8ed7-6abaaff6c70f)



## 전체 기능 요약
| 기능           |설명                           |
|----------------|-------------------------------|
|할 일 추가       |텍스트 입력 후 버튼 클릭 시 리스트에 항목 추가           |
|할 일 삭제       |항목의 삭제 버튼 클릭 시 해당 항목 제거       |
|완료 체크        |체크박스를 클릭하면 완료 여부 표시 (스타일 변화 포함)|
|localStorage 저장|추가/삭제/체크 시 변경된 todo 상태를 localStorage에 저장|
|초기 로드        |앱 실행 시 localStorage에서 데이터를 불러와 렌더링|
