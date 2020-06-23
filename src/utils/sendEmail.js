
export const sendEmail = async (formData) => {

    const encode = data => {
        const keys = Object.keys(data)
        return keys
        .map( key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");
    }


    const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData})
      })
        .then(res => res)
        .catch(error => console.log(error));

      return res
}
