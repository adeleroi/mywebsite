const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, './mailsender/public'),
    devServer: {
        proxy: {
            '/formdata': {
                target: 'http://localhost:5000'
            }
        }
    }
}