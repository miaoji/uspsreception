import config from './config';
const { localPrefix } = config
/**
 * [对localStorage操作进行封装]
 * @param  {String}  key    [存储的字段名字]
 * @param  {String}  val    [存储的字段值]
 * @param  {Boolean} prefix [是否加前缀，默认为true]
 * @param  {String}  type   [localStorage的操作方式 get、set、remove、clear]
 * @return {String} res     [localStorage.getItem(key)时返回的值]
 */
export const storage = ({ key = '', val = '', prefix = true, type = 'get' }) => {
  // type为remove时候，允许key为数组
  if (prefix && !Array.isArray(key)) {
    key = localPrefix + key
  }
  const localStorage = window.localStorage
  let res = ''
  switch (type) {
    case 'get':
      res = localStorage.getItem(key)
      break
    case 'set':
      localStorage.setItem(key, val)
      break
    case 'remove':
      if (Array.isArray(key)) {
        for (let i = 0, len = key.length; i < len; i++) {
          let removeKey = localPrefix + key[i]
          localStorage.removeItem(removeKey)
        }
      } else {
        localStorage.removeItem(key)
      }
      break
    case 'clear':
      localStorage.clear()
      break
    default:
      break
  }
  if (type === 'get') {
    return res
  }
}