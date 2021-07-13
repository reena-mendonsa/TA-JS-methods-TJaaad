// NOTE: You can only use the (reduce) array method to solve this exercise:
function countAllPeople() {
  // your code goes here
  let count=0;
  for(let i=0;i<got.houses.length;i++){
  
     count= count+got.houses[i].people.length;
    
  }
  // console.log(count);
  return count;
}

function peopleByHouses() {
  // your code goes here
   let housePeople ={};
   for(let i=0;i<got.houses.length;i++){
    
    
    housePeople[`${got.houses[i].name}`] = got.houses[i].people.length;
   }
   
   return housePeople;
 }

function everyone() {
  // your code goes here
  let every=[];
  for(let i=0;i<got.houses.length;i++){
    for(let j=0;j<got.houses[i].people.length;j++){
      every.push(got.houses[i].people[j].name);
    }
  }
  return every;
 }

function nameWithS() {
  let nameWithS=[];
  for(let i=0;i<got.houses.length;i++){
    for(let j=0;j<got.houses[i].people.length;j++){
      if(got.houses[i].people[j].name.includes('S')==true){
      nameWithS.push(got.houses[i].people[j].name);
      }
    }
  }
  return nameWithS;
 }

function nameWithA() {
  // your code goes here
  let nameWithA=[];
  for(let i=0;i<got.houses.length;i++){
    for(let j=0;j<got.houses[i].people.length;j++){
      if(got.houses[i].people[j].name.includes('a')==true){
      nameWithA.push(got.houses[i].people[j].name);
      }
    }
  }
  return nameWithA;
 }

function surnameWithS() {
  // your code goes here
  let surnameS=[] ,index;
  for(let i=0;i<got.houses.length;i++){
    for(let j=0;j<got.houses[i].people.length;j++){
        index =got.houses[i].people[j].name.lastIndexOf('S');
        if(index >0 ){
         surnameS.push(got.houses[i].people[j].name);
        }
    }
  }
  return surnameS;
 }

function surnameWithA() {
  // your code goes here
  let surnameA=[] ,index;
  for(let i=0;i<got.houses.length;i++){
    for(let j=0;j<got.houses[i].people.length;j++){
        index =got.houses[i].people[j].name.lastIndexOf('A');
        if(index >0 ){
         surnameA.push(got.houses[i].people[j].name);
        }
    }
  }
  return surnameA;
 }

function peopleNameOfAllHouses() {
  // your code goes here
  let AllhousePeople ={} ;
  for(let i=0;i<got.houses.length;i++){
    let people =[];
   for(let j=0;j<got.houses[i].people.length;j++){
     
      people.push(got.houses[i].people[j].name);
   }
   AllhousePeople[`${got.houses[i].name}`]= people;
  }
  
  return AllhousePeople;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
