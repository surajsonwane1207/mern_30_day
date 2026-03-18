function makeTea() {
    return new Promise((resolve, reject) => {
        reject("Green tea is Ready")
    })
}
async function main() {
    try {
        const tea = await makeTea()
        console.log(tea)
    } catch (error) {
        console.log("error while making tea "+error)
    }
}
main()