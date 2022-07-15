export const FileUpload = async (file)=>{
    const urlCloudinary = "https://api.cloudinary.com/v1_1/dixwwvzbt/image/upload"
    
    const formData = new FormData()

    formData.append("upload_preset", "tyzy-demoday")

    formData.append("file", file)

    const resp = await fetch(urlCloudinary,{
        method: "POST",
        body: formData
    })
    const data = await resp.json()
    console.log(data)
    return data.secure_url
}