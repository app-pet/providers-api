const supertest = require("supertest");
const assert = require('assert');
const app = require("../appaux");

describe("Gestão de fornecedor", function() {

  it("Cadastrar fornecedor", function(done) {
    let user = {
      name: "Guilherme",
      phone: "1158916551",
      email: "user@email.com",
      services: ["Clinica","Pronto Socorro","Passeio"]
    }
    supertest(app)
      .post("/api/providers/")
      .send(user)
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

  it("Alterar fornecedor", function(done) {
    let user = {
      name: "Guilherme Almeida Rezende",
      phone: "11985636371",
      email: "galmeida8@outlook.com",
      services: ["Clinica Veterinária","Pronto Socorro Veterinário","Passeio com acompanhante"]
    }
    supertest(app)
      .put("/api/providers/1158916551")
      .send(user)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

  it("Encerrar conta do fornecedor", function(done) {
    supertest(app)
      .delete("/api/providers/11985636371")
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  }).timeout(10000);

});