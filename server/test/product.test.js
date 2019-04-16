// const chai = require("chai");
// const chaiHttp = require('chai-http');
// const expect = chai.expect;
// const app = require('../app');
// const userDrop = require("../helpers/userDrop")

// chai.use(chaiHttp);

// before(function(done) {
//     userDrop(done)
// });
  
// after(function(done) {
//     userDrop(done);
// });

// describe("User tests", function () {
//     describe(" POST /users/register", function () {
//         it("should success register user with status 201 with no error", function (done) {
//             let user = {
//                 name: "Rubhi Aulia",
//                 email: "rubhiaulia@email.com",
//                 password: "12345"
//             };

//             chai
//             .request(app)
//             .post("/users/register")
//             .send(user)
//             .end(function (err, res) {
//                 expect(err).to.be.null;
//                 expect(res).to.have.status(201);
//                 expect(res.body).to.be.an("object")
//                 expect(res.body.name).to.equal("Rubhi Aulia")
//                 expect(res.body).to.have.keys(['token','name',"imageUrl"]);
//                 done()
//             });
//         });
//         it("should error with error code 400", function(done){
//             let errorUser ={}
//             chai
//             .request(app)
//             .post("/users/register")
//             .send(errorUser)
//             .end(function(err, res){
//                 expect(err).to.be.null;
//                 expect(res).to.have.status(400)
//                 expect(res.body).to.have.all.keys('error','message',"source","statusCode");
//                 expect(res.body.message).to.include('validation')
//                 done()
//             })
//         })
//     });

//     describe("POST /users/login", function(){
//         it("Success login: should respon with token, name, imgSrc", function(done){
//             let user = {
//                 "email": "rubhi@email.com",
//                 "password": "12345",
//             }
//             chai
//             .request(app)
//             .post("/users/login")
//             .send(user)
//             .end(function(err,res){
//                 expect(err).to.be.null;
//                 expect(res).to.have.status(200);
//                 expect(res.body).to.be.an("object")
//                 expect(res.body).to.have.all.keys("token","name","imageUrl")
//                 done();
//             })
//         })
//         it("Login Failed: wrong email with status 400", function(done){
//             let user = {
//                 "email": "random@email.com",
//                 "password": "12345",
//             }
//             chai
//             .request(app)
//             .post("/users/login")
//             .send(user)
//             .end(function(err,res){
//                 expect(err).to.be.null;
//                 expect(res).to.have.status(400);
//                 expect(res.body).to.be.an("object")
//                 expect(res.body.message).to.equal("Email is Invalid!")
//                 expect(res.body).to.have.all.keys('error','message',"source","statusCode");
//                 done();
//             })
//         })
//         it("Login Failed: wrong password with status 400", function(done){
//             let user = {
//                 "email": "rubhi@email.com",
//                 "password": "pas",
//             }
//             chai
//             .request(app)
//             .post("/users/login")
//             .send(user)
//             .end(function(err,res){
//                 expect(err).to.be.null;
//                 expect(res).to.have.status(400);
//                 expect(res.body).to.be.an("object")
//                 expect(res.body.message).to.equal("Password is Invalid!")
//                 expect(res.body).to.have.all.keys('error','message',"source","statusCode");
//                 done();
//             })
//         })
//     })
    
// });