export async function getFileService(input: any){
    const file = input.target.files[0]

    if(file){
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.onload = async() => {
            return reader.result
        }
    }
}