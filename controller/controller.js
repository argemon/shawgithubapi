const axios = require('axios');

module.exports = {
    async searchProfileGitHub(request,response) {
        const { name } = request.params;
        var user, details, repos;
        
        await axios.get('https://api.github.com/users/' + name).then(function (resposta) {
            console.log(resposta.data);

            user = resposta.data.name;
            details = resposta;
            repos = resposta.data.repos_url;

            return response.send('<html> <head> </head> <body> <h1>'+name+' </h1> '+ repos + '</body> </html>')
        }).catch((err) => {
            response.json({ msg: "Profile don't found!" + err });
        })
    }
}