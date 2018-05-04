import wepy from 'wepy'
import util from './util'
import tip from './tip'

// const API_SECRET_KEY = 'www.chudaokeji.com'
// const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async(params = {}, url) => {
    tip.loading()
    let res = await wepy.request({
        url: wepy.$appConfig.baseUrl + url,
        method: 'POST',
        data: {...params},
        header: { 'Content-Type': 'application/json' }
    })
    tip.loaded()
    console.log(res)
    return res
}

export default wxRequest