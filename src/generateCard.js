const generateCard = (role) => {
    switch (role) {
        case "Manager":
            console.log("this is a Manager");
            return `
                        <div class="col-sm-4">
                            <div class="card text-center shadow rounded" style="width: 18rem;" id="card-1">
                                <div class="card-body">
                                    <h3 class="card-title">${element.name}</h3>
                                    <h4 class="card-subtitle mb-2 text-muted">${element.role}</h4>
                                    <hr>
                                    <p class="card-text ID">ID: ${element.id}</p>
                                    <p class="card-text email">Email: ${element.email}</p>
                                    <!-- Enter a dynamic entry in next line based on job position -->
                                    <p class="card-text">Office number: ${element.officeNumber}</p>
                                </div>
                            </div>
                        </div>
                     `;
        case "Engineer":
            console.log("this is an Engineer");
            return `
                        <div class="col-sm-4">
                            <div class="card text-center shadow rounded" style="width: 18rem;" id="card-1">
                                <div class="card-body">
                                    <h3 class="card-title">${element.name}</h3>
                                    <h4 class="card-subtitle mb-2 text-muted">${element.role}</h4>
                                    <hr>
                                    <p class="card-text ID">ID: ${element.id}</p>
                                    <p class="card-text email">Email: ${element.email}</p>
                                    <!-- Enter a dynamic entry in next line based on job position -->
                                    <p class="card-text">Github Username: <a href="https://${element.githubUsername}.github.io/" class="card-link" target="_blank">${element.githubUsername}</a></p>
                                </div>
                            </div>
                        </div>
                    `
        case "Intern":
            console.log("this is an Intern");
            return `
                        <div class="col-sm-4">
                            <div class="card text-center shadow rounded" style="width: 18rem;" id="card-1">
                                <div class="card-body">
                                    <h3 class="card-title">${element.name}</h3>
                                    <h4 class="card-subtitle mb-2 text-muted">${element.role}</h4>
                                    <hr>
                                    <p class="card-text ID">ID: ${element.id}</p>
                                    <p class="card-text email">Email: ${element.email}</p>
                                    <!-- Enter a dynamic entry in next line based on job position -->
                                    <p class="card-text">School: ${element.school}</p>  
                                </div>
                            </div>
                        </div>
                    `
        };
};

module.exports = {
    generateCard
}