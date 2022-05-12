//const axios = require('axios');
//const { fetchBreedImages, fetchMostSearched, updateSearchCount } = require('./test_utils'); 
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

process.env.NODE_ENV = 'test';

describe('/GET /', () => {
    it('it should display a message indicating success on / endpoint', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.status.should.be.eql('Success');
            done();
        })
    })
})

describe('/GET /breeds/all', () => {
    it('it should get information about every breed', (done) => {
        chai.request(server)
            .get('/breeds/all')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a('array');
                res.body.data.length.should.be.eql(172);
                res.body.status.should.be.eql('Success');
            done();
        })
    })
})

describe('/GET /images/:breedId', () => {
    it('it should get the images for a particular breed by breed ID, up to 50 images', (done) => {
        const breedId = 1;
        chai.request(server)
            .get(`/images/${breedId}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.status.should.be.eql('Success');
                res.body.data[0].breeds[0].id.should.be.eql(breedId);
                res.body.data.should.be.a('array');
                res.body.data.length.should.be.below(50);
            done();
        })
    })

    it('it should not return any data for an ID that does not exist', (done) => {
        const breedId = -1;
        chai.request(server)
            .get(`/images/${breedId}`)
            .end((err, res) => {
                res.should.have.status(404);
                res.body.status.should.be.eql('Error');
                res.body.data.should.be.a('array');
                res.body.data.length.should.be.eql(0);
            done();
        })
    })
})

describe('/GET /topDogs', () => {
    it('it should get the top 10 most searched breeds in descending order', (done) => {
        chai.request(server)
            .get('/topDogs')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.a('array');
                res.body.data.length.should.be.eql(10);
                res.body.status.should.be.eql('Success');
                for (let i = 0; i < res.body.data.length - 1; i++) {
                    res.body.data[i].searches.should.be.least(res.body.data[i + 1].searches);
                }
            done();
        })
    })
})

describe('/PUT /updateSearchCount/:breedId', (done) => {
    it('it should successfully increment the search count by 1 of a given breed by breed ID', (done) => {
        const breedId = 1;
        const testBreed = {_id : 1000, name: "Fake Terrier", image: "fake.png", searches: 0}
        chai.request(server)
            .put(`/updateSearchCount/${breedId}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.status.should.be.eql('Success');
                res.body.message.should.be.eql(`Search count for breed with ID ${breedId} updated.`);
        done();
        })
    })
})

describe('/ALL /*', (done) => {
    it('it should ensure that non-existent endpoints are handled', (done) => {
        chai.request(server)
            .get('/thisEndpointIsNotReal')
            .end((err, res) => {
                res.should.have.status(404);
                res.body.status.should.be.eql('Error');
            done();
        })
    })
})
