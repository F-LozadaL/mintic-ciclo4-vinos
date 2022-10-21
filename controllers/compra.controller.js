const Compra = require("../models/compra.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function (req, res) {
    let compra = new Compra({
        wine_name: req.body.nombre,
        liqueur_p: req.body.apellido_p,
        quantity: req.body.apellido_m,
        years_aged: req.body.telefono,
    })

    compra.save(function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al guardar la compra"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "La compra se guardo correctamente"
        res.json(response)
    })
}

exports.find = function (req, res) {
    Compra.find(function (err, compras) {
        res.json(compras)
    })
}

exports.findOne = function (req, res) {
    Compra.findOne({ _id: req.params.id }, function (err, compra) {
        res.json(compra)
    })
}

