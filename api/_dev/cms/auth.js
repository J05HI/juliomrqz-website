const express = require('express')
const authMiddleware = require('../../cms/auth')

module.exports = express().use(authMiddleware)
