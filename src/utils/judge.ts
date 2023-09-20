type TypeKey = 'Null' | 'Array' | 'String' | 'Number' | 'Object' | 'Promise' | 'Function' | 'Undefined'
const isType = (type: TypeKey) =>
  (val: any) => Object.prototype.toString.call(val) === `[object ${type}]`

// 判断是否为对象
const isObject = isType('Object')

// 判断是否为数组
const isArray = isType('Array')

// 判断是否为数字
const isNumber = isType('Number')

/**
 * 判断是否存在
 * @param val 须判断的数据值,可为 arr
 * @returns {boolean}
 */
const isExist = (val: any | any[]): boolean => isArray(val)
  ? (val as any[]).every(v => ((v ?? '') !== ''))
  : ((val ?? '') !== '')

/**
 * judge通用方法
 */
export const judge = {
  isExist,
  isObject,
  isArray,
  isNumber
}
