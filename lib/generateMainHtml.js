const generateCard = require("./generateCard.js");

function generateHtml(team) {
  let cardHtml = "";
  for (let member of team) {
    cardHtml += generateCard(member);
  }
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <!--Let browser know website is optimized for mobile-->
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
            <!-- Bootstrap compiled and minified CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            <!--Get your code at fontawesome.com-->
            <script src="https://kit.fontawesome.com/4d07055d3e.js" crossorigin="anonymous"></script>
            <!-- Favicon and CSS -->
            <link rel="shortcut icon" type="image/png" href="profile.png"/>
            <link rel="stylesheet" href="style.css" /> 
            <title>My Team</title>
        </head>
        <body> 
            <div class="container-fluid bg-primary text-white text-center">
                <div class="row d-flex justify-content-around">
                    <div class="col-12">
                        <h3 class="display-4">My Team</h3>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    ${cardHtml}   
                </div>
            </div>
        </body>
    </html>`;
}
module.exports = generateHtml;
