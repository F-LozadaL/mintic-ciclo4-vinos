const Vino = require("../models/vino.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function (req, res) {
    let vino = new Vino({
        wine_name: req.body.nombre,
        liqueur_p: req.body.apellido_p,
        quantity: req.body.apellido_m,
        years_aged: req.body.telefono,
    })

    vino.save(function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al guardar el vino"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "El vino se guardo correctamente"
        res.json(response)
    })
}

exports.find = function (req, res) {
    Vino.find(function (err, vinos) {
        res.json(vinos)
    })
}

exports.findOne = function (req, res) {
    Vino.findOne({ _id: req.params.id }, function (err, vino) {
        res.json(vino)
    })
}

