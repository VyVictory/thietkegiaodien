import cookieModule from "./cookie.module";

function getToken() {
    return cookieModule().getCookie("TokenThietKeGiaoDien");
}
function setToken(value) {
    if (getToken()) {
        deleteToken();
        return cookieModule().setCookie("TokenThietKeGiaoDien", value, 24)
    } else {
        return cookieModule().setCookie("TokenThietKeGiaoDien", value, 24)
    }
}
function deleteToken() {
    return cookieModule().deleteCookie("TokenThietKeGiaoDien")
}
export default { getToken, setToken, deleteToken };