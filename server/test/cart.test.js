const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');
const {readFileSync} = require("fs")
const testFunction = require("../helpers/testFunction")

var tokenAdmin;
var tokenCostumer;
var productId;
chai.use(chaiHttp);


describe("Cart Test", function () {
    describe("GET /carts", function(){
        it("should get user carts with status code 200", function(done){
            chai
            .request(app)
            .get("/products")
            .end(function (err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.an("array")
                res.body.forEach(element => {
                    expect(element).to.have.keys(["_id","userId","product","count"])
                });
                done()
            });

        })
    })
});

