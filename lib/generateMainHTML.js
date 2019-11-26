// const generateCard = require("./generateCard.js");

function generateHTML(data) {
    return `<!DOCTYPE html>
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
            <title>${data.team}_Profile</title>
        </head>
        <body> 
            <div class="jumbotron jumbotron-fluid bg-info text-white text-center">
                <h2 class="display-4">Team Pied Piper</h2>
                <h4 class="lead">A brief introduction of my team members</h4>   
            </div>
            <div class="container">
                <div class="row">
                    <div class="team">
                        <div class="col-xs-12 col-md-6 col-lg-4">       
                            <div class="card" style="width: 18rem;">
                                <div class="card-wrapper">
                                    <div class="card-header bg-info text-white">
                                        <h4 class="card-name">${data.name}</h4>
                                        <h4><i class="fas fa-mug-hot"></i>&nbsp ${data.title}</h4>
                                    </div>
                                    <div class="card-body bg-light" style="padding: 15px;">
                                        <ul class="list-group">
                                            <li class="list-group-item">ID: ${data.id}</li>
                                            <li class="list-group-item">Email: 
                                            <a target="_top" id="email" href="mailto:${data.email}">${data.email}</a></li>
                                            <li class="list-group-item">Office Number: ${data.room}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>`;
}