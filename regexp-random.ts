import * as Chance from 'chance'
import * as Crypto from 'crypto'

namespace RegExpRandom
{
  const chance = function() { return new Chance.Chance(function() {
    var number:string = ''
    Array.from(Crypto.getRandomValues(new BigUint64Array(4))).forEach(function(n) { number += String(n) })
    return number
  })}
  
  const Characters = new Map<string, string>()
  Characters.set('a-z', 'abcdefghijklmnopqrstuvwxyz')
  Characters.set('A-Z', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  Characters.set('0-9', '0123456789')
  
  export interface Regexp
  {
    source: RegExp
    Decompile(): JSON
    GenerateString(): string
  }

  export interface RegexpJSON
  {
    source: RegexpJSON
    Compile(): RegExp
    GenerateString(): string
  }

  export class RegexpJSON implements RegexpJSON
  {
    constructor(json:RegexpJSON)
    {
      this.source = json
    }
  }

  export class Regexp implements Regexp
  {
    constructor(Regexp:RegExp)
    {
      this.source = Regexp
    }
  }
}

export default RegExpRandom