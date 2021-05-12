var categoryModel = require("../modles/categoryModel")
// var LoaiPhong=[
//     {id:1,name:'Phòng Đôi'},
//     {id:2,name:'Phòng Đơn'},
//     {id:3,name:'Phòng Deluxe '},
//     {id:4,name:'Phòng Junior Suite'},
//   ]

  exports.getListCategories =async function getListCategories(){
    // let List = LoaiPhong.map(cate=> {
    //   return {
    //     id: cate.id,
    //     name: cate.name,      
    //   }
    // }) 
    return await categoryModel.find()
  }
  exports.getCategoriesById = async function getCategoriesById(id){
    let Phong = await categoryModel.findById(id)
    return Phong
 }
exports.addNew =async function addNewCate(loai){
  let cate = new categoryModel(loai)
  await cate.save()
}
exports.edit = async function editCate(cate){
  let category = await categoryModel.findById(cate.id)
  if(category){
    category.name=cate.name
  await category.save()
  }
}
exports.remove =async function removeCateById(id){
  await categoryModel.remove({_id : id})
}
