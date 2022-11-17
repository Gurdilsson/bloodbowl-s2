import halflings from "../Teams/halflings.json"
import blackOrcs from "../Teams/blackOrks.json"
import orcs from "../Teams/mama.json"
import necro from "../Teams/necro.json"
import dwarfs from "../Teams/dwarfs.json"
import lizardmen from "../Teams/lizardmen.json"

export function getTeams(){
    return [orcs, blackOrcs, halflings, necro, dwarfs, lizardmen]
}

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