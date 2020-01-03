const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
    async index(req, res) {
        const users = await User.findAll({
            attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
        });

        return res.json(users);
    },
    async store(req, res) {

        const user = await User.create(req.body);

        return res.json(user);

    },
    async show(req, res) {
        const user = await User.findByPk(req.params.id, {
            attributes: ['id', 'name', 'email', 'createdAt', 'updatedAt']
        });

        return res.json(user);
    },
    async update(req, res) {
        const user = await User.update(req.body, { where: { id: req.params.id } });

        return res.send();
    },
    async delete(req, res) {
        await User.destroy({ where: { id: req.params.id } });

        return res.json({ messagen: 'ok' });
    }
};