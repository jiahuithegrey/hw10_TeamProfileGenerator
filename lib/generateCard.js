function generateCard(member) {
  const role = member.getRole();
  let icon;
  let specName;
  let specVal;

  switch (role) {
    case "Manager":
      icon = "fa-coffee";
      specName = "Office Number";
      specVal = member.getOfficeNumber();
      break;
    case "Engineer":
      icon = "fa-glasses";
      specName = "GitHub";
      specVal = member.getGithub();
      break;
    case "Intern":
      icon = "fa-user-graduate";
      specName = "School";
      specVal = member.getSchool();
      break;
    default:
      console.log("Please pick a title");
  }

  return `
    <div class="col-md-4">
      <div class="card my-4 rounded shadow">
        <div class="card-header">
          <h4>${member.getName()}</h4>
          <h5>
            <i class="fas ${icon}"></i> ${role}
          </h5>
        </div>
        <div class="card-body px-2">
          <ul class="list-group list-group-flush border">
            <li class="list-group-item px-2">ID: ${member.getId()}</li>
            <li class="list-group-item px-2">Email: ${member.getEmail()}</li>
            <li class="list-group-item px-2">${specName}: ${specVal}</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

module.exports = generateCard;
