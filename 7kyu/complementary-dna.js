// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
//  Your function receives one side of the DNA (string, except for Haskell); 
//  you need to return the other complementary side. 
//  DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//SOLUTIONS:

function DNAStrand(dna) {
    let correctOutput = '';

    for (let char of dna) {
        switch (char) {
            case 'A':
                correctOutput += 'T';
                break;
            case 'T':
                correctOutput += 'A';
                break;
            case 'G':
                correctOutput += 'C';
                break;
            case 'C':
                correctOutput += 'G';
                break;
        }

    }
    return correctOutput;
}
