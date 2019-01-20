/** 
 * Возвращает значение куки по имени
 * 
 * @param {string} cookieName
 * @returns {string} cookieValue
 */
function getCookie(cookieName) {
    let r = document.cookie.match(`\\b${cookieName}=([^;]*)\\b`);
    return r ? r[1] : undefined;
}