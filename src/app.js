window.onload = function() {
  // Arrays containing word categories
  let pronoun = ['pro', 'epic', 'shadow'];
  let adj = ['fast', 'stealth', 'legendary'];
  let noun = ['gamer', 'warrior', 'arena', 'clan', 'quest'];

  // Generating domain names
  let domains = [];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        domains.push(pronoun[i] + adj[j] + noun[k] + '.com');
      }
    }
  }

  document.getElementById("domain-list").innerHTML = domains
  .map(domain => `<li>${domain}</li>`)
  .join("");
};
//   let domainList = document.getElementById("domain-list");

//   domainList.innerHTML = ""; 
//   domains.forEach(domain => {
//     let listItem = document.createElement("li"); 
//     listItem.textContent = domain; 
//     domainList.appendChild(listItem); 
//   });
// };