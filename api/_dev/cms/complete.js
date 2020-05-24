const express = require('express')
const completeMiddleware = require('../../cms/complete')

module.exports = express().use(completeMiddleware)
