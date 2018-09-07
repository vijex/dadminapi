module.exports = {
    db: process.env.REPORT_MONGODB || 'mongodb://localhost/dbUpload',
    port: process.env.PORT || 8080
}