var roomsService = require("../services/RoomsService")

  exports.getListRooms =async function getListRooms(){
      return await roomsService.getListRooms()
  }
  exports.getRoomsById =async function getRoomsById(id){
    return await roomsService.getRoomsById(id)
  }
  exports.addNew = async function addNewRooms(params){
    let{img,name,price,tienich,date,time,LoaiPhong} = params
    let phong={
        img:img,
        name: name,
        price: price,
        tienich: tienich,
        date:date,
        time:time,
        LoaiPhong:LoaiPhong
    }
   await roomsService.addNew(phong)
  }
  exports.edit =async function editRooms(id,params){
    let{img,name,price,tienich,date,time,LoaiPhong}= params
    let room={id,img,name,price,tienich,date,time,LoaiPhong}
    await roomsService.edit(room)//product

  }
  exports.remove =async function removeRoomsById(id){
     await roomsService.remove(id)
  }
  exports.getRoomsByIdSelectFeil =async function getRoomsByIdSelectFeil(id){
  return await roomsService.getRoomsByIdSelectFeil(id)
  }