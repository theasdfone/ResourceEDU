import { environment } from "../../environments/environment";
import User from "./user";

const documents = {
    getPresignedUrlUpload(fileName, operation) {
        return new Promise((resolve, reject) => {
            const s3RequestBody = {
                method: "GET",
                headers: {'Content-Type':'application/json'}
            };

            fetch(environment.awsUrl + fileName + `&operation=${operation}`, s3RequestBody)
            .then((res) => {
                if(res.ok) {
                    resolve(res.text());
                } else {
                    resolve("Network Error");
                }
            }).catch((error) => {
                reject(error);
            });
        });
    },

    upload(presignedUrl, fileData, displayFile) {
        return new Promise((resolve, reject) => {
            const s3Body = {
                method: "PUT",
                headers: {'Content-Type': 'multipart/form-data'},
                body: fileData
            }

            const requestBody = {
                method: "POST",
                headers: User.authHeader({"Content-Type":"application/json"}),
                body: JSON.stringify(displayFile)
            };

            fetch(presignedUrl, s3Body).then((res) => {
                if(res.ok) {
                    fetch(environment.apiUrl + "/file/upload/" + User.getCurrentUser().id, requestBody)
                    .then((response) => {
                        if(response.ok) resolve(response.json());
                        else resolve("Network Error");
                    }).catch((error) => {
                        reject(error);
                    });
                } else resolve("Network Error"); 
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

            fetch(environment.apiUrl + "/file/getSearchList/" + User.getCurrentUser().id + "?" + params, requestBody)
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

            fetch(environment.apiUrl + "/file/getList/" + User.getCurrentUser().id, requestBody)
            .then((res) => {
                if(res.ok) resolve(res.json());
                else resolve("Network Error")
            }).catch((error) => {
                reject(error);
            });
        });
    },

    download(presignedUrl) {
        return new Promise((resolve, reject) => {
            const requestBody = {
                method: "GET",
                headers: {'Content-Type': 'multipart/form-data'},
            };

            fetch(presignedUrl, requestBody)
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

            fetch(environment.apiUrl + "/file/delete/" + fileId, requestBody)
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