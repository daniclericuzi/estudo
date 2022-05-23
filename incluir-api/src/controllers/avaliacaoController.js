const { req, res } = require('express');
const mongoose = require('mongoose');
const Avaliacao = require('../models/avaliacaoModels');
const { avaliacaoSchema } = require('../validators/avaliacaoValidator')

const obterAvaliacaoPorEstabelecimento = async(req, res) => {
    let { estabelecimentoId } = req.query;
    Avaliacao.find({ estabelecimentoId: estabelecimentoId })
        .then((avaliacoes) => {
            if (avaliacoes == 0) {
                res.status(404).json({ message: 'Não há avaliações para este estabelecimento' });
            }
            res.status(200).json(avaliacoes);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
}
