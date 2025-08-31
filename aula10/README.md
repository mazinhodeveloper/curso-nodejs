Aula: 10 
Data: 09/08/2025 
Docente: Wanderson Guimaraes / wanderson.cfguimarae@senacsp.edu.br 
GitHub: https://github.com/alunosnodesenac/Aulas-Node/tree/main 
Terminal: git clone https://github.com/alunosnodesenac/Aulas-Node.git


# Continuação da aula08 / aula09 

## STARTING AULA 08 ## Continue AULA 09 ## Continue AULA 10 

# USING TERMINAL 
## backend-marketapi 
npm init 

### ESTRUTURA 
    config/ 
      db.js 
    controllers/ 
      authController.js 
      categoryController.js 
      orderController.js 
      productController.js 
    middleware/ 
      authMiddleware.js 
    models/ 
      Category.js 
      Order.js 
      Product.js 
      User.js 
    routes/ 
      authRoutes.js 
      categoryRoutes.js 
      orderRoutes.js 
      productRoutes.js 
    .env 
    .package.json 
    server.js 

## USING TERMINAL 
npm install express mongoose bcryptjs jsonwebtoken dotenv 

### .ENVIRONMENT 
.env
  PORT=5000
  MONGO_URI=mongodb://localhost:27017/marketdb
  JWT_SECRET=sua_chave_secreta




# USING OR RESTARTING TERMINAL 
## backend-marketapi  
npm install 
npm i nodemon
npm list 
npm run start 




# MongoDB - Atlas 
https://cloud.mongodb.com/v2/
USER: usuario
PASS: senha


# MongoDB for VSCode 
mongodb+srv://usuario:senha@cluster.xyz.mongodb.net/ 



# USING TERMINAL 
cd backend-marketapi 

## DEV 
npm i 
npm run dev 











############ Old 


## PASTA: aula8
Aula: 8 
Data: 26/07/2025 


https://github.com/alunosnodesenac/Aulas-Node


# RODAR AS DUAS PASTAS JUNSTAS
# USING TERMINAL 

## aula09
mpm i 
npm run start 
npm run dev





# RODANDO 
http://localhost:5000 


# TESTE ROTAS / POSTMAN 
POST http://localhost:5000 
GET http://localhost:5000/products 


# SELECT ... BODY / RAW 
POST http://localhost:5000/auth/register 
{
    "name": "admin",
    "email": "admin@admin.com",
    "password": "admin123"
}

# SELECT ... BODY / RAW 
POST http://localhost:5000/auth/login 
{
    "name": "admin",
    "email": "admin@admin.com",
    "password": "admin123"
},
{
    "name": "node",
    "email": "node@node.com",
    "password": "node123"
}

#### ANSWER 
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OTc1OGNjYzY4OWVhZDM1ZDZmMjZlNyIsImlhdCI6MTc1NDc1MDk3Mn0.H3y1I6Rp0Hd_0sDL5cKl7W-Wqak6BHv0gr6lI6oGl0k"
}

#### GERAR OUTRO TOKEN 
POST http://localhost:5000/auth/login
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OTc1OGNjYzY4OWVhZDM1ZDZmMjZlNyIsImlhdCI6MTc1NDc1MTcyNn0.vtgDfsFJt0lVlq-130Qo3XgLA9fDdQPGISV9_ecIOw4"
}

# SELECT ... BODY / RAW 
POST http://localhost:5000/categories 

# Bearer Token 
{
    "name": "legumes"
}

# OTHER 
# Bearer Token 
{
    "name": "frutas"
}

# SELECT ... BODY / RAW 
POST http://localhost:5000/products 
{
    "name": "BATATA",
    "price": "10.00",
    "category": "legumes"
},
{
    "name": "alface",
    "price": "10.00",
    "category": "legumes"
}

# SELECT ... BODY / RAW 
POST http://localhost:5000/products 
{
    "name": "Maçã",
    "price": "5.00",
    "category": "frutas"
}, 
{
    "name": "Laranja",
    "price": "5.00",
    "category": "frutas"
}

# SELECT ... BODY / RAW 
POST http://localhost:5000/orders 
{
    "user": "admin",
    "products": "laranjada",
    "total": 20
}









## Udemy Cursos 
https://www.udemy.com/courses/search/?src=ukw&q=curso+de+javascript+e+typescript 
https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado 
https://www.udemy.com/course/javascript-completo-2018-do-iniciante-ao-mestre 
https://www.udemy.com/course/curso-basico-de-typescript 

## YouTube 
https://www.youtube.com/results?search_query=nodejs 
https://www.youtube.com/watch?v=TlB_eWDSMt4 
https://www.youtube.com/watch?v=32M1al-Y6Ag 
https://www.youtube.com/watch?v=CnH3kAXSrmU 



# Serverless 
https://www.udemy.com/courses/search/?src=ukw&q=serverless









## REFERENCES 
https://expressjs.com/ 
https://mongoosejs.com/ 
https://www.jwt.io/ 
https://www.npmjs.com/package/jsonwebtoken 
https://www.npmjs.com/package/bcryptjs 
https://www.npmjs.com/package/dotenv 
https://www.dotenv.org/ 
https://nodemon.io 
https://github.com/remy/nodemon
https://www.npmjs.com/package/nodemon



JS 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function 
https://www.w3schools.com/js/js_async.asp

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction


TESTING 
https://jestjs.io/
https://mochajs.org/








