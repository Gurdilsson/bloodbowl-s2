export function formatCurrency(value: number){
    var res = ""
    for (let i = value.toString().length+1; i >= 0; i--){
        res = value.toString().charAt(i) + res
        if ((value.toString().length - i)%3 === 0) {
            res = " " + res
        }
    }
    return res
}