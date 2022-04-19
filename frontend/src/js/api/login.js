const login = {
    loginUser(loginData) {
        return new Promise((resolve, reject) => {
            const requestBody = {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(loginData)
            };

            fetch("/signin", requestBody)
            .then((res) => {
                if(res.ok) resolve(res.json());
                else if(res.status === 401) resolve("Authentication Denied");
                else reject("Error");
            }).catch((error) => {
                reject(error);
            });
        }).then((res) => {
            if(res.token) {
                localStorage.setItem("user", JSON.stringify(res));
                window.location.replace("/dashboard");
            }
        });
    },

    logout() {
        localStorage.removeItem("user");
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    },

    authHeader() {
        const user = this.getCurrentUser();
        return user ? {Authorization: "Bearer " + user.token} : {};
    }
};

export default login;
