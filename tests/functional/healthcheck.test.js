const { expect } = require( 'chai').use(require('chai-as-promised'))
const request = require('supertest')
const app = require('../../server')

describe('/Healcheck', () => {
    it('should return a 200 status', () => {
        return request(app)
        .get('/health-check')
        .expect(200)
    })
})
