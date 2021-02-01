const generateTemplate = ({userName}) => {
    return `
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    
        <!-- Added link to the jQuery Library -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    
        <!-- Added a link to Bootstrap-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <!-- Added a link to our external stylesheet-->
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    
    <body>
        <header class="container-fluid bg-danger text-light text-center py-4 shadow-sm">
            <h1>My Team</h1>
        </header>
    
        <main>
            <div class="row p-5">
                <div class="col-sm-4">
                    <div class="card text-center shadow rounded" style="width: 18rem;" id="card-1">
                        <div class="card-body">
                            <h3 class="card-title">${answers.name}</h3>
                            <h4 class="card-subtitle mb-2 text-muted">${answer.role}</h4>
                            <hr>
                            <p class="card-text ID">ID: ${answers.id}</p>
                            <p class="card-text email">Email: ${answers.email}</p>
                            <!-- Enter a dynamic entry in next line based on job position -->
                            <p class="card-text">Office number: ${answers.officeNumber}</p>
                            <p class="card-text">Github Username: <a href="#" class="card-link">${answers.githubUsername}</a></p>
                            <p class="card-text">School: ${answers.school}</p>  
                        </div>
                    </div>
                </div>
            </div>
        </main>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </body>
    
    </html>  `
}

module.exports = {
    generateTemplate
}