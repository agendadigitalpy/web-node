const request = require('request')

const urlInfo = `https://informacionpublica.paraguay.gov.py/portal-core/rest/solicitudes?limit=20&offset=0&search=%7B%22type%22:%22or%22,%22filters%22:%5B%7B%22path%22:%22descripcion%22,%22like%22:%22MITIC%22%7D,%7B%22path%22:%22titulo%22,%22like%22:%22MITIC%22%7D,%7B%22path%22:%22fecha%22,%22sortDesc%22:%22true%22,%22like%22:%22MITIC%22%7D,%7B%22path%22:%22conteoSuscripciones%22,%22sortDesc%22:%22true%22,%22like%22:%22%22%7D,%7B%22path%22:%22fechaLimite%22,%22like%22:%22MITIC%22%7D,%7B%22path%22:%22institucion.nombre%22,%22like%22:%22MITIC%22%7D,%7B%22path%22:%22institucion.ministerio%22,%22like%22:%22MITIC%22%7D,%7B%22path%22:%22flujosSolicitud.comentario%22,%22like%22:%22MITIC%22%7D,%7B%22path%22:%22flujosSolicitud.titulo%22,%22like%22:%22MITIC%22%7D,%7B%22path%22:%22estado.nombre%22,%22like%22:%22MITIC%22%7D,%7B%22path%22:%22usuario.nombre%22,%22like%22:%22MITIC%22%7D,%7B%22path%22:%22usuario.apellido%22,%22like%22:%22MITIC%22%7D%5D%7D`

const getInformacion = () => {
  return new Promise((resolve, reject) => {
    request(urlInfo, function (error, response, body) {
      if (error) {
        console.log('error:', error) // Print the error if one occurred
        resolve({})
      }
      //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //console.log('body:', body); // Print the HTML for the Google homepage.
      resolve(JSON.parse(body))
    })
  })
}

module.exports = {
  getInformacion
}