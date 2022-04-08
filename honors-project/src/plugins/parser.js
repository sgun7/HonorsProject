export default
{
    addNumbers(input)
    {
        async () => {
            const [fileHandle] =  await howOpenFilePicker()
            const file = await fileHandle.getFile(input)
            console.log("file")
        }
    }
}