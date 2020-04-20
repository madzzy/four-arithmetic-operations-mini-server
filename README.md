# 사칙연산을 하는 미니 server
서버를 켠 후 client - index.html에서
숫자를 입력하면 서버에서 사칙연산을 수행합니다.
<br>
<br>
<br>
## 서버(server)
***
### 서버 정보
ip='localhost', port=5000 <br>
주소: http://localhost:5000 <br>
 <br>
## 서버 구동하기
터미널에 아래의 명령어를 입력합니다. <br>
node server/no-express-server.js <br>

### API문서
method **'POST'** <br>
1. '/add' : 더하기
Example
요청: 
fetch(`http://localhost:5000/${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'text/json'
      }
 })
응답:

2. '/subtract' : 빼기
3. '/multiply' : 곱하기
4. '/divide' : 나누기



<br>
<br>
<br>
## 클라이언트(client)
***
index.html 파일 열기
