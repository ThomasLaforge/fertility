import { Player } from "./Player";

export class Game {

    public players: Player[]
                
    constructor(players: Player[]){
        this.players = players
    }

    // Scores
    getGodCount(p: Player){
        return 0
    }
    getGodScore(p: Player){
        // 0 => 0, 1=> 0, 2 => 4, etc...
        let scores = [0, 0, 4, 10, 18, 28, 40]
        let index = this.getGodCount(p) >= scores.length ? scores.length - 1 : this.getGodCount(p)
        return scores[index]
    }

    getMonumentScore(p: Player){
        const nbBuiltMonuments = p.getNbMonumentsBuilt()
        let score = 0

        if(nbBuiltMonuments > 0){
            const FIRST_SCORE = 15
            const SECOND_SCORE = 7
            const topNbMonumentsBuilt = this.players.map(p => p.getNbMonumentsBuilt()).sort( (a, b) => b - a)
            // nb monuments built to have first and second rewards
            const topScoreNeeds = topNbMonumentsBuilt[0]
            const topNbMonumentsBuiltButNotFirst = topNbMonumentsBuilt.filter(nb => nb !== topScoreNeeds)
            const secondScoreNeeds = topNbMonumentsBuiltButNotFirst.length > 0 ? topNbMonumentsBuiltButNotFirst[0] : null
            
            if(nbBuiltMonuments === topScoreNeeds){
                score = FIRST_SCORE
            }
            else if(nbBuiltMonuments === secondScoreNeeds){
                score = SECOND_SCORE
            }
        }

        return score
    }

    getCornScore(p: Player){
        return p.cornScore
    }

    getScore(p: Player){
        return this.getCornScore(p) +
            this.getGodScore(p) +
            this.getMonumentScore(p)
    }

}