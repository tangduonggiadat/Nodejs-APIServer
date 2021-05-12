var CategoryService = require("../services/categorySevices")

exports.getListCategories =async function getListCategories(){
  return await CategoryService.getListCategories()
}
exports.getIDCategories =async function getIDCategories(id){
  return await CategoryService.getCategoriesById(id)
}
exports.addNew =async function addNewCate(params){
  let{name} = params
  let loai={
      name: name
  }
 await CategoryService.addNew(loai)
}
exports.edit =async function editCate(id,params){
  let{name}= params
  let cate={id,name}
 await CategoryService.edit(cate)//product
}
exports.remove =async  function removeCateById(id){
 await CategoryService.remove(id)
}