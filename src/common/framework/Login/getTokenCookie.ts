export function getTokenCookie(): string {
    const decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    let tokenCookie = "";
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }
        if (c.indexOf("token=") === 0) {
            tokenCookie = c.substring("token=".length, c.length);
        }
    }
    return tokenCookie;
}
