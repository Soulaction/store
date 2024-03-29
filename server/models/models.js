const sequelize = require('../db')
const {Sequelize} = require('sequelize')

const User = sequelize.define('user',{

    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: Sequelize.STRING, unique: true},
    password: {type: Sequelize.STRING},
    role: {type: Sequelize.STRING, defaultValue:"USER"}

})

const BasketDevice = sequelize.define('basket_device',{

    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true}

})

const Basket = sequelize.define('basket',{

    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true}

})

const Device = sequelize.define('device',{

    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: Sequelize.STRING, unique: true, allowNull: false},
    price: {type: Sequelize.INTEGER, allowNull: false},
    rating: {type: Sequelize.INTEGER, defaultValue:0},
    img: {type: Sequelize.STRING, allowNull: false}

})

const Rating = sequelize.define('rating',{

    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: Sequelize.INTEGER, allowNull: false}

})

const Type = sequelize.define('type',{

    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: Sequelize.STRING, unique: true, allowNull: false}

})

const Brand = sequelize.define('brand',{

    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: Sequelize.STRING, unique: true, allowNull: false}

})

const DeviceInfo = sequelize.define('device_info',{

    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: Sequelize.STRING, allowNull: false},
    discription: {type: Sequelize.STRING, allowNull: false}
})

const TypeBrand = sequelize.define('type_brend',{

    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true}
})

const Order = sequelize.define('order', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    statusOrder: {type: Sequelize.STRING, allowNull: false, defaultValue: 'Ожидание формирования'},
    statusPayment: {type: Sequelize.STRING, allowNull: false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

BasketDevice.hasMany(Order)
Order.belongsTo(BasketDevice)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(Order)
Order.belongsTo(Device)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'})
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})


module.exports = {

    User,
    Basket,
    BasketDevice,
    Brand,
    Type,
    TypeBrand,
    Device,
    DeviceInfo,
    Rating,
    Order
}