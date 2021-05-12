var categoryService = require("../services/categorySevices")
var roomsmodel = require("../modles/RoomsModel")
// var ListRooms=[
//     {id:1,img:'http://localhost:1234/img/1.jpg',name:'Phòng 101',price:500,tienich:'Tivi,Tủ Lạnh,Máy Quạt',date:'2021-03-15',time:'Empty',LoaiPhong:1},
//     {id:2,img:'http://localhost:1234/img/1.jpg',name:'Phòng 102',price:300,tienich:'Tivi,Tủ Lạnh,Máy Quạt',date:'2021-03-19',time:' Empty',LoaiPhong:1},
//     {id:3,img:'http://localhost:1234/img/1.jpg',name:'Phòng 103',price:4400,tienich:'Tivi,Tủ Lạnh,Máy Quạt',date:'2021-03-19',time:'Rented',LoaiPhong:1},
//     {id:4,img:'http://localhost:1234/img/1.jpg',name:'Phòng 104',price:7900,tienich:'Tivi,Tủ Lạnh,Máy Quạt',date:'2021-03-10',time:' Rented',LoaiPhong:1},
//     {id:5,img:'http://localhost:1234/img/1.jpg',name:'Phòng 105',price:100000,tienich:'Tivi,Tủ Lạnh,Máy Quạt',date:'2021-03-30',time:' Empty',LoaiPhong:3},
//   ]
  exports.getListRooms = async function getListRooms(){
    let rooms = await roomsmodel.find().populate('LoaiPhong')
      return rooms;
  }
  exports.getRoomsById =async function getRoomsById(id){
    let room =await roomsmodel.findById(id)
    return room
 }
  exports.addNew = async function addNewRooms(room){
    let rooms = new roomsmodel(room)
    await rooms.save()
 }
 exports.edit = async function editRooms(room){
  let ro = await roomsmodel.findById(room.id)
        if(ro){
          if(room.img){
            ro.img = room.img
          }
          ro.name=room.name
          ro.price=room.price
          ro.tienich = room.tienich
          ro.date=room.date
          ro.time = room.time
          ro.LoaiPhong=room.LoaiPhong
          
         
        await ro.save()
        }
}
exports.remove = async function removeRoomsById(id){
    await roomsmodel.remove({_id : id})
}

exports.getRoomsByIdSelectFeil =async function getRoomsByIdSelectFeil(id){
 return await roomsmodel.find({},'name price')
}