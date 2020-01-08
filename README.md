# IndoorLocalization

작성일 : 2020.01.08 
작성자 : 강보찬 (Bo-kang) 
e-mail : ebfks0301@gmail.com 

---------------------------------------version Log-----------------------------------------------
ver 1.0 모니터링 서버 최초 완성 및 구동 확인(2020.01.08)\






-------------------------------------manual--------------------------------------------
1. 서버에서 모니터링을 할 경우 변경할 필요가 없으나 외부에서 모니터링을 할 경우에 views/index.ejs의 파일 내부의 IP주소를 서버의 IP주소로 변경해야함.

2. plotly, express, ejs를 install 후에 사용해야 함.

3.  /IndoorLocalization/1.csv
    /IndoorLocalization/2.csv
    /IndoorLocalization/3.csv
    /IndoorLocalization/4.csv 파일을 생성 후에 사용할 것.
    
4. 재실행 시 csv 파일을 위의 삭제/생성 후에 작동 시킬 것.

5. 실내 위치 측위를 통해 X,Y 값을 받아 오는 것은 /IndoorLocalization/routes/logics.js 내에 getPos함수에서 실행됨.

6. 그래프를 그리는 것은 polytly를 이용하여 그래프를 그림.
   보다 다양한 그래프를 그리고자 한다면 https://plot.ly/javascript/ 를 참조하도록 할 것.
