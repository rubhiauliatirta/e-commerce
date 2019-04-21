const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
const userDrop = require("../helpers/userDrop")

chai.use(chaiHttp);

before(function(done) {
    userDrop(done)
});
  
after(function(done) {
    userDrop(done);
});

var token;

describe("User tests", function () {
    describe(" POST /users/register", function () {
        it("should success register user with status 201 with no error", function (done) {
            let user = {
                name: "Rubhi Aulia",
                email: "rubhiaulia@email.com",
                password: "12345"
            };

            chai
            .request(app)
            .post("/users/register")
            .send(user)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                expect(res.body).to.be.an("object")
                expect(res.body.name).to.equal("Rubhi Aulia")
                expect(res.body).to.have.keys(['token','name',"imageUrl","role","hackpay"]);
                done()
            });
        });
        it("should error with error code 400", function(done){
            let errorUser ={}
            chai
            .request(app)
            .post("/users/register")
            .send(errorUser)
            .end(function(err, res){
                expect(err).to.be.null;
                expect(res).to.have.status(400)
                expect(res.body).to.have.all.keys('error','message',"source","statusCode");
                expect(res.body.message).to.include('validation')
                done()
            })
        })
        it("should success register admin with status 201 with no error", function(done){
            let user = {
                name: "marchell",
                email: "admina@email.com",
                password: "12345",
                admin_password: "adminasikgilak"
            }
            chai
            .request(app)
            .post("/users/register")
            .send(user)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(201);
                expect(res.body).to.be.an("object")
                expect(res.body.name).to.equal("marchell")
                expect(res.body).to.have.keys(['token','name',"imageUrl","role","hackpay"]);
                done()
            });
        })
        it("should failed register admin (wrong admin password) with status 400", function(done){
            let user = {
                name: "adminpalsu",
                email: "admin2@email.com",
                password: "12345",
                admin_password: "paswordsalah"
            }
            chai
            .request(app)
            .post("/users/register")
            .send(user)
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(400)
                expect(res.body).to.have.all.keys('error','message',"source","statusCode");
                expect(res.body.message).to.include('Incorrect password for register as admin')
                done()
            });
        })
    });

    describe("POST /users/login", function(){
        it("Success login: should respon with token, name, imgSrc", function(done){
            let user = {
                "email": "rubhi@email.com",
                "password": "12345",
            }
            chai
            .request(app)
            .post("/users/login")
            .send(user)
            .end(function(err,res){
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("object")
                expect(res.body).to.have.all.keys("token","name","imageUrl","role","hackpay")
                token = res.body.token
                done();
            })
        })
        it("Login Failed: wrong email with status 400", function(done){
            let user = {
                "email": "random@email.com",
                "password": "12345",
            }
            chai
            .request(app)
            .post("/users/login")
            .send(user)
            .end(function(err,res){
                expect(err).to.be.null;
                expect(res).to.have.status(400);
                expect(res.body).to.be.an("object")
                expect(res.body.message).to.equal("Email is Invalid!")
                expect(res.body).to.have.all.keys('error','message',"source","statusCode");
                done();
            })
        })
        it("Login Failed: wrong password with status 400", function(done){
            let user = {
                "email": "rubhi@email.com",
                "password": "pas",
            }
            chai
            .request(app)
            .post("/users/login")
            .send(user)
            .end(function(err,res){
                expect(err).to.be.null;
                expect(res).to.have.status(400);
                expect(res.body).to.be.an("object")
                expect(res.body.message).to.equal("Password is Invalid!")
                expect(res.body).to.have.all.keys('error','message',"source","statusCode");
                done();
            })
        })
    });
    describe("POST /users/logout", function(){
        it("Success Logout", function(done){
            chai
            .request(app)
            .post("/users/logout")
            .set({authorization: token})
            .end(function(err,res){
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("object")
                expect(res.body.message).to.equal("Successfully logout");
                expect(res.body).to.have.all.keys("message","accountType")
                done();
            })
        })
        it("Logout Failed: not authenticated status 403", function(done){
            chai
            .request(app)
            .post("/users/logout")
            .end(function(err,res){
                expect(err).to.be.null;
                expect(res).to.have.status(403);
                expect(res.body).to.be.an("object")
                expect(res.body.message).to.equal("Token is undefined")
                expect(res.body).to.have.all.keys('error','message',"source","statusCode");
                done();
            })
        })
    })
    describe("GET /users/profile", function(){
        it("Get Profile with status 200", function(done){
            chai
            .request(app)
            .get("/users/profile")
            .set({authorization:token})
            .end(function(err,res){
                expect(err).to.be.null;
                expect(res).to.have.status(200)
                expect(res.body).to.be.an("object")
                expect(res.body).to.have.all.keys("imageUrl", "accountType","name","hackpay","role")
                done()
            })
        })
    })
   
});