import User from "./user";

const documents = {
    getPresignedUrl(fileName) {
        return new Promise((resolve, reject) => {
            const s3RequestBody = {
                method: "GET",
                headers: {'Content-Type':'application/json'}
            };

            fetch("https://3o1ysxo0g3.execute-api.us-west-2.amazonaws.com/development/get?key=" + fileName, s3RequestBody)
            .then((res) => {
                if(res.ok) {
                    console.log(res);
                    return res;
                } else {
                    resolve("Network Error");
                }
            }).catch((error) => {
                reject(error);
            });
        });
    },

    upload(presignedUrl, fileData) {
        return new Promise((resolve, reject) => {
            const requestBody = {
                method: "POST",
                headers: User.authHeader(),
                body: {...fileData, url: presignedUrl}
            };

            fetch("/file/upload/" + User.getCurrentUser().id, requestBody)
            .then((response) => {
                if(response.ok) resolve(response.json());
                else resolve("Network Error")
            }).catch((error) => {
                reject(error);
            });
        });
    },

    getSearchList(search) {
        return new Promise((resolve, reject) => {
            const requestBody = {
                method: "GET",
                headers: User.authHeader(),
            };

            const params = new URLSearchParams({
                search: search,
            });

            fetch("/file/getSearchList/" + User.getCurrentUser().id + "?" + params, requestBody)
            .then((res) => {
                if(res.ok) resolve(res.json());
                else resolve("Network Error")
            }).catch((error) => {
                reject(error);
            });
        });
    },

    getList() {
        return new Promise((resolve, reject) => {
            const requestBody = {
                method: "GET",
                headers: User.authHeader(),
            };

            fetch("/file/getList/" + User.getCurrentUser().id, requestBody)
            .then((res) => {
                if(res.ok) resolve(res.json());
                else resolve("Network Error")
            }).catch((error) => {
                reject(error);
            });
        });
    },

    download(fileId) {
        return new Promise((resolve, reject) => {
            const requestBody = {
                method: "GET",
                headers: User.authHeader(),
            };

            fetch("/file/download/" + fileId, requestBody)
            .then((res) => {
                if(res.ok) resolve(res.blob());
                else resolve("Network Error")
            }).catch((error) => {
                reject(error);
            });
        });
    },

    delete(fileId) {
        return new Promise((resolve, reject) => {
            const requestBody = {
                method: "POST",
                headers: User.authHeader(),
            };

            fetch("/file/delete/" + fileId, requestBody)
            .then((res) => {
                if(res.ok) resolve(res);
                else resolve("Network Error")
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export default documents;