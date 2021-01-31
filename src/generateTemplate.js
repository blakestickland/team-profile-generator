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
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    
        <!-- Added a link to our external stylesheet-->
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    
    <body>
        <header class="center">
            <h1>My Team</h1>
        </header>
    
        <main>
            <div class="card" id="card-1">
                <div class="card-header">
                    <h2>Employee Name</h2>
                    <h3>Icon and Position</h3>
                </div>
                <div class="card-body">
                    <p class="ID">ID: 1</p>
                    <p class="email">Email: somename@emailaddress.com</p>
                    <!-- Enter a dynamic entry in next line based on job position -->
                    <p>Office number: 1</p>  
                </div>
            </div>
        </main>
    </body>
    
    </html>    `
}

module.exports = {
    generateTemplate,
}