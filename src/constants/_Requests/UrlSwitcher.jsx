export const UrlSwitcher = () => {

    const localKey = JSON.parse(localStorage.getItem("ischecked") || "0")
    if (localKey) {
        localStorage.setItem("API", JSON.stringify(true))
    } else {
        if (!window.location.origin.includes(".com") || !window.location.host == "medxheal.netlify.app") {
            localStorage.setItem("API", JSON.stringify(false))
        }
        else {
            localStorage.setItem("API", JSON.stringify(true))
        }
    }

}

