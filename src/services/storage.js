const _set = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
    return _get(key)
}

const _get = key => {
    return JSON.parse(sessionStorage.getItem(key))
}

const _del = key => {
    sessionStorage.removeItem(key)
}

const _getUser = () => {
    let store = JSON.parse(sessionStorage.getItem(`DEVP_USER_INFOS`))
    return store
}
const _getUserRoleta = () => {
    let store = JSON.parse(sessionStorage.getItem(`DEVP_USER_INFOS_ROLETA`))
    return store
}

export default {
    set: _set,
    get: _get,
    del: _del,
    getUser: _getUser,
    getUserRoleta: _getUserRoleta,
}
