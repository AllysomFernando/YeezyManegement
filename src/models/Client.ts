const Sequelize = require('sequelize')

const database = require('../../public/configdb')
const Equipment = require('./Equipament.ts')
import { iEquipament } from './Equipament'

interface IClient extends iEquipament {
    name: string;
    cnpj: string;
    clientId: number;
    equipament: iEquipament
}

const Cliente = database.define('Client', 
{
  idcliente: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  cnpj: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  equipament_idequipament: {
    type: Sequelize.STRING,
    allowNull: false,   
  },
  name: {
    type: Sequelize.STRING
  }
})

exports.module = Cliente