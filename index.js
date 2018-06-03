/**
 * 添加默认值
 * @param typeJSON
 * @param defaultValue
 * @returns {*}
 */
function addDefaultValue(typeJSON,defaultValue){
  if(defaultValue!='undefined'){
    return {...typeJSON,default:defaultValue}
  }
  return typeJSON;
}

/**
 * bool类型检测，可以不设置默认值
 * @param defaultValue
 * @returns {*}
 */
function boolType(defaultValue){
   return addDefaultValue({
     type:[String,Number,Boolean],
     coerce:(v)=>{
       if(typeof v=='string'){
         if(v.toLocaleLowerCase()=='true' || v=='1'){
           return true;
         }
         if(v.toLocaleLowerCase()=='false' || v=='0'){
           return false
         }
       }
       if(typeof v=='number'){
         return Boolean(v)
       }
       return v;
     }
   },defaultValue)
}

/**
 * number类型检测
 * @param defaultValue
 * @returns {{type: *[], coerce: (function(*): number), default: *}}
 */
function numberType(defaultValue){
  return {
    type:[String,Number],
    coerce:(v)=>{
      return +v;
    },
    default:defaultValue,
  }
}

/**
 * string类型检测
 * @param defaultValue
 * @returns {{type: *[], coerce: (function(*): string), default: *}}
 */
function stringType(defaultValue){
  return {
    type:[String],
    coerce:(v)=>{
      return v+'';
    },
    default:defaultValue,
  }
}
function unknownType(defaultValue){
  return {
    default:defaultValue
  }
}
module.exports={
  boolType,
  numberType,
  stringType,
  unknownType,
}
