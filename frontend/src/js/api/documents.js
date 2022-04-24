import Login from "./login"

const documents = {
    upload(fileData) {
        return new Promise((resolve, reject) => {
            const requestBody = {
                method: "POST",
                headers: Login.authHeader(),
                body: fileData
            };

            fetch("/file/upload/" + Login.getCurrentUser().id, requestBody)
            .then((res) => {
                if(res.ok) resolve("File Successfully Uploaded");
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
                headers: Login.authHeader(),
            };

            fetch("/file/getList/" + Login.getCurrentUser().id, requestBody)
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
                headers: Login.authHeader(),
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
                headers: Login.authHeader(),
            };

            fetch("/file/delete/" + fileId, requestBody)
            .then((res) => {
                if(res.ok) resolve(res.json());
                else resolve("Network Error")
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export default documents;