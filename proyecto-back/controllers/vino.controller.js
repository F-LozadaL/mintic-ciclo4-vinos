const Vino = require("../models/vino.model");
let response = {
    msg: "",
    exito: false
}

exports.create = function (req, res) {
    let vino = new Vino({
        wine_name: req.body.wine_name,
        liqueur_p: req.body.liqueur_p,
        quantity: req.body.quantity,
        years_aged: req.body.years_aged
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

//////
exports.update = function (req, res) {
    let vino = {

        wine_name: req.body.wine_name,
        liqueur_p: req.body.liqueur_p,
        quantity: req.body.quantity,
        years_aged: req.body.years_aged
    }

    Vino.findByIdAndUpdate(req.params.id, { $set: vino }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar el vino"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "El vino se modifico correctamente"
        res.json(response)
    })
}

exports.remove = function (req, res) {
    Vino.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar el vino"
            res.json(response)
            return;
        }

        response.exito = true,
            response.msg = "El vino se ha eliminado correctamente"
        res.json(response)
    })
}

