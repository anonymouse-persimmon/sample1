import log from "loglevel";

export async function callCreateHistory(token, attr) {
    return await fetch(import.meta.env.VITE_API_ROOT + "/a/histories/",
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

export async function callModifyHistory(token, id, attr) {
    return await fetch(import.meta.env.VITE_API_ROOT + "/a/histories/" + id,
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

export async function callDeleteHistory(token, id) {
    return await fetch(import.meta.env.VITE_API_ROOT + "/a/histories/" + id,
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

export async function callRetrieveHistory(token, id) {
    return await fetch(import.meta.env.VITE_API_ROOT + "/a/histories/" + id,
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

export async function callMyHistories(token) {
    return await fetch(import.meta.env.VITE_API_ROOT + "/a/user/",
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
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