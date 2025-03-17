window.onload = function() {
  let pronoun = ['pro', 'epic', 'shadow'];
  let adj = ['fast', 'stealth', 'legendary'];
  let noun = ['gamer', 'warrior', 'arena', 'clan', 'quest'];


  let domains = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domains.push(pronoun[i] + adj[j] + noun[k] + '.com');
      }
    }
  }

let domainList = document.getElementById('domain-list');
domains.forEach(domain => {
  let listItem = document.createElement('li');
  listItem.textContent = domain;
  domainList.appendChild(listItem);
});

console.log("Generated Domain Names:");
domains.forEach(domain => {
  console.log(domain);
});
};