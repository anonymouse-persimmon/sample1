import log from "loglevel";

export async function callStoreCreate(token, attr) {
    return await fetch(import.meta.env.VITE_API_ROOT + "/store/",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(attr),
        })
        .then((response) => {
            log.info(response)
            return response.text()
        })
        .catch(error => log.error('通信に失敗しました', error))
        .then((d) => log.info(d))
}

export async function callStoreModify(token, id, attr) {
    return await fetch(import.meta.env.VITE_API_ROOT + "/store/" + id,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(attr),
        })
        .then((response) => {
            log.info(response)
            return response.text()
        })
        .catch(error => log.error('通信に失敗しました', error))
        .then((d) => log.info(d))
}

export async function callStoreDeleteHistory(token, id) {
    return await fetch(import.meta.env.VITE_API_ROOT + "/store/" + id,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then((response) => {
            log.info(response)
            return response.text()
        })
        .catch(error => log.error('通信に失敗しました', error))
        .then((d) => log.info(d))
}

export async function callFetchStore(token, sid) {
    return await fetch(import.meta.env.VITE_API_ROOT + "/store/" + sid,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then((response) => {
            log.info(response)
            return response.text()
        })
        .catch(error => log.error('通信に失敗しました', error))
        .then((d) => {
            log.info(d)
            return JSON.parse(d)
        })
}

export async function callUserFetch(token, uid) {
    return await fetch(import.meta.env.VITE_API_ROOT + "user/" + uid,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + token
            },
        })
        .then((response) => {
            log.info(response)
            return response.text()
        })
        .catch(error => log.error('通信に失敗しました', error))
        .then((d) => {
            log.info(d)
            return JSON.parse(d).histories
        })
}